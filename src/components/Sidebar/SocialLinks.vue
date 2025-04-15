<template>
    <div class="d-flex justify-content-center gap-3 mt-4">
        <b-button v-for="(link, index) in profileData.socialLinks" :key="index" 
            :href="link.url" variant="outline-warning" class="rounded-circle hover-translate-y-3 hover-shadow-lg"
            style="width: 40px; height: 40px" :target="link.target" :title="link.title">
            <i :class="link.icon"></i>
        </b-button>
        
    </div>

</template>

<script setup>
import { profileData } from '@/config/data/profile'
</script>