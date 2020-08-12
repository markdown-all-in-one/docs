---
title: 'Compatibility'
---

## Dependency on `vscode.markdown-language-features`

This extension leverages VS Code's built-in [`vscode.markdown-language-features`](https://github.com/microsoft/vscode/tree/master/extensions/markdown-language-features) extension.

Commands:

* `markdown.showPreview`
* `markdown.showPreviewToSide`

Contexts:

* `markdownPreviewFocus`

## Markdown preview

This extension uses [markdown-it](https://github.com/markdown-it/markdown-it) to render HTML, and contributes to VS Code's built-in Markdown preview.

It should work harmoniously with other extensions that follow [VS Code's guide](https://code.visualstudio.com/api/extension-guides/markdown-extension).
