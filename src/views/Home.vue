<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import ArticleCarousel from '@/components/ArticleCarousel.vue';
import TestHover from '@/components/TestHover.vue';
import { onMounted, ref } from 'vue';

const articles = ref(null)

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        if (json.length > 10) {
            articles.value = json.sort(() => 0.5 - Math.random()).slice(0, 10);
        } else {
            articles.value = json;
        }
        // articles.value = json;
    } catch (error) {
        console.error('Problème de fetching', error);
    }
})
</script>

<template>
<HeroBanner>Bienvenue sur mon site</HeroBanner>
<div class="container mx-auto">
    <ArticleCarousel v-if="articles" class="mt-16" :articles="articles"/>
    <TestHover v-if="articles" :articles="articles"/>
    
</div>
</template>