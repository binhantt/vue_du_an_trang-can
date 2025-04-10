// router/index.js
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'Home', component: () => import('../views/home_view.vue') },
  { path:'/gioi-thieu',name:'Giới thiệu',component: () => import('../views/introducen_views.vue')},
  { path:'/ky-nang',name:'Kĩ năng',component: () => import('../views/skill_view.vue')},
  { path:'/du-an',name:'Dự án',component: () => import('../views/project_view.vue')},
  { path:'/lien-he',name:'Liên hệ',component: () => import('../views/contact_view.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
