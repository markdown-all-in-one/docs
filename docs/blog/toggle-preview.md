# Toggle preview

## Announcement

As of version 3.5.0, the internal implementation of "**Toggle preview**" has changed. The command `closePreview` has superseded `togglePreview` and `togglePreviewToSide`.

A new command is **introduced**:

* `markdown.extension.closePreview` (version 3.5.0, commit 05fb1af27150fa8c1c271fc03533d28787ea25d1)

It is only available under VS Code's built-in Markdown preview ([`markdownPreviewFocus`](https://github.com/microsoft/vscode/blob/fdf23dc5f95f4a17b246dbebc9af14dab5043334/extensions/markdown-language-features/src/features/previewManager.ts#L57) context), and is only assigned two key bindings:

* <kbd>Ctrl / ⌘</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>
* <kbd>Ctrl / ⌘</kbd> + <kbd>K</kbd> <kbd>V</kbd>

The following commands have been **deprecated**:

* `markdown.extension.togglePreview` (deprecated since version 3.5.0, commit 05fb1af27150fa8c1c271fc03533d28787ea25d1)
* `markdown.extension.togglePreviewToSide` (deprecated since version 3.3.0, commit 20316d5d0409aa49b77a2bf655768a6e4e111c07)

## User impact

This is a seamless change for most users. No action is needed.

The new design minimizes conflicts, and should no longer override other key bindings accidentally.

If you encounter unexpected behavior, please follow [VS Code's detecting and troubleshooting guide](https://code.visualstudio.com/docs/getstarted/keybindings#_detecting-keybinding-conflicts).

## Background

In March 2018, version 1.1.1 (commit 2652869776c11ef8b974c8a5018c72f5a9ca9a8d, issue [#86](https://github.com/yzhang-gh/vscode-markdown/issues/86)) introduced "Toggle preview".

It turned out to be a poor design. Users occasionally complained, not only in our issue tracker, but also [around GitHub](https://github.com/search?q=%22markdown.extension.togglePreview%22). We tried to patch it, but there was actually nothing to do. (PR [#435](https://github.com/yzhang-gh/vscode-markdown/pull/435))

Eventually in PR [#780](https://github.com/yzhang-gh/vscode-markdown/pull/780), thanks to [**Anton Tuchkov** (@Technik-J)](https://github.com/Technik-J), who revealed that VS Code ([since version 1.21.0](https://github.com/microsoft/vscode/commit/94ea10f93804d95e4a5c790c1c862bc496c2b9f1)) sets the `markdownPreviewFocus` context for its Markdown preview, we are able to put an end to this problem.
