<script setup>
import { useData } from "vitepress";
import moment from "moment";

const { frontmatter } = useData();
const date = moment(frontmatter.value.created).format("YYYY-MM-DD");
</script>

<template>
  <div class="vp-doc">
    <h1>{{ frontmatter.title }}</h1>
    <p>
      <a
        v-for="tag in frontmatter.tags"
        :href="'/tags/' + encodeURIComponent(tag.replaceAll(' ', '')) + '/'"
      >
        #{{ tag }}
      </a>
    </p>
  </div>
</template>
