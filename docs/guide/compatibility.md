[#89]: https://github.com/yzhang-gh/vscode-markdown/issues/89

[#144]: https://github.com/yzhang-gh/vscode-markdown/issues/144

[#200]: https://github.com/yzhang-gh/vscode-markdown/issues/200

[#320]: https://github.com/yzhang-gh/vscode-markdown/issues/320

[#423]: https://github.com/yzhang-gh/vscode-markdown/issues/423

[#711]: https://github.com/yzhang-gh/vscode-markdown/issues/711

[#832]: https://github.com/yzhang-gh/vscode-markdown/issues/832

[#855]: https://github.com/yzhang-gh/vscode-markdown/issues/855

[#857]: https://github.com/yzhang-gh/vscode-markdown/issues/857

[#928]: https://github.com/yzhang-gh/vscode-markdown/issues/928

[#967]: https://github.com/yzhang-gh/vscode-markdown/issues/967

[#969]: https://github.com/yzhang-gh/vscode-markdown/issues/969

[#993]: https://github.com/yzhang-gh/vscode-markdown/issues/993

[#995]: https://github.com/yzhang-gh/vscode-markdown/issues/995

[#1008]: https://github.com/yzhang-gh/vscode-markdown/issues/1008

[vscode-markdown-extension-guide]: https://code.visualstudio.com/api/extension-guides/markdown-extension

[vscode-markdown-feature-introduction]: https://code.visualstudio.com/docs/languages/markdown

# Compatibility

## Known issues

### Responsiveness and long-running markdown-it plugin

Symptom:

The "Table of Contents" feature shows significant lag.

The whole editor stops responding.

Known cases:

<!-- Sort names in alphabetical order. -->

* [Bracket Pair Colorizer 2 (`CoenraadS.bracket-pair-colorizer-2`)](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) ([#423][], [VS Code's report](https://code.visualstudio.com/updates/v1_60#_high-performance-bracket-pair-colorization))

* [Foam for VSCode (`foam.foam-vscode`)](https://marketplace.visualstudio.com/items?itemName=foam.foam-vscode) ([#928][])

* [Markdown Notes (`kortina.vscode-markdown-notes`)](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes) ([#855][])

* [Spell Right (`ban.spellright`)](https://marketplace.visualstudio.com/items?itemName=ban.spellright) ([#423][], [bartosz-antosik/vscode-spellright#273](https://github.com/bartosz-antosik/vscode-spellright/issues/273))

* [Todo Tree (`Gruntfuggly.todo-tree`)](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) ([#969][])

* [yUML (`JaimeOlivares.yuml`)](https://marketplace.visualstudio.com/items?itemName=JaimeOlivares.yuml) ([#711][])

Workaround:

Disable VS Code extensions you don't need until the editor works again.

Occasionally, removing some key bindings can mitigate the problem. See the "Non-keyboard IME" section.

Explanation:

Some markdown-it plugins use algorithms with very high [time complexity](https://en.wikipedia.org/wiki/Time_complexity). If multiple VS Code extensions depend on such things, the VS Code extension host may take tens of thousands of milliseconds, because it is single-threaded. Our product loads every markdown-it plugin [contributed to VS Code's built-in Markdown preview][vscode-markdown-extension-guide], which may double the time.

Some VS Code extensions don't interact with Markdown documents, but themselves can already slow the extension host, which may worsen the situation.

[Reporting a performance issue](../contributing/performance-issue.md)

[Extensions have poor performance due to being single-threaded with other extensions (microsoft/vscode#75627)](https://github.com/microsoft/vscode/issues/75627)

### Rendering for math in the Markdown preview

Symptom:

The math and possible other elements in VS Code's built-in Markdown preview do not work as expected.

Known cases:

* [Markdown+Math (`goessner.mdmath`)](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath) ([#967][], [goessner/mdmath#114](https://github.com/goessner/mdmath/issues/114))

* [VS Code's Markdown Math (`vscode.markdown-math`)](https://github.com/microsoft/vscode/tree/main/extensions/markdown-math)

Workaround:

You can keep only one VS Code extension for such need, and have to disable the others.

Our contribution is controlled by the `markdown.extension.math.enabled` setting.

[`vscode.markdown-math`'s contribution](https://code.visualstudio.com/updates/v1_58#_math-formula-rendering-in-the-markdown-preview) is controlled by the `markdown.math.enabled` setting.

Please consult respective documentation.

Explanation:

When multiple markdown-it plugins with the same goal are loaded at the same time, the result is mostly unpredictable. There can be collision or even worse problems.

### Syntax highlighting for math in editor

Symptom:

Syntax highlighting in a Markdown editor is broken, when the document contains [pandoc-style math areas](./math.md).

Known cases:

* [VS Code's Markdown Math (`vscode.markdown-math`)](https://github.com/microsoft/vscode/tree/main/extensions/markdown-math) ([#1008][])

Workaround:

You can keep only one VS Code extension for such need, and have to disable the others.

The only way to remove [TextMate grammar contribution (`contributes.grammars`)](https://code.visualstudio.com/api/references/contribution-points#contributes.grammars) is disabling the corresponding extension.

Explanation:

The merge result is unpredictable.

### Key binding

Symptom:

Some keyboard shortcuts that you're accustomed to are overridden.

Known cases:

* `Ctrl + B` / `⌘ + B` ([#89][])

* `⌘ + M` ([#832][])

* `Alt + C` / `⌥ + C` ([#320][])

* `Shift + Alt + UpArrow` / `Shift + Alt + DownArrow` ([#857][])

* `Ctrl + I` / `⌘ + I` ([#995][])

* `Tab` ([#993][])

Workaround:

Please follow [VS Code's detecting and troubleshooting guide](https://code.visualstudio.com/docs/getstarted/keybindings#_detecting-keybinding-conflicts).

Customize the key bindings to the way it works best for you.

Explanation:

[Key binding](./key-binding.md)

### Non-keyboard IME

Symptom:

You cannot type characters or snippets that you defined in these IMEs as expected. Random text may be finally inserted.

Vietnamese users may also experience this problem.

People who use keyboard macros may also experience this problem.

People who type very fast may also experience this problem.

Known cases:

* [#200][]

* Alfred

* aText

* AutoHotkey

* Beeftext

* Breevy

* EVKey

* Keyboard Maestro

* UniKey

Workaround:

Delete [key bindings](https://code.visualstudio.com/docs/getstarted/keybindings) for the `markdown.extension.onBackspaceKey` command. This effectively removes some of our list editing features.

Explanation:

This issue cannot be resolved in foreseeable future due to how input is handled.

Non-keyboard IME (input method editor) is a kind of programs which can simulate keystrokes as if they were from a physical keyboard. There is no universal term for it. Such IMEs are usually handwriting recognition or voice recognition (speech to text) software. They can dispatch virtual key events at a blazing rate.

When you are editing a Markdown document, we analyze it on each change. Each analysis usually takes tens to hundreds of milliseconds.

To implement list editing features under the current VS Code, we have to hook a lot of keys, such as Backspace, Tab, and Enter. However, we cannot catch up with those IMEs. That's why your input appears lost.

### Auto preview

Symptom:

"Auto preview" focuses the wrong editor, or breaks the editor layout.

Known cases:

* [#144][]

Workaround:

Do not use this feature. It's disabled by default now.

If you're still using it, disable it at the `markdown.extension.preview.autoShowPreviewToSide` setting.

Explanation:

The feature is almost discarded. We nowadays can hardly hack [VS Code's built-in Markdown preview][vscode-markdown-feature-introduction].

## Dependency on `vscode.markdown-language-features`

This product leverages VS Code's built-in [`vscode.markdown-language-features`](https://github.com/microsoft/vscode/tree/master/extensions/markdown-language-features) extension.

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

This product contributes to [VS Code's built-in Markdown preview][vscode-markdown-feature-introduction].

It should work harmoniously with other extensions that follow [VS Code's guide][vscode-markdown-extension-guide] in most cases.

## Exporting to HTML

This product uses [markdown-it](https://github.com/markdown-it/markdown-it) to render HTML, and tries to load Markdown extensions in the same way as VS Code.

It should produce **nearly** the same output as VS Code.
