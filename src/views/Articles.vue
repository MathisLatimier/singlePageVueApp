<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const articles = ref([])

onMounted(async () => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => articles.value = json)
    } catch {
        console.error('Problème de fetching')
    }
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<template>
    <div class="container mx-auto">

        <h1 class="text-2xl my-4">Tous les Articles</h1>
        <section v-if="articles" class="grid grid-cols-3 gap-6">
            <RouterLink :to="'/articles/' +article.id" v-for="article in articles" class="p-6 border rounded-xl h-60 hover:shadow-md duration-100">
                <h2 class="text-xl">{{ capitalizeFirstLetter(article.title) }}</h2>

            </RouterLink>
        </section>
    </div>
</template>