---
title: 'Reporting a performance issue'
---

If you believe you have experienced a performance regression caused by our product, please report it to us as described below.

First, download the [latest dev build](https://github.com/yzhang-gh/vscode-markdown/actions?query=workflow%3ACI+event%3Apush+is%3Asuccess), extract the `debug.vsix`, and install it via VS Code command "**Install from VSIX**".

Then, create a [**Bug report**](https://github.com/yzhang-gh/vscode-markdown/issues/new/choose), and include the requested information listed below (as much as you can provide) to help us better understand the nature of the possible issue:

* A CPU profile. (`.cpuprofile.txt`) **Required**.
  * Follow [VS Code's guide](https://github.com/microsoft/vscode/wiki/Performance-Issues#profile-the-running-extensions).
* A Markdown file to reproduce. (`.md.txt`)
* The commit SHA of the dev build.
* Basic environment information.
  * Go to VS Code's menu **Help** > **About**, copy.
* Full system information.
  1. Get into a state where you can reproduce the issue.
  2. Go to VS Code's menu **Help** > **Report issue**.
  3. In the **Issue Reporter** window, set type to **Performance Issue**, set source to **Visual Studio Code**, fill other fields with arbitrary text, and make sure to check all the "Include ..." options.
  4. Click **Preview on GitHub**. A GitHub issue page will be opened. You can simply close it safely.
  5. **All needed data should be in your clipboard.** Paste it after our "**Error message in the console**" section.

When attaching files, make sure the file extension of these files is `txt`, or pack them in a ZIP, due to [GitHub's restrictions](https://docs.github.com/en/articles/file-attachments-on-issues-and-pull-requests).

Please understand that **if we cannot gather enough information to diagnose, your report will be ignored and closed**.
