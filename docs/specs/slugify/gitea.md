# Slugify rules for Gitea

## Overview

Gitea has been using [goldmark](https://github.com/yuin/goldmark) with their own slugify method since version 1.11 released on 2020-02-10.

## References

* <https://docs.gitea.io/en-us/faq/#why-is-my-markdown-broken>

* <https://pkg.go.dev/code.gitea.io/gitea/modules/markup/markdown?tab=imports>

* [go-gitea/gitea#9533](https://github.com/go-gitea/gitea/pull/9533)

* <https://github.com/yuin/goldmark/blob/bd58441cc141c6455d2ed592a4f1d01adee4211a/README.md#context-options>

  > `IDs` allows you to change logics that are related to element id (ex: Auto heading id generation).

* <https://github.com/yuin/goldmark/issues/56#issuecomment-562963529>
