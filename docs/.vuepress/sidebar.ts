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
            text: "Reporting issues",
            children: [
                "/contributing/issue.md", // This comment stops Prettier.
                "/contributing/performance-issue.md",
                "/contributing/diagnostic-data.md",
            ],
        },
        {
            text: "Development",
            children: [
                "/contributing/README.md",
                "/contributing/emoji.md",
                "/contributing/commit-message.md",
                "/contributing/optimization.md",
                "/contributing/packaging.md",
                "/contributing/test.md",
                "/contributing/textmate-language-grammar.md",
                "/contributing/localization.md",
                // "/contributing/dependency-management.md",
            ],
        },
        {
            text: "Code style",
            children: [
                "/contributing/code-style/file.md", //
                "/contributing/code-style/typescript.md",
            ],
        },
        {
            text: "Documentation",
            children: [
                "/contributing/word-choice.md",
                "/contributing/writing-style-guide.md", //
            ],
        },
    ],

    "/guide/": [
        // Sort by attention.
        "/guide/README.md", //
        {
            text: "Features",
            children: [
                "/guide/list.md", //
                "/guide/table-of-contents.md", //
                "/guide/table.md",
                "/guide/math.md",
                "/guide/exporting.md",
            ],
        },
        {
            text: "References",
            children: [
                // Sort in alphabetical order.
                "/guide/compatibility.md",
                "/guide/key-binding.md",
                "/guide/markdown-syntax-and-flavors.md",
            ],
        },
        {
            text: "Appendix",
            children: [
                // Sort in alphabetical order.
                "/guide/syntax-highlighting-for-fenced-code-blocks.md",
            ],
        },
    ],

    "/project-management/": [
        // Sort by attention.
        {
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
            text: "Code completion",
            children: [
                "/specs/code-completion.md", //
            ],
        },
        {
            text: "Editor theming",
            children: [
                "/specs/editor-theming/editor-decoration.md", //
            ],
        },
        {
            text: "Exporting",
            children: [
                "/specs/exporting/html.md", //
            ],
        },
        {
            text: "List editing",
            children: [
                "/specs/list-editing/list-continuation.md", //
                "/specs/list-editing/list-toggling.md",
            ],
        },
        {
            text: "Markdown table",
            children: [
                "/specs/markdown-table/table-formatting.md", //
            ],
        },
        {
            text: "Math",
            children: [
                "/specs/math/definitions-of-math-areas.md",
                "/specs/math/math-environment-toggling.md",
                "/specs/math/math-syntax-highlighting.md",
            ],
        },
        {
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
            text: "Table of contents",
            children: [
                "/specs/table-of-contents/toc-detection.md", //
                "/specs/table-of-contents/toc-generation.md",
            ],
        },
        "/specs/markdown-preview.md",
        "/specs/pasting-link.md",
    ],
};
