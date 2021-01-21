# Compatibility

## Dependency on `vscode.markdown-language-features`

This extension leverages VS Code's built-in [`vscode.markdown-language-features`](https://github.com/microsoft/vscode/tree/master/extensions/markdown-language-features) extension.

Commands:

* `markdown.showPreview`
  * <https://github.com/microsoft/vscode/blob/7ee9aa4757212dd513e7cf4b9b67426401e64695/extensions/markdown-language-features/src/commands/showPreview.ts#L53-L69>
* `markdown.showPreviewToSide`
  * <https://github.com/microsoft/vscode/blob/7ee9aa4757212dd513e7cf4b9b67426401e64695/extensions/markdown-language-features/src/commands/showPreview.ts#L71-L85>

Configuration:

* `markdown.preview.breaks`
* `markdown.preview.fontFamily`
* `markdown.preview.fontSize`
* `markdown.preview.lineHeight`
* `markdown.preview.linkify`
* `markdown.styles`

Contexts:

* `markdownPreviewFocus`
  * <https://github.com/microsoft/vscode/blob/fdf23dc5f95f4a17b246dbebc9af14dab5043334/extensions/markdown-language-features/src/features/previewManager.ts#L57>
  * <https://github.com/microsoft/vscode/blob/fdf23dc5f95f4a17b246dbebc9af14dab5043334/extensions/markdown-language-features/src/features/previewManager.ts#L235-L237>

## Markdown preview

This extension contributes to VS Code's built-in Markdown preview.

It should work harmoniously with other extensions that follow [VS Code's guide](https://code.visualstudio.com/api/extension-guides/markdown-extension).

## Exporting to HTML

This extension uses [markdown-it](https://github.com/markdown-it/markdown-it) to render HTML, and tries to load Markdown extensions in the same way as VS Code.

It should produce **nearly** the same output as VS Code.
