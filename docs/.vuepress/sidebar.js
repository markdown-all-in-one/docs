'use strict';

// The most `README` here are just covers. Don't show them in sidebar. Exceptions:
// * '/contributing/'
// * '/guide/'

module.exports = {
    '/contributing/': [
        // Sort by attention.
        '',
        'issue',
        'code-style',
        'emoji',
        'optimization',
        'packaging',
        'test',
        'textmate-language-grammar',
        'word-choice',
        {
            title: 'Documentation',
            children: [
                'writing-style-guide',
            ]
        },
    ],
    '/decisions/': [
        // Sort by attention.
        'markdown-syntax-and-flavors',
        'compatibility',
        'math-support',
        'key-binding',
        'syntax-highlighting-for-fenced-code-blocks',
        'localization',
    ],
    '/guide/': [
        // Sort by attention.
        '',
        'key-binding',
        'performance',
    ],
    '/project-management/docs/': [
        // Sort in alphabetical order.
        'labels',
        'life-cycle',
    ],
    '/project-management/main/': [
        // Sort in alphabetical order.
        {
            title: 'Automation',
            children: [
                'automation/ci',
            ]
        },
        'issue',
        'labels',
        'life-cycle',
        'repository-organization',
    ],
    '/specs/': [
        // Sort in alphabetical order.
        {
            title: 'List editing',
            children: [
                'list-editing/list-continuation',
                'list-editing/list-toggling',
            ]
        },
        {
            title: 'Markdown table',
            children: [
                'markdown-table/table-formatting',
            ]
        },
        {
            title: 'Math',
            children: [
                'math/definitions-of-math-areas',
                'math/math-environment-toggling',
                'math/math-syntax-highlighting',
            ]
        },
        {
            title: 'Slugify',
            children: [
                'slugify/azure-devops',
                'slugify/gitea',
                'slugify/github-enterprise-server',
                'slugify/github',
                'slugify/gitlab',
                'slugify/hugo',
                'slugify/vscode',
            ]
        },
        {
            title: 'Table of contents',
            children: [
                'table-of-contents/toc-detection',
                'table-of-contents/toc-generation',
            ]
        },
        'code-completion',
        'exporting-to-html',
        'markdown-preview',
        'pasting-link',
        'syntax-decorations',
    ],
    '/': 'auto' // Fallback.
};
