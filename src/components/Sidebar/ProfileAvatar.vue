<template>
    <div class="text-center">
        <div class="position-relative d-inline-block mb-4 avatar-container">
            <b-avatar :size="'6rem'" :src="profileData.personal.avatar" class="border border-warning border-3 shadow-lg avatar-image"></b-avatar>
            <span class="position-absolute bottom-0 end-0 bg-warning text-dark border border-dark rounded-pill p-1 px-3 d-flex align-items-center gap-2 shadow-sm status-badge">
                <i class="fas fa-circle text-success pulse"></i>
                {{ profileData.personal.status }}
            </span>
        </div>
    </div>
</template>

<style scoped>
.avatar-container {
    transition: transform 0.3s ease;
}
.avatar-container:hover {
    transform: scale(1.05);
}
.status-badge {
    transition: all 0.3s ease;
}
.status-badge:hover {
    transform: translateY(-3px);
}
.pulse {
    animation: pulse 2s infinite;
}
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
</style>

<script setup>
import { profileData } from '@/config/data/profile'
</script>