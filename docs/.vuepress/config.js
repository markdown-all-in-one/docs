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
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Decisions', link: '/decisions/' },
            { text: 'Specifications', link: '/specs/' },
            { text: 'Management', link: '/project-management/' },
            { text: 'Install', link: 'https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one' }
        ],
        sidebar: 'auto'
    }
}
