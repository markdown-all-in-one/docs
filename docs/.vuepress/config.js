module.exports = {
    title: 'Markdown All in One Documentation',
    //// description: 'Markdown All in One Documentation',
    base: '/vscode-markdown-docs/',
    themeConfig: {
        repo: 'yzhang-gh/vscode-markdown',
        docsRepo: 'Lemmingh/vscode-markdown-docs',
        docsBranch: 'draft',
        docsDir: 'docs',
        editLinks: true,
        nav: require('./nav'),
        sidebar: require('./sidebar')
    }
};
