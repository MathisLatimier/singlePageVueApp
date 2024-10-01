<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { onMounted, ref , computed } from 'vue';
import ouvertureThovex from '@/assets/img/ouverture-thovex.webp' 
import { RouterLink } from 'vue-router';

// const articles = ref([])

const props = defineProps({
    class: {
        type: String
    },
    articles: {
        type: Array
    }
})

const shortedString = (string) => {
    const size = 30
    if(string.length > size) {
        return `${string.slice(0, size)}...`
    }
    return string
}


</script>

<template>
    <!-- <template v-if="articles.length"> -->
        <VueperSlides
            :class="class"
            class="no-shadow"
            :visible-slides="3"
            :slide-ratio="1 / 4"
            :gap="0"
            :dragging-distance="70">
            <VueperSlide 
                v-for="article in articles" 
                :key="article.id"
                :image="ouvertureThovex"
                class="rounded-xl p-4 md:p-10">
                <template #content>
                    <div class="grid h-full flex-col grid-cols-3 relative">
                        <h3 class="title-card text-lg md:text-xl font-medium text-white col-span-3">{{shortedString(article.title)}}</h3>
                        
                        <RouterLink :to="{ name: 'articles.show', params: { id: article.id } }" class="bg-emerald-500 rounded-xl py-2 px-4 text-white shadow-md hover:shadow-xl hover:bg-emerald-600 duration:200 col-span-1 h-fit w-fit absolute bottom-0 end-0">Voir</RouterLink>
                    </div>
                    
                </template>
            </VueperSlide>
        </VueperSlides>

        <ul>
            <li v-for="article in random10articles">{{article.title}}</li>
        </ul>
    <!-- </template> -->
</template>

<style scoped>
.vueperslide {
    filter: blur(3px);
    transition: all 250ms;
    scale: 80%;
}
.vueperslide--active {
    filter: blur(0px);
    scale: 100%;
}

.vueperslides--dragging .link-button {
  pointer-events: none;
}


.title-card {
    text-shadow: black 3px 0 5px;
}
</style>