---
theme: page
title: Posts
next: false
prev: false
---

<script setup>
import { data as posts } from '../.vitepress/theme/tags.data.mts'
</script>

# Tags

タグ一覧

<span v-for="tagData in posts" :key="tagData.tag">
  <a :href="`/tags/#${tagData.tag}`">{{ tagData.tag }}</a>&nbsp;
</span>

<div v-for="tagData in posts" :key="tagData.tag">
  <h2>{{ tagData.tag }} ({{ tagData.posts.length }})</h2>
  <ul>
    <li v-for="post in tagData.posts" :key="post.url">
      <a :href="post.url">{{ post.title || 'Untitled' }}</a>
    </li>
  </ul>
</div>
