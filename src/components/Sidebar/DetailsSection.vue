<template>
    <div class="text-start my-4" data-aos="fade-up">
        <div v-for="(item, index) in profileData.details" :key="index" 
             :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
             :data-aos-delay="index * 100"
             class="detail-item d-flex align-items-center gap-3 p-3 rounded">
            <i :class="item.icon" class="text-warning icon-bounce"></i>
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<style scoped>
.detail-item {
    transition: all 0.3s ease;
}
.detail-item:hover {
    transform: translateX(10px);
    background-color: rgba(255, 193, 7, 0.1);
}
.icon-bounce {
    animation: bounce 2s infinite;
}
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
</style>

<script setup>
import { profileData } from '@/config/data/profile'
</script>