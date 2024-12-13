---
theme: page
title: Posts
next: false
prev: false
---

<script setup>
import { data as posts } from '../.vitepress/theme/posts.data.mjs'
import { format } from 'date-fns';

function formatDate(dateString) {
  const date = new Date(dateString); // YYYY-MM-DD形式を想定
  return format(date, 'MM/dd')
}

function getYear(dateString) {
  const date = new Date(dateString);
  return date.getFullYear();
}

const postsByYear = {};
posts.forEach(post => {
  const year = getYear(post.frontmatter.created);
  if (!postsByYear[year]) {
    postsByYear[year] = [];
  }
  postsByYear[year].push(post);
});
</script>

# Posts

新しい記事が上に表示されます。

<div v-for="year in Object.keys(postsByYear).sort((a, b) => b - a)">
  <h2>{{ year }}</h2>
  <ul>
    <li v-for="post of postsByYear[year]">
      {{ formatDate(post.frontmatter.created) }} <a :href="post.url">{{ post.frontmatter.title }}</a>
    </li>
  </ul>
</div>
