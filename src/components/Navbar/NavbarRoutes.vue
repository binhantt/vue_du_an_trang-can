<template>
    <b-navbar-nav>
      <router-link
        v-for="(route, index) in navbarData.routes"
        :key="index"
        :to="route.path"
        class="nav-link fw-medium py-2 rounded d-flex align-items-center"
        :class="{
          'text-warning': currentPath === route.path,
          'text-light': currentPath !== route.path
        }"
        @click="onLinkClick"
      >
        <i :class="[route.icon, currentPath === route.path ? 'text-warning' : 'text-light']" class="me-2"></i>
        <span>{{ route.name }}</span>
      </router-link>
    </b-navbar-nav>
  </template>
  
  <script setup>
  import { navbarData } from '@/config/data/navbar'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const currentPath = route.path
  
  defineProps({
    onLinkClick: {
      type: Function,
      default: () => {}
    }
  })
  </script>
  