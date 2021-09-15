# File naming

## Examples

* `i-disposable`

* `json5`

* `markdown-engine`

* `markdown-it-task-list`

## Description

```javascript
/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/
```

Unless conventions apply, the base name of a file and the name of a directory use `kebab-case`.

This roughly follows the rules of [npm package name](https://docs.npmjs.com/creating-a-package-json-file), and adds a few restrictions to ensure interoperability.

It's recommended to only use lower case ASCII letters in each word:

```javascript
/^[a-z]+(-[a-z]+)*$/
```

Entries with conventions, such as `README`, are not affected by this rule.

## Background

The printable ASCII characters are still the safest set nowadays.

Case sensitivity is also a big concern. URI is case-sensitive. Some file systems are case-sensitive, while others are not. Mixed case can frequently lead to unexpected behavior in access, searching, comparison, and sorting.

Some projects choose `snake_case`. But renaming is painful, since most file explorers and text editors don't recognize underscores as word separators.

## Conventional file names

This article does not apply to those with conventions. This section lists some well-known ones.

Entries:

* `.github`

* `CHANGELOG`

* `CITATION`

* `CODE_OF_CONDUCT`

* `CODEOWNERS`

* `CONTRIBUTING`

* `LICENSE`

* `README`

Environments:

* .NET

* Git

* Java

* MATLAB

* Python

* Ruby

* Vue

* Webpack

* Wolfram
