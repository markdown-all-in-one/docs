// File: dump.ts

import * as vscode from "vscode";
import { TextFileWriter } from "./text-writer";

export type ISerializablePrimitive = string | number | boolean | null;

/**
 * Represents an array that can be serialized to JSON.
 */
export type ISerializableArray = ReadonlyArray<ISerializablePrimitive | ISerializableObject>;

/**
 * Represents an object that can be serialized to JSON.
 */
export interface ISerializableObject {
    readonly [key: string]: ISerializablePrimitive | ISerializableObject | ISerializableArray;
}

/**
 * Serializes the data to JSON, and appends it to the file.
 *
 * @param path The Uri that points to the file.
 */
export async function dump<T extends ISerializableObject | ISerializableArray>(
    path: vscode.Uri,
    data: T
): Promise<void> {
    const writer = new TextFileWriter(path);
    try {
        await writer.write(JSON.stringify(data));
        await writer.flush();
    } finally {
        await writer.dispose();
    }
}
