<template>
    <div>
        <b-nav-item-dropdown text="Mạng xã hội" right class="d-lg-none">
            <b-dropdown-item 
                v-for="(social, index) in navbarData.social"
                :key="index"
                :href="social.url" 
                target="_blank"
                class="text-white hover-bg-warning">
                <i :class="social.icon + ' me-2'"></i>
                {{ social.name }}
            </b-dropdown-item>
        </b-nav-item-dropdown>

        <div class="d-none d-lg-flex gap-3">
            <b-link 
                v-for="(social, index) in navbarData.social"
                :key="index"
                :href="social.url" 
                target="_blank" 
                class="text-white hover-text-warning"
                :title="social.name">
                <i :class="social.icon"></i>
            </b-link>
        </div>
    </div>
</template>

<script setup>
import { navbarData } from '@/config/data/navbar'
</script>