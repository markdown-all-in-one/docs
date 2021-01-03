module.exports = {
    title: 'Markdown All in One Documentation',
    base: '/docs/',
    evergreen: true,
    themeConfig: {
        repo: 'yzhang-gh/vscode-markdown',
        docsRepo: 'markdown-all-in-one/docs',
        docsBranch: 'draft',
        docsDir: 'docs',
        editLinks: true,
        nav: require('./nav'),
        sidebar: require('./sidebar')
    }
};
