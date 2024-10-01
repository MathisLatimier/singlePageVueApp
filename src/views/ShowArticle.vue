<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const id = route.params.id

const loading = ref(true)
const error = ref(null)

const article = ref(null)
const user = ref(null)

const fetchArticleAndUser = async (id) => {
  loading.value = true
  try {

    const articleResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!articleResponse.ok) throw new Error('Failed to fetch article')
    article.value = await articleResponse.json()

    
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${article.value.userId}`)
    if (!userResponse.ok) throw new Error('Failed to fetch user')
    user.value = await userResponse.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchArticleAndUser(id)
})

</script>

<template>
    <p v-if="loading" class="container mx-auto mt-10">Loading ...</p>
    <div v-else class="container mx-auto grid grid-cols-3 gap-6">
      
        <article class="col-span-2 py-6" v-if="article">
            <h1 class="text-xl">{{ article.title }}</h1>
            <p>{{ article.body }}</p>
        </article>
        <aside class="bg-emerald-500 text-white p-6 shadow-md" v-if="user">
            <h2 class="text-xl font-medium mb-4">Auteur</h2>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col">
                    <label for="name" class="text-emerald-100 text-sm">Nom</label>
                    <p id="name">{{ user.name }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="email" class="text-emerald-100 text-sm">Email</label>
                    <p id="email">{{ user.email }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="phone" class="text-emerald-100 text-sm">Téléphone</label>
                    <p id="phone">{{ user.phone }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="city" class="text-emerald-100 text-sm">Ville</label>
                    <p id="city">{{ user.address.city }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="website" class="text-emerald-100 text-sm">Site Web</label>
                    <a :href="'https://'+user.website" id="website" class="underline hover:text-emerald-200">{{ user.website }}</a>
                </div>

            </div>

        </aside>
        

    </div>
    
</template>