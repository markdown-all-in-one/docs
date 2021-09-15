# List editing

## List continuation

Press `Enter` in a list item, and a proper list marker will be placed on the new line. If it's an ordered list, the numbers will be also updated. ["**Copy / Move Line Up / Down**"](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_copy-line-up-down) are also handled.

To increase or decrease the list level, press `Tab` or `Backspace` after the first space following the list marker.

## Adaptive indentation

By default, we try to determine indentation size for different list contexts according to the [CommonMark Spec](https://spec.commonmark.org/0.30/#list-items).

List items are left aligned with their parent's content. This **usually** means:

* Bullet list items are indented by two spaces each level.

* Ordered list items are indented by the width of their parent's list marker plus following spaces.

If you prefer a fixed size, please change the `list.indentationSize` setting:

```json
"markdown.extension.list.indentationSize": "inherit"
```

Then, we will stick to VS Code's tab size, which is configured by the "**Editor Indentation**" in the **Status Bar** or the `editor.tabSize` setting.

## Task list

GitHub Flavored Markdown task list is supported.

`Alt + C` (the `markdown.extension.checkTaskList` command) to check a task list item.
