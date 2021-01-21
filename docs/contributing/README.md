---
sidebarDepth: 2
---

# Contributing guide

Welcome!

We are looking forward to shaping the product together with you.

This article focuses on development. Please refer to [Creating an issue](./issue.md) for communication guidelines.

![GitHub repo size](https://img.shields.io/github/repo-size/yzhang-gh/vscode-markdown)

## Prerequisites

It is *strongly recommended* to always use the latest.

You will need all the following:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) 12
* [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/), or [Visual Studio Code](https://code.visualstudio.com/)

It is recommended to also have these tools:

* A Git GUI client
* [PowerShell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell) 7 or higher
* [Python](https://www.python.org/downloads/) 3.6 or higher

If you are going to build VSIX packages, install [vsce](https://www.npmjs.com/package/vsce):

```shell
npm install -g vsce
```

## Setting up environment

Under the repository directory, run:

```shell
npm ci
```

This should get you the same Node.js dependencies as in the production environment.
