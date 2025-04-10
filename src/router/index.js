// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('../views/home_view.vue'),
    meta: { title: 'Trang Chủ | Bình An' }
  },
  { 
    path: '/gioi-thieu', 
    name: 'Giới thiệu', 
    component: () => import('../views/introducen_views.vue'),
    meta: { title: 'Giới Thiệu | Bình An' }
  },
  { 
    path: '/ky-nang', 
    name: 'Kĩ năng', 
    component: () => import('../views/skill_view.vue'),
    meta: { title: 'Kỹ Năng | Bình An' }
  },
  { 
    path: '/du-an', 
    name: 'Dự án', 
    component: () => import('../views/project_view.vue'),
    meta: { title: 'Dự Án | Bình An' }
  },
  { 
    path: '/lien-he', 
    name: 'Liên hệ', 
    component: () => import('../views/contact_view.vue'),
    meta: { title: 'Liên Hệ | Bình An' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Update document title based on route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Bình An | Portfolio'
  next()
})

export default router
