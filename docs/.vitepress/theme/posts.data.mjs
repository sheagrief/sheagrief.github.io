import { createContentLoader } from "vitepress";

export default createContentLoader("posts/*/*.md", {
  includeSrc: false,
  transform(rawData) {
    return rawData
      .filter((page) => page.url != "/posts/")
      .sort((a, b) => {
        // date DESC
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
      })
      .map((page) => {
        page.relativePath =
          page.url.replace(/^\/content\/posts\/[0-9]+\/[0-9]+\//g, "posts/") +
          ".md";
        page.url = page.url
          .replace(/^\/content\/posts\/[0-9]+\/[0-9]+\//g, "/posts/")
          .replace(/index$/g, "");
        return page;
      });
  },
});
