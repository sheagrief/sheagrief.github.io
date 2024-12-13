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
});
