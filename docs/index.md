---
next: false
prev: false
---

<script setup>
import { data as posts } from '.vitepress/theme/posts.data.mjs'
import { format } from 'date-fns';
</script>

# sheagrief space

数学は現代魔術の修行に似ていると誰かが言っていた

## 新着記事一覧

<article v-for="post of posts" class="home-posts-article">
  <p>
      <span>{{ format(new Date(post.frontmatter.created), 'yyyy-MM-dd') }}</span>
    </p>
  <p>
    <a :href="post.url" class="home-posts-article-title">{{ post.frontmatter.title }}</a>
  </p>
  <!-- <p>{{ post.frontmatter.description }}</p>   -->
  <p>
    <a :href="post.url">続きを読む</a>
  </p>
</article>
