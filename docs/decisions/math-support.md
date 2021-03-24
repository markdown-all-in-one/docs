# Math support

## Overview

LaTeX math rendering is powered by [KaTeX](https://katex.org/docs/supported.html).

This extension currently only recognizes [pandoc-style delimiters](https://pandoc.org/MANUAL.html#math):

* `$...$` for math span (inline).
* `$$...$$` for math block (display).

There are [proposals](https://github.com/yzhang-gh/vscode-markdown/labels/Area%3A%20math) for improving this. Any help is welcome.

For dedicated math support, now it's recommended to set this extension's `markdown.extension.math.enabled` to `false`, and use [Markdown+Math](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath).
