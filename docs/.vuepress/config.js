module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Starship",
      description: "The cross-shell prompt for astronauts"
    },
    "/ja-JP/": {
      lang: "ja-JP",
      title: "Starship",
      description: "The cross-shell prompt for astronauts"
    },
    "/zh-TW/": {
      lang: "zh-TW",
      title: "Starship",
      description: "The cross-shell prompt for astronauts"
    }
  },
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  themeConfig: {
    logo: "/icon.png",
    // the GitHub repo path
    repo: "starship/starship",
    // the label linking to the repo
    repoLabel: "GitHub",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // defaults to false, set to true to enable
    editLinks: true,
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: "Edit this page on GitHub",
        // Custom navbar values
        nav: [{ text: "Configuration", link: "/config/" }],
        // Custom sidebar values
        sidebar: [
          "/",
          ["/guide/", "Guide"],
          ["/config/", "Configuration"],
          ["/advanced-config/", "Advanced Configuration"]
        ]
      },
      "/ja-JP/": {
        // text for the language dropdown
        selectText: "言語",
        // label for this locale in the language dropdown
        label: "日本語",
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: "GitHub で編集する",
        // Custom navbar values
        nav: [{ text: "設定", link: "/ja-JP/config/" }],
        // Custom sidebar values
        sidebar: [
          "/ja-JP/",
          ["/ja-JP/guide/", "ガイド"],
          ["/ja-JP/config/", "設定"],
          ["/ja-JP/advanced-config/", "高度な設定"]
        ]
      },
      "/zh-TW/": {
        // text for the language dropdown
        selectText: "語言",
        // label for this locale in the language dropdown
        label: "繁體中文",
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: "在 GitHub 上修改此頁面",
        // Custom navbar values
        nav: [{ text: "設定", link: "/zh-TW/config/" }],
        // Custom sidebar values
        sidebar: [
          "/zh-TW/",
          ["/zh-TW/guide/", "指引"],
          ["/zh-TW/config/", "設定"],
          ["/zh-TW/advanced-config/", "進階設定"]
        ]
      }
    }
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-71160903-4"
      }
    ]
  ]
};
