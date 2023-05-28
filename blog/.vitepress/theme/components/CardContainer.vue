<script setup>
import ArticleCard from "./ArticleCard.vue";
import { data as articles } from './../index.data.js'
</script>
<template>
    <div class="container mx-auto flex flex-wrap justify-center gap-x-4 gap-y-4">
        <ArticleCard v-for="article in articles" :title="article.title" :href="article.url" :date="article.date.string" :image="article.image" :excerpt="article.excerpt"/>
    </div>
</template>