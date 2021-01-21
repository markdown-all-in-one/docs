# Reporting a performance issue

## Before proceeding

It can be frustrating to find the editor unresponsive. But most of the time, it is not our extension but the [complex interaction between VS Code extensions](https://github.com/microsoft/vscode/wiki/Explain-extension-causes-high-cpu-load) that causes the problem.

Therefore, **please do a quick check** as described below.

::: tip
To run a command, open [**Command Palette**](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) (<kbd>Ctrl / ⌘</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>).
:::

### Recommended

As of [VS Code version 1.52](https://code.visualstudio.com/updates/v1_52#_troubleshooting-extension-bisect), run VS Code command "**Start Extension Bisect**". It then guides you.

### Traditional

1. Open a workspace, where you can reproduce the issue.
2. Run VS Code command "**Duplicate Workspace in New Window**" to temporarily create a copy for test.
   ::: danger
   This step is strongly recommended. Otherwise, you might have a hard time in resetting environment.

   VS Code still does not provide a friendly way to manage workspace storage. ([microsoft/vscode#32461](https://github.com/microsoft/vscode/issues/32461)) Thus, if it's polluted accidentally, you will have to **reset the workspace state** by low-level methods:

   1. Go to the `workspaceStorage` folder, which is next to the [user settings file](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations).
   2. Find the subfolder that holds your workspace storage.
   3. Delete corresponding `state.vscdb` files. Or, if you have a SQLite 3 database editor, you can try to modify them.
   :::
3. Run VS Code command "**Disable All Installed Extensions for this Workspace**".
4. Run VS Code command "**Reload Window**".
5. See if you can reproduce the issue.
6. Only enable this extension (`yzhang.markdown-all-in-one`).
7. See if you can reproduce the issue.

## How to report

If you believe you have experienced a performance regression caused by our product, please report it to us as described below.

First, download the [latest dev build](https://github.com/yzhang-gh/vscode-markdown/actions?query=workflow%3ACI+event%3Apush+is%3Asuccess), extract the `debug.vsix`, and install it via VS Code command "**Install from VSIX**".

Then, create a [**Bug report**](https://github.com/yzhang-gh/vscode-markdown/issues/new/choose), and include the requested information listed below (as much as you can provide) to help us better understand the nature of the possible issue:

* (**Required**) A CPU profile. (`.cpuprofile.txt`)
  * Follow [VS Code's guide](https://github.com/microsoft/vscode/wiki/Performance-Issues#profile-the-running-extensions).
* A Markdown file to reproduce. (`.md.txt`)
* The commit SHA of the dev build.
* Basic environment information.
  1. Go to VS Code's menu **Help** > **About** (Windows, Linux) / **Code** > **About** (macOS).
  2. Click **Copy**.
* Full environment information.
  1. Get into a state where you can reproduce the issue.
  2. Go to VS Code's menu **Help** > **Report issue**.
  3. In the **Issue Reporter** window, set type to **Performance Issue**, set source to **Visual Studio Code**, fill other fields with arbitrary text, and make sure to check all the "Include ..." options.
  4. Click **Preview on GitHub**. A GitHub issue page will be opened. You can simply close it safely.
  5. **All needed data should be in your clipboard.** Paste it after our "**Error message in the console**" section.

When attaching files, make sure the file extension of these files is `txt`, or pack them in a ZIP, due to [GitHub's restrictions](https://docs.github.com/en/articles/file-attachments-on-issues-and-pull-requests).

Please understand that **if we cannot gather enough information to diagnose in 30 days, your report will be ignored and closed at any time**.
