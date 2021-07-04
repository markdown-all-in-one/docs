# Creating an issue

## Introduction

<!-- It can be frustrating to find a problem. It can be exciting to come up with a new idea. -->

Please calm down and search for existing issues before filing a new one. It would be best to also take a look at the closed ones.

Then, [**fill out our issue template**](https://github.com/yzhang-gh/vscode-markdown/issues/new/choose), if you believe you encountered something new. It ensures effective and efficient communication.

This article demonstrates some common cases.

Please follow the issue template and [Collecting diagnostic data](./diagnostic-data.md) to collect relevant information.

If you experienced a performance regression, such as lag and unresponsiveness, please also check [Reporting a performance issue](./performance-issue.md).

## Reporting unexpected behavior

**Good**. It describes how to trigger the bug:

> **Problem**
>
> When I print a document to HTML, I can't find any HTML file in my current folder, and only get error messages (see below).
>
> **How to reproduce**
>
> 1. Open a Markdown document.
> 2. Run command "**Markdown All in One: Print current document to HTML**".
>
> **Configuration**
>
> Default.
>
> **Environment**
>
> * Markdown All in One: 3.3.0
> * Markdown Notes: 0.0.20
> * VS Code: 1.50.0 (system setup)
> * OS: Windows 10 Pro, Version 1909, Build 18363.1139, 64-bit
>
> **Diagnostic data**
>
> Error message:
>
> ...

**Wrong**! It does not contain any valid or useful information:

> I press backspace or enter. Nothing happened or would take 10 seconds to happen.

## Making a request

**Good**. It clearly shows the value:

> **Overview**
>
> Markdown provides multiple ways to create links. It would be useful to have refactorings that convert between inline and reference links. Doing it manually all the time makes me quite sad.
>
> In practice, the 5 kinds below should be enough:
>
> ...
>
> **Cases**
>
> This feature will be especially helpful in these scenarios:
>
> * ...
> * ...

**Wrong**! It's just a complaint:

> Please optimize the build process. It takes **gibibytes of disk space**, and I have to wait for tens of minutes.

## Preferred languages

We prefer all communications to be in English. Please use American English whenever possible.

We recommend finding a human translator if you have difficulty in English, as in our experience, automatic translation services are not able to handle the technical language needed to effectively communicate about software issues.

## References

* [GitHub Community Guidelines](https://docs.github.com/en/github/site-policy/github-community-guidelines)
