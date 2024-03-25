import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienciaView from '@/views/ExperienciaView.vue'
import AliadosView from '@/views/AliadosView.vue'
import HistoriaView from '@/views/HistoriaView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      component:ExperienciaView
    },
    {
      path: '/aliados',
      name: 'aliados',
      component: AliadosView
    },
    {
      path: '/historia',
      name: 'historia',
      component: HistoriaView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }
  ]
})

export default router
