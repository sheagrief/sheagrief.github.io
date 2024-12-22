import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sheagrief space",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        items: [
          { text: "Home", link: "/" },
          { text: "About", link: "/about" },
          { text: "Posts", link: "/posts" },
          { text: "Notes", link: "/notes" },
          { text: "Tags", link: "/tags" },
        ],
      },
    ],

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/sheagrief" },
      { icon: "github", link: "https://github.com/sheagrief" },
    ],
  },
  markdown: {
    math: true,
  },
  head: [
    [
      "script",
      {
        async: ``,
        src: "https://www.googletagmanager.com/gtag/js?id=G-X3NH9BBVK1",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-X3NH9BBVK1');",
    ],
  ],
});
