# Math

## Overview

LaTeX math rendering is powered by [KaTeX](https://katex.org/docs/supported.html).

Currently, only the [pandoc-style](https://pandoc.org/MANUAL.html#math) is supported:

* `$...$` for math span (inline).

* `$$...$$` for math block (display).

There are [proposals](https://github.com/yzhang-gh/vscode-markdown/labels/Area%3A%20math) for improving this. Any help is welcome.

For dedicated math support, now it's recommended to set:

```json
"markdown.extension.math.enabled": false
```

and choose other solutions:

* [Markdown+Math](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath)

* [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

## Completion

Limited code completion for LaTeX commands is provided.
