import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { Navbar_Config } from "./navbar";
import { Sidebar_Config } from "./sidebar";

export default defineUserConfig<DefaultThemeOptions>({
    base: "/docs/",
    title: "Markdown All in One Documentation",

    evergreen: true,

    themeConfig: {
        repo: "yzhang-gh/vscode-markdown",
        docsRepo: "markdown-all-in-one/docs",
        docsBranch: "draft",
        docsDir: "docs",

        editLink: true,
        contributors: false,
        lastUpdated: false,

        navbar: Navbar_Config,
        sidebar: Sidebar_Config,

        themePlugins: {
            git: false,
            mediumZoom: false,
        },
    },
});
