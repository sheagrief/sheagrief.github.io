---
theme: page
title: Posts
next: false
prev: false
---

<script setup>
import { data as posts } from '../.vitepress/theme/posts.data.mjs'
</script>

# Posts

<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
  </li>
</ul>
