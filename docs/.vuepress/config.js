module.exports = {
    title: '制谱器开发文档 Offical',
    description: 'Spectrometer development documents of piae mentes.',
    head: [
        ["link", { rel: "icon", href: "https://storage.pyliubaolin.top/ArchiveImage/2021-02-07_lzhbhlrPython/2021-02-07_19-33-06[gui].jpg" }]
    ],
    plugin: [
        "@vuepress/active-header-links", "@vuepress/back-to-top"
    ],
    themeConfig: {
        logo: "https://storage.pyliubaolin.top/ArchiveImage/2021-02-07_lzhbhlrPython/2021-02-07_19-33-06[gui].jpg",
        nav: [{
            text: "开发文档",
            link: "/dev-doc/"
        }],
        sidebar: {
            "/projects/": [
                ["", "项目清单"],
                ["PublicWelfare_lzhbhlrpython.html", "编码公益网站_Lzhbhlrpython"]
            ]
        }
    },
    markdown: {
        toc: {
            "includeLevel": [1, 2, 3, 4, 5, 6]
        }
    }
}