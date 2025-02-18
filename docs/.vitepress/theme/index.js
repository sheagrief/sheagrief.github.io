// Given from https://vitepress.dev/guide/extending-default-theme

import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import NoteTitle from "./NoteTitle.vue";
import PostTitle from "./PostTitle.vue";
import { useData } from "vitepress";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => {
        const { page } = useData();
        if (page.value.relativePath.match(/^posts\/(?!index.md)/)) {
          return h(PostTitle);
        } else if (page.value.relativePath.match(/^notes\/(?!index.md)/)) {
          return h(NoteTitle);
        }
      },
    });
  },
};
