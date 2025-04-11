<template>
    <b-navbar-nav>
        <b-nav-item 
            v-for="(route, index) in navbarData.routes" 
            :key="index"
            :to="route.path"
            :active="$route.path === route.path"
            type="dark" variant="light"
            class="fw-medium py-2 rounded hover-bg-warning"
            :class="{ 'text-warning': $route.path === route.path, 'text-light': $route.path !== route.path }">
            <i :class="[route.icon, {'text-warning': $route.path === route.path, 'text-light': $route.path !== route.path}]" class="me-2"></i>
            <span :class="{'text-warning': $route.path === route.path, 'text-light': $route.path !== route.path}">{{ route.name }}</span>
        </b-nav-item>
    </b-navbar-nav>
</template>

<script setup>
import { navbarData } from '@/config/data/navbar'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>