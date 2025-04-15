<template>
    <div class="d-flex justify-content-center gap-3 mt-4" data-aos="fade-up">
        <b-button v-for="(link, index) in profileData.socialLinks" :key="index" 
            :href="link.url" 
            variant="outline-warning" 
            class="social-btn rounded-circle"
            :data-aos="'zoom-in'"
            :data-aos-delay="index * 100"
            style="width: 40px; height: 40px" 
            :target="link.target" 
            :title="link.title">
            <i :class="link.icon"></i>
        </b-button>
    </div>
</template>

<style scoped>
.social-btn {
    transition: all 0.3s ease;
}
.social-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
}
.social-btn i {
    transition: transform 0.3s ease;
}
.social-btn:hover i {
    transform: rotate(360deg);
}
</style>

<script setup>
import { profileData } from '@/config/data/profile'
</script>