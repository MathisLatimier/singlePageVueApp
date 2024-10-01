import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Articles from '@/views/Articles.vue'
import Contact from '@/views/Contact.vue'
import ShowArticle from '@/views/ShowArticle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/articles/:id',
      name: 'articles.show',
      component: ShowArticle
    }
  ]
})

export default router
