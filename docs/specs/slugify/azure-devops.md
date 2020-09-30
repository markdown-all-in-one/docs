---
title: 'Slugify rules for Azure DevOps'
---

## Overview

Azure DevOps users are encouraged to use [its `[[_TOC_]]` tag](https://docs.microsoft.com/en-us/azure/devops/project/wiki/wiki-markdown-guidance#table-of-contents-toc-for-wiki-pages) whenever possible.

Our implementation is based on Microsoft Docs, which is not very detailed, and our inspection on Azure DevOps Service, Version Dev18.M174.1 (AzureDevOps_M174_20200918.5).

Slugify procedure:

1. Let `S` be the heading content.
2. Apply the following to `S`:
   1. Convert all characters to lower case.
   2. Replace every character under **Unicode General Category Zs** with `-` (U+002D).
   3. Escape according to **RFC 3986**. (To prevent unintended consequences, like breaking Markdown.)
3. Return `S`.

## Known issues

Azure DevOps generates anchors for headings only based on the heading content, thus, multiple headings with the same content should have the same slug. However, our architecture appends numbers when meeting duplicate slugs. We prefer to consider Azure DevOps's behavior as its own limitations, and not solve this problem in the foreseeable future.

## Non-goals

* We will not support every version of VSTS, but instead only focus on the latest Azure DevOps Services.
* Azure DevOps allows to omit the space after ATX heading opening sequence. John Gruber's original implementation also allows it. However, CommonMark does not allow it, and neither do we.

## References

* [Anchor links | Markdown syntax - Azure DevOps | Microsoft Docs](<https://go.microsoft.com/fwlink/?linkid=851652#anchor-links>)
* [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986)
* [MD024 - Multiple headings with the same content | markdownlint](https://github.com/DavidAnson/markdownlint/blob/v0.21.0/doc/Rules.md#md024)
* [ATX headings | CommonMark Spec 0.29](https://spec.commonmark.org/0.29/#atx-headings)
* [Markdown syntax and flavors](../../decisions/markdown-syntax-and-flavors.md)
