---
title: 'Syntax highlighting for fenced code blocks'
---

## In editor

It's handled by VS Code. The key here is tokenization. VS Code detects embedded languages in parent file, and redirects them to proper extensions that support the language.

To implement such support for a language, typically, two kinds of **TextMate language grammars** are needed: One defines language grammars for the language; the other provides scope redirection. Following TextMate's naming conventions is important for them.

A [language extension](https://code.visualstudio.com/api/language-extensions/overview) provides language grammars for the language.

As for scope redirection, if the language is widely accepted enough, you can simply register it at [microsoft/vscode-markdown-tm-grammar](https://github.com/microsoft/vscode-markdown-tm-grammar/blob/master/build.js). Or you can create an extension to inject grammars. When contributing such injection grammars, it's recommended to also set `embeddedLanguages` properly in extension manifest, so that most **declarative language features**, which are contributed by related language extensions, can work in the embedded language area.

An extension can also implement both. For example, [LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop) provides language grammars for LaTeX, and injects scope redirection for LaTeX fenced code block. This way is often more practical.

After tokenization, themes come to assign colors and styles to the document.

## In preview and exporting

It's powered by [highlight.js](https://github.com/highlightjs/highlight.js).

Syntax highlighting in preview uses the one bundled with VS Code's built-in `vscode.markdown-language-features` extension. In exporting to HTML, it uses the one shipped with this extension.

## References

* [Embedded languages | Syntax highlighting | Visual Studio Code Extension API](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#embedded-languages)
* [Injection grammars | Syntax highlighting | Visual Studio Code Extension API](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#injection-grammars)
* [Naming Conventions | Language Grammars | TextMate 1.x Manual](https://macromates.com/manual/en/language_grammars#naming_conventions)
* [mjbvz/vscode-fenced-code-block-grammar-injection-example](https://github.com/mjbvz/vscode-fenced-code-block-grammar-injection-example)
