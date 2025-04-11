<template>
    <div class="text-start my-4">
        <div v-for="(item, index) in profileData.details" :key="index" 
             class="d-flex align-items-center gap-3 p-3 rounded hover-bg-warning-10 hover-translate-x-5">
            <i :class="item.icon" class="text-warning"></i>
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script setup>
import { profileData } from '@/config/data/profile'
</script>