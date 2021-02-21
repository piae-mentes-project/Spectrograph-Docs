module.exports = {
    title: '开发文档(10min)Offical',
    description: 'Development documents of Ten Minutes Game Studio..',
    head: [
        ["link", { rel: "icon", href: "./images/hero.jpg" }]
    ],
    plugin: [
        "@vuepress/active-header-links", "@vuepress/back-to-top"
    ],
    themeConfig: {
        logo: "./images/hero.jpg",
        nav: [{
            text: "开发文档",
            link: "/dev-doc/"
        }],
        sidebar: {
            "/dev-doc/": [
                ["", "项目简述"],
                ["piae-mentes.html", "piae-mentes"],
                ["spectrograph.html", "Spectrograph"]
            ]
        }
    },
    markdown: {
        toc: {
            "includeLevel": [1, 2, 3, 4, 5, 6]
        }
    }
}