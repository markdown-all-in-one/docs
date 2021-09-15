[#24]: https://github.com/yzhang-gh/vscode-markdown/issues/24

[#259]: https://github.com/yzhang-gh/vscode-markdown/issues/259

[#318]: https://github.com/yzhang-gh/vscode-markdown/issues/318

[#1000]: https://github.com/yzhang-gh/vscode-markdown/issues/1000

# Table

## Overview

GitHub Flavored Markdown table is supported.

The rendering is powered by [markdown-it](https://github.com/markdown-it/markdown-it).

Some features are not available in tables.

## Formatting

A formatter is registered via [VS Code API](https://code.visualstudio.com/api/language-extensions/programmatic-language-features#format-source-code-in-an-editor).

["**Format Document**"](https://code.visualstudio.com/docs/editor/codebasics#_formatting) to invoke it.

## Caveats

The GFM table strictly follows CommonMark's "first block, then inline" parsing strategy. Thus, a pipe (`|`, U+007C) is always recognized as cell separator, unless you escape it (`\|`). ([github/cmark-gfm#24](https://github.com/github/cmark-gfm/issues/24#issuecomment-298357389))

Be careful!

You have to escape pipes even if they are in code spans. ([#24][], [#1000][])

You cannot use pipes (absolute value symbol) in math spans inside a table. ([#259][], [#318][])
