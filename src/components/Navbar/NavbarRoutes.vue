<template>
    <b-navbar-nav>
        <b-nav-item 
            v-for="(route, index) in navbarData.routes" 
            :key="index"
            :to="route.path"
            :active="$route.path === route.path"
            class="text-light fw-medium py-2 rounded hover-bg-warning">
            <i :class="route.icon" class="me-2"></i>
            {{ route.name }}
        </b-nav-item>
    </b-navbar-nav>
</template>

<script setup>
import { navbarData } from '@/config/data/navbar'
</script>