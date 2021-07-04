# Collecting diagnostic data

This article explains how to get the most common types of diagnostic data.

::: tip
When attaching files, make sure the file extension of those files is `txt`, or pack them in a ZIP, due to [GitHub's restrictions](https://docs.github.com/en/articles/file-attachments-on-issues-and-pull-requests).
:::

## Product information

If you are using stable version, it's OK to just provide a version like `3.0.0`.

However, if you install dev build, please tell us its commit SHA that you see on the artifact download page.

Example:

> Markdown All in One: 325c2b6e72c1b8ffff8243f5c18e3ad5d12a1e5d

## Configuration

Please tell us the configuration you changed.

Example:

``````markdown
```jsonc
{
    "markdown.extension.toc.slugifyMode": "gitlab"
}
```
``````

## Basic environment information

::: tip
Skip this section if you decide to provide "Extended environment information".
:::

1. Go to VS Code's menu:

   * **Help** > **About** (Windows, Linux)

   * **Code** > **About** (macOS)

2. Click **Copy**, and paste it into a code block when creating your issue report.

If you suspect that the problem is related to something else, please also include their information.

Example:

``````markdown
VS Code:

```
Version: 1.50.0 (system setup)
OS: Windows_NT x64 10.0.18363
```

Markdown Notes: 0.0.20
``````

## Extended environment information

1. Get into a state where you can reproduce the issue.

2. Go to VS Code's menu **Help** > **Report issue**.

3. In the **Issue Reporter** window:

   1. Set type to **Performance Issue**.

   2. Set source to **Visual Studio Code**.

   3. Fill other fields with arbitrary text.

   4. Make sure to check all the "Include ..." options.

4. Click **Preview on GitHub**. A GitHub issue page will be opened. We don't need it. You can simply close it safely.

5. **All needed data should be in your clipboard.** Paste it into the "**Environment**" section.

## Console log

1. Go to VS Code's menu **Help** > **Toggle Developer Tools**.

2. Switch to the **Console** tab.

3. Copy and paste anything suspicious into a code block under the "**Diagnostic data**" section.

Example:

> ```log
> /usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:626  WARN UNRESPONSIVE extension host, 'foam.foam-vscode' took 97% of 23123.118ms, saved PROFILE here: 'file:///tmp/exthost-f465d3.cpuprofile'
> ```

## CPU profile

Follow [VS Code's guide](https://github.com/microsoft/vscode/wiki/Performance-Issues#profile-the-running-extensions).

You will finally produce a file whose name ends with `.cpuprofile.txt`

Attach it to the "**Diagnostic data**" section.
