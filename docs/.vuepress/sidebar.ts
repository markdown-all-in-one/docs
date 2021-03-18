import type { SidebarConfigObject } from "@vuepress/theme-default";

// Our `README` are usually just covers. Don't show them in sidebar. Exceptions:
// * "/contributing/"
// * "/guide/"

// File paths have to be "absolute", due to changes in Vue Router and VuePress.

export const Sidebar_Config: SidebarConfigObject = {
    "/blog/": [
        // Recently updated first.
        "/blog/toggle-preview.md",
    ],

    "/contributing/": [
        // Sort by attention.
        {
            isGroup: true,
            text: "Reporting issues",
            children: [
                "/contributing/issue.md", // This comment stops Prettier.
                "/contributing/performance-issue.md",
            ],
        },
        {
            isGroup: true,
            text: "Development",
            children: [
                "/contributing/README.md",
                "/contributing/code-style.md",
                "/contributing/emoji.md",
                "/contributing/optimization.md",
                "/contributing/packaging.md",
                "/contributing/test.md",
                "/contributing/textmate-language-grammar.md",
                "/contributing/localization.md",
            ],
        },
        {
            isGroup: true,
            text: "Documentation",
            children: [
                "/contributing/word-choice.md",
                "/contributing/writing-style-guide.md", //
            ],
        },
    ],

    "/decisions/": [
        // Sort by attention.
        "/decisions/markdown-syntax-and-flavors.md",
        "/decisions/compatibility.md",
        "/decisions/math-support.md",
        "/decisions/key-binding.md",
        "/decisions/syntax-highlighting-for-fenced-code-blocks.md",
    ],

    "/guide/": [
        // Sort by attention.
        "/guide/README.md",
        "/guide/key-binding.md",
    ],

    "/project-management/": [
        // Sort by attention.
        {
            isGroup: true,
            text: "Main repository",
            children: [
                // Sort in alphabetical order.
                "/project-management/main/automation.md",
                "/project-management/main/issue.md",
                "/project-management/main/labels.md",
                "/project-management/main/life-cycle.md",
                "/project-management/main/repository-organization.md",
            ],
        },
        {
            isGroup: true,
            text: "Docs repository",
            children: [
                // Sort in alphabetical order.
                "/project-management/docs/labels.md",
                "/project-management/docs/life-cycle.md",
            ],
        },
    ],

    "/specs/": [
        // Sort in alphabetical order.
        {
            isGroup: true,
            text: "Code completion",
            children: [
                "/specs/code-completion.md", //
            ],
        },
        {
            isGroup: true,
            text: "Editor theming",
            children: [
                "/specs/editor-theming/editor-decoration.md", //
            ],
        },
        {
            isGroup: true,
            text: "Exporting",
            children: [
                "/specs/exporting/html.md", //
            ],
        },
        {
            isGroup: true,
            text: "List editing",
            children: [
                "/specs/list-editing/list-continuation.md",
                "/specs/list-editing/list-toggling.md",
            ],
        },
        {
            isGroup: true,
            text: "Markdown table",
            children: [
                "/specs/markdown-table/table-formatting.md", //
            ],
        },
        {
            isGroup: true,
            text: "Math",
            children: [
                "/specs/math/definitions-of-math-areas.md",
                "/specs/math/math-environment-toggling.md",
                "/specs/math/math-syntax-highlighting.md",
            ],
        },
        {
            isGroup: true,
            text: "Slugify",
            children: [
                "/specs/slugify/azure-devops.md",
                "/specs/slugify/gitea.md",
                "/specs/slugify/github-enterprise-server.md",
                "/specs/slugify/github.md",
                "/specs/slugify/gitlab.md",
                "/specs/slugify/hugo.md",
                "/specs/slugify/vscode.md",
            ],
        },
        {
            isGroup: true,
            text: "Table of contents",
            children: [
                "/specs/table-of-contents/toc-detection.md",
                "/specs/table-of-contents/toc-generation.md",
            ],
        },
        "/specs/markdown-preview.md",
        "/specs/pasting-link.md",
    ],
};
