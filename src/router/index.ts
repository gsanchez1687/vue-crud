import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/saintseiya/admin',
      name: 'saintseiya-admin',
      component: () => import('../views/saintseiya/admin.vue')
    },
    {
      path: '/saintseiya/view/:id',
      name: 'saintseiya-view',
      component: () => import('../views/saintseiya/view.vue')
    },
  ]
})

export default router
