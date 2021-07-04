# Emoji

## Introduction

This is the specification of the usage of emojis in commit messages.

It is intentionally generic, so that can be ported to other projects easily. Theoretically, although strongly discouraged, you can even try to combine this system with [Conventional Commits](https://www.conventionalcommits.org/).

Your project may add new emojis for special needs, but may not change the description of the existing ones. Be careful! You are responsible for making your extension free of ambiguity and error.

## Approved emojis

This section lists all the emojis allowed in commit messages of the mainline (typically the `master` or `main` branch). Each table consists of the Unicode code, character, and meaning of each emoji. Each emoji represents a general category of actions.

This specification requires to use single code point. This page is carefully generated. You can copy these emojis with confidence.

<!-- The following are sorted in the same way as "Precedence". -->

### Content

| Code    | Emoji     | Meaning     |
| ------- | --------- | ----------- |
| U+1F41B | &#128027; | Fixing      |
| U+2728  | &#10024;  | Feature     |
| U+1F3D7 | &#127959; | Refactoring |
| U+1F525 | &#128293; | Removal     |

The content is the most significant part of a repository.

Typically, for a repository that hosts a product, the content is the source of the product. For a repository that hosts documentation, the content is the source of the documentation. The concrete definition depends on your project.

* Fixing: Fix a bug, which is typically an error or unexpected behavior.
* Feature: Introduce a new feature, or enhance existing features. For a documentation repository, a feature usually refers to an article.
* Refactoring: A content change that neither fixes a bug nor adds a feature. For instance, reorganization, improving structure, internal renaming, and formatting.
* Removal: Remove dead code or resources.

### Meta

| Code    | Emoji     | Meaning        |
| ------- | --------- | -------------- |
| U+1F477 | &#128119; | Infrastructure |
| U+2705  | &#9989;   | Test case      |
| U+1F527 | &#128295; | Configuration  |
| U+1F4DD | &#128221; | Documentation  |

Other parts of a repository are meta (the things about the repository itself).

The concrete definition depends on your project.

* Infrastructure: Change build system, test system, and CI/CD configuration files.
* Test case: Change test cases only.
* Configuration: Change miscellaneous configuration files, such as gitignore, editorconfig, and housekeeping bot configuration.
* Documentation: Change documentation only. The documentation here usually consists of repository README, license, contributing guide, code of conduct, and issue templates.

## Other emojis

Emojis except the approved are not allowed in commit messages of the mainline, but are useful in communications. This section is a recommendation about their usage. It can be regarded as a complement to [gitmoji](https://gitmoji.carloscuesta.me/).

| Code    | Emoji     | Meaning         |
| ------- | --------- | --------------- |
| U+26A1  | &#9889;   | Performance     |
| U+1F3A8 | &#127912; | Formatting      |
| U+1F4A5 | &#128165; | Breaking change |
| U+1F9EA | &#129514; | Experiment      |

## Precedence

From our experience, it's very common that a change involves many different types of operations. Dividing it into multiple commits would usually take an inappropriate amount of effort, and result in confusing and broken history. This section helps you choose an emoji in those scenarios.

We assign significance to each emoji to construct the following list. Therefore, test your change with each item in turn, and the first exact match will be the best.

The "exact match" ensures that a change won't be captured by its superset accidentally. For example, a test system change that affects test cases matches "Infrastructure", while a test case only change matches "Test case".

1. &#128027;
1. &#10024;
1. &#127959;
1. &#128293;
1. &#128119;
1. &#9989;
1. &#128295;
1. &#128221;

## Comparison with Conventional Commits types

People who are accustomed to Conventional Commits may find this section helpful.

| Emoji     | Types     |
| --------- | --------- |
| &#128027; | fix       |
| &#10024;  | feat      |
| &#127959; | refactor  |
| &#128119; | build, ci |
| &#9989;   | test      |
| &#128295; | chore     |
| &#128221; | docs      |

The table covers almost all popular types, including those which has been discarded by Angular but still common in other projects. But the following are intentionally excluded: perf, style.

Other parts of Conventional Commits are irrelevant to this specification.

## Design explanation

### Why not Conventional Commits

We understand that many people love Conventional Commits and the [Angular conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit). However, symbols and pictographs can improve readability, and when used properly, won't be bad for machine parsing.

### Why not gitmoji

We tried gitmoji. It is not handy. And the [Atom conventions](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages) are even more strange.

Lots of ambiguity and overlap is in gitmoji. Besides, some emojis are of multiple code points. Additionally, some appear to be designed for a very specific field.

In short, gitmoji can serve as a communication guide, but is not good for commit messages.

To reduce such friction, this specification selects a set of emojis with distinct meaning, and emojis only represent basic actions.

### Why single code point

To make things direct, simple, and easy.

We understand that many guides and IMEs recommend to append a Variation Selector-16 (U+FE0F) to certain characters to ensure emoji presentation. Besides, there are things like ZWJ sequences. However, they all focus on rendering. They could not benefit commit authors, but increase complexity of tooling.

We also give up emoji code for a similar reason. Additionally, in pull request title, emoji code can be of poor readability.

With single code point solution, contributors and tooling authors can work with emojis harmoniously, without comprehensive knowledge of Unicode.

### Why no "merge"

We are seeing more and more projects enforcing linear history.

For squash merge and rebase merge, there is no merge commit at all.

For three-way merge, you can try 🔀 (U+1F500, Twisted Rightwards Arrows).

### Why no "release"

Preferences vary so greatly that we cannot figure out a popular emoji for "release".

We leave the choice to project maintainers.

### Why no "revert"

"Revert" is a complex case, but in practice, merely caused by two reasons:

1. A commit was pushed by mistake.
2. Some severe degradation was observed.

If it was a mistake, we strongly recommend that you suspend development and contact your administrator to drop the commit. It should only take a few minutes, but will leave a cleaner and less confusing history and Git blame.

If it was some degradation, we recommend that you make a "Fixing" (🐛) with explanation like this:

```git-commit
🐛 Revert "<summary-of-the-reverted-commit>"

This reverts commit <hash>.

It damaged user data that is not in the default location.
```

Note that the above example only reverts single commit. In very rare cases, you need to revert multiple commits at once. Remember to summarize the commits concisely.

We leave the choice to project maintainers.

### Why no "internationalization and localization"

[Internationalization and localization](https://en.wikipedia.org/wiki/Internationalization_and_localization) is more of a scope, which is described in Conventional Commits, than an action. Besides, whether and how to do it depends on your project.

We leave the choice to project maintainers.

This also applies to "accessibility", "assets", "comments", "literals", "user experience", etc.

## References

* [Unicode Emoji](https://unicode.org/emoji/techindex.html)
* [Emojipedia](https://emojipedia.org/)
* [gitmoji](https://gitmoji.carloscuesta.me/) ([GitHub](https://github.com/carloscuesta/gitmoji))
* [Emoji cheat sheet](http://emoji-cheat-sheet.com/)
* [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) ([GitHub](https://github.com/conventional-commits/conventionalcommits.org))
* [Angular Contributing Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)
* [Vue Commit Message Convention](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)
* [Catalog of Refactorings](https://refactoring.com/catalog/)
* [Fira Code](https://github.com/tonsky/FiraCode)
