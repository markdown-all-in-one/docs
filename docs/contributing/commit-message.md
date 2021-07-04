# Commit message

🚧 WIP

"Emoji extension" is finished.

## Format

Each commit **message** consists of a **summary**, and an optional **description**. There is one blank line between them.

Each commit **description** consists of a **body**, and an optional **footer**. There is one blank line between them.

## Examples

```git-commit
👷 Unify build scripts
```

```git-commit

```

```git-commit
🐛 Rewrite heading processing (#877)


Co-authored-by: GitHub <19864447+web-flow@users.noreply.github.com>
```

## Message summary

The summary consists of the following parts. There is one space (U+0020) between them.

1. One appropriate emoji character at the beginning.
   * See the "Emoji extension" section.

2. The main part.
   * Use the imperative, present tense.
   * Use sentence-style capitalization.
   * No `.`, `!`, or `?` at the end.
   * At least 20 characters. Should be not more than 70 characters.

3. ~~(Optional) Scope.~~
   * Reserved for future use.

4. (Optional) Connected issues.
   *

## Message body

## Message footer

## Emoji extension

The approved emojis and their precedence are listed as below.

1. &#128027;
1. &#10024;
1. &#127959;
1. &#128293;
1. &#127760;
1. &#128119;
1. &#9989;
1. &#11014;
1. &#11015;
1. &#128295;
1. &#128221;

We extend the generic [Emoji](./emoji.md) specification with:

| Code    | Emoji     |
| ------- | --------- |
| U+1F310 | &#127760; |
| U+2B06  | &#11014;  |
| U+2B07  | &#11015;  |

* &#127760; (Improve localization resources): Change only localization resources, such as `nls` JSON files.

* &#11014; (Update dependencies): Update dependencies only.

* &#11015; (Downgrade dependencies): Downgrade dependencies only.

## Design explanation

## References

* [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) ([GitHub](https://github.com/conventional-commits/conventionalcommits.org))
* [CommitMessageConventions | Git SCM Wiki](https://git.wiki.kernel.org/index.php/CommitMessageConventions)
* [What’s with the 50/72 rule? | Preslav Rachev](https://preslav.me/2015/02/21/what-s-with-the-50-72-rule/) ([Medium](https://p5v.medium.com/what-s-with-the-50-72-rule-8a906f61f09c))
* [Use sentence-style capitalization | Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/text-formatting/using-type/use-sentence-style-capitalization)
