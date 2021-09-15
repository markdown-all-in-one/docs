// File: text-writer.ts

import * as vscode from "vscode";
import { IDisposable } from "./i-disposable";
const utf8Encoder = new TextEncoder();

/**
 * Represents the state of a writer.
 */
export enum WriterState {
    Idle,
    Dirty,
    Disposed,
}

/**
 * Represents a writer that can write a sequential series of characters.
 */
export interface ITextWriter extends IDisposable {
    /**
     * Clears all buffers for the current writer and causes any buffered data to be written to the underlying stream.
     */
    flush(): void;

    /**
     * Writes a string to the text stream.
     */
    write(text: string): void;
}

/**
 * Default buffer size: 1024 bytes.
 */
const Default_Buffer_Size = 1024;

/**
 * Implements a naive text writer that appends text to a file.
 */
export class TextFileWriter implements ITextWriter {
    readonly #buffer: Uint8Array;

    readonly #file: vscode.Uri;

    /**
     * The next available index in the buffer.
     */
    #bufferRear = 0;

    #state: WriterState = WriterState.Idle;

    get file() {
        return this.#file;
    }

    get state() {
        return this.#state;
    }

    /**
     * @param file The file will be created, if it does not already exist.
     * @param bufferSize The buffer size in bytes.
     */
    constructor(file: vscode.Uri, bufferSize = Default_Buffer_Size) {
        this.#file = file;
        this.#buffer = new Uint8Array(bufferSize);
    }

    async dispose(): Promise<void> {
        if (this.#state === WriterState.Disposed) {
            return;
        }

        // Avoid throwing error.
        try {
            await this.flush();
        } catch {}

        this.#bufferRear = 0;
        this.#state = WriterState.Disposed;
    }

    #readFile(): Thenable<Uint8Array> {
        return vscode.workspace.fs.readFile(this.#file).then(
            (value) => value,
            (error) => {
                if (error instanceof vscode.FileSystemError && error.code === "FileNotFound") {
                    return new Uint8Array(0);
                } else {
                    throw error;
                }
            }
        );
    }

    async #writeFile(...data: readonly Uint8Array[]): Promise<void> {
        const totalLength = data.reduce((result, item) => result + item.length, 0);

        if (!totalLength) {
            throw new Error("`data` is empty.");
        }

        const content = new Uint8Array(totalLength);

        let ptr = 0;
        for (const item of data) {
            content.set(item, ptr);
            ptr += item.length;
        }

        await vscode.workspace.fs.writeFile(this.#file, content);
    }

    async flush(): Promise<void> {
        if (this.#bufferRear === 0) {
            return;
        }

        await this.#writeFile(
            await this.#readFile(), //
            this.#buffer.subarray(0, this.#bufferRear)
        );

        this.#bufferRear = 0;
        this.#state = WriterState.Idle;
    }

    async write(text: string): Promise<void> {
        const bin = utf8Encoder.encode(text);

        if (this.#bufferRear + bin.length >= this.#buffer.length) {
            await this.#writeFile(
                await this.#readFile(), //
                this.#buffer.subarray(0, this.#bufferRear),
                bin
            );

            this.#bufferRear = 0;
            this.#state = WriterState.Idle;
        } else {
            this.#buffer.set(bin, this.#bufferRear);
            this.#bufferRear += bin.length;
            this.#state = WriterState.Dirty;
        }
    }
}
