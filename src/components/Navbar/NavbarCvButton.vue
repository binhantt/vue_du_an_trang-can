<template>
    <b-button 
        variant="outline-warning" 
        class="ms-lg-3 w-100 w-lg-auto mt-3 mt-lg-0"
        :href="navbarData.cv.url"
        target="_blank">

        <i :class="navbarData.cv.icon + ' me-2'"></i>
        {{ navbarData.cv.text }}
    </b-button>
</template>

<script setup>
import { navbarData } from '@/config/data/navbar'
</script>