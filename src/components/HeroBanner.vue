<script setup>
import { ref } from 'vue';
import MontagneImg from '@/assets/img/montagne.jpg'

</script>
<template>
    <section :style="{backgroundImage: `url(${MontagneImg})`}" class="banner-montagne w-full text-white text-2xl md:text-4xl h-50 h-32 md:h-64 flex items-center shadow-inner">
        <h1 class="container mx-auto text-shadow-2xl text-banner">
            <slot></slot>
        </h1>
        
    </section>
    
</template>

<style scoped>
.text-banner {
    text-shadow: black 3px 0 20px;
}

.banner-montagne {
    background-repeat: no-repeat;
    background-size: cover;
}

</style>