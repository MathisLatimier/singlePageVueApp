<script setup>
import ouvertureThovex from '@/assets/img/ouverture-thovex.webp' 
import { ref } from 'vue';
import flecheHautDroit from '@/assets/img/fleche-haut-droit.png'

const props = defineProps({
    class: {
        type: String
    },
    articles: {
        type: Array
    }
})

const hover = ref({})

const onHover = (articleId) => {
    hover.value[articleId] = true
}

const onLeaveHover = (articleId) => {
    hover.value[articleId] = false
}


</script>
<template>
    <div class="grid grid-cols-3 gap-10">
        <RouterLink :to="`articles/${article.id}`" v-for="article in articles" :key="article.id" href="" class="contenant" :class="{'hover': hover[article.id]}" @mouseover="onHover(article.id)" @mouseleave="onLeaveHover(article.id)">
            <div class="pas-flou" :class="{'flou': hover[article.id]}">
                <img class="img-ski" :src="ouvertureThovex">
            </div>
            <div class="background-opacity" :class="{'active': hover[article.id]}"></div>
            <div :class="{'text-div-opacity': hover[article.id]}" class="text-div">
                <h2>{{ article.title }}</h2>
                <div :class="{'arrow-hover': hover[article.id]}" class="arrow-link" href="" style="height: 30px; width: 30px;"><img class="w-full h-full" :src="flecheHautDroit" alt=""></div>
            </div>
                     
        </RouterLink>
    </div>

</template>

<style scoped>

.contenant {
    position: relative;
    width: 100%;
    height: 340px;
    overflow: hidden;
    border-radius: 12px;
    transition: scale 200ms;
}

.contenant.hover {
    scale: 105%;
}

.coucou {
    position: relative;
    width: 100%;
    height: 100%;
}

.background-opacity.active {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(0, 37, 85, 0.315);
}

.pas-flou {
    position: absolute;
    transition: all 200ms ease-in-out;
    width: 110%;
    height: 110%;
    left: calc(-5%);
    top: calc(-5%);
}

.flou {
    transition: all 200ms ease-in-out;
    filter: blur(12px);
}

.img-ski {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
}

h2 {
    color: white;
}

.text-div {
    position: absolute;
    opacity: 0;
    padding: 2rem;
    width: 100%;
    z-index: 30;
    display: flex;
    justify-content: space-between;
}

.text-div-opacity {
    transition: opacity 100ms;
    opacity: 1;
}




.arrow-link {
    transition: transform 250ms ease-in-out, scale 100ms;
    transform: translate(-20px, 20px);
}

.arrow-link:hover {
    scale: 1.3;
}

.arrow-hover {
    transform: translate(0, 0);
}

/* img {
    width: 110%;
} */

/* .img {
    background-color: rgba(0,0,0, 0.2);
} */

/* .opacted {
    transition: all 200ms;
}

.opacted:hover {
    background-color: rgba(0,0,0, 0.3);
}

img:hover {
    filter: blur(5px);
} */
</style>