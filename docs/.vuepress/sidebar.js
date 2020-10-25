'use strict';

module.exports = {
    '/decisions/': [
        // Sort by attention.
        'markdown-syntax-and-flavors',
        'compatibility',
        'math-support',
        'key-binding',
        'syntax-highlighting-for-fenced-code-blocks',
        'localization',
        'word-choice',
    ],
    '/guide/': [
        // Sort by attention.
        '',
        'key-binding',
        'performance',
    ],
    '/project-management/docs/': [
        // The `README` here is just a cover. Don't show it in sidebar.
        'labels',
        'life-cycle',
        'writing-style-guide',
    ],
    //// '/project-management/main/': [],
    //// '/specs/': [
    ////     // Sort in alphabetical order.
    //// ],
    '/': 'auto' // Fallback.
};
