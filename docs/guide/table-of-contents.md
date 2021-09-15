[#360]: https://github.com/yzhang-gh/vscode-markdown/pull/360

[#525]: https://github.com/yzhang-gh/vscode-markdown/issues/525

# Table of contents

## Overview

The table of contents (TOC) is implemented as Markdown list.

A TOC is just a type of Markdown lists. No extended syntax or directive (comment) is needed. The [Dice's coefficient](https://www.npmjs.com/package/string-similarity) is mainly used to identify TOCs. This design ensures a clean and natural experience. ([v1 README](https://github.com/yzhang-gh/vscode-markdown/blob/48fa3cb5847ecbdb9cb00cff4f0b7d0285448772/README.md))

Multiple TOCs are also allowed. For example, you may want to put one TOC at the beginning of the document, and the other at the end. ([#360][])

## Creating a TOC

Run command "**Create Table of Contents**" to insert a new TOC.

Update TOCs manually by "**Update Table of Contents**".

The TOC is **automatically updated** on file saving by default. You can change the `toc.updateOnSave` setting to disable it.

The indentation size reuses the `list.indentationSize` setting. The indentation type (space or tab) of TOC can be configured per file by the "**Editor Indentation**" in the **Status Bar**.

Different methods to generate heading ID are supported: VS Code, GitHub, GitLab, and more. Set the `slugifyMode` setting accordingly.

## Suppressing TOC detection

Add a `<!-- no toc -->` comment above the list, in case you encounter **unexpected TOC recognition**. ([#525][])

## Hiding headings from TOC

::: danger
Multiple usability and reliability issues have been found. This feature needs a thorough revision. Use at your own risk for now.
:::

There are 3 ways to control which headings should not be present in a TOC.

When omitting headings, **make sure headings within a document are unique**. Duplicate headings may lead to unpredictable behavior.

* Add a comment `<!-- omit in toc -->` at the end of a heading or above it.

* Use the `toc.levels` setting to only show a range of levels of headings in TOCs.

* Use the `toc.omittedFromToc` setting to omit some headings (and their subheadings) from TOC.

  ```json
  {
      // In your settings.json
      "markdown.extension.toc.omittedFromToc": {
          // Use a path relative to your workspace.
          "README.md": [
              "# Introduction",
              "## Also omitted"
          ],
          // Or an absolute path for standalone files.
          "/home/foo/Documents/todo-list.md": [
              "## Shame list (I'll never do these)"
          ]
      }
  }
  ```

  For setext headings (underlined with `===` or `---`), put their ATX versions (`#` and `##`) in the setting, respectively.

## Section numbering

::: danger
This feature has non-critical usability issues. We are exploring solutions.
:::
