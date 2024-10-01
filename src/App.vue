<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let lastKnownScrollPosition = 0;
let up = true;

const doSomething = (scroll) => {
  console.log(scroll)
}

onMounted(() => {
  const header = document.getElementById('header');
  document.addEventListener("scroll", (event) => {
  let scrollPosition = window.scrollY

  // console.log(scrollPosition, lastKnownScrollPosition)
  

  if (scrollPosition > lastKnownScrollPosition & up & scrollPosition > 300) {
    console.log('down')
    up = false
    header.classList.add('colapsed')
  } else if (scrollPosition < lastKnownScrollPosition & !up) {
    console.log('up')
    up = true
    header.classList.remove('colapsed')
  }

  lastKnownScrollPosition = scrollPosition
});

})
</script>

<template>
    <header id="header" class="w-full shadow flex items-center fixed bg-white z-50 h-16">
      <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="font-medium text-xl">Mon site</a>
        <div class="flex gap-6">
          <RouterLink to="/" class="p-2 rounded-lg hover:bg-emerald-500/50 hover:text-white duration-100 border-2 border-transparent" >Home</RouterLink>
          <RouterLink to="/articles" class="p-2 rounded-lg hover:bg-emerald-500/50 hover:text-white duration-100 border-2 border-transparent" >Articles</RouterLink>
          <RouterLink to="/contact" class="p-2 rounded-lg hover:bg-emerald-500/50 hover:text-white duration-100 border-2 border-transparent" >Contact</RouterLink>
        </div>
        
      </div>
    </header>
    <main class="pt-16">
      <RouterView />
    </main>
    
</template>

<style scoped>

.router-link-active {
  background-color: #10b981;
  color: white;
  border-color: #34d399;
}

header {
  transition: 160ms ease-in-out;
}

header.colapsed {

  transform: translateY(-66px);
}
</style>
