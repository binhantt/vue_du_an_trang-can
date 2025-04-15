<template>
    <div class="text-center">
        <div class="position-relative d-inline-block mb-4">
            <ProfileAvatar />
        </div>

        <div class="mb-4">
            <h4 class="text-white fw-bold mb-2 name-animate">{{ profileData.personal.name }}</h4>
            <div class="text-warning d-flex justify-content-center align-items-center gap-2 title-animate">
                <i class="fas fa-laptop-code icon-spin"></i>
                {{ profileData.personal.title }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.name-animate, .title-animate {
    transition: all 0.3s ease;
}
.name-animate:hover {
    transform: scale(1.05);
}
.title-animate:hover {
    letter-spacing: 1px;
}
.icon-spin {
    transition: transform 0.3s ease;
}
.title-animate:hover .icon-spin {
    transform: rotate(180deg);
}
</style>

<script setup>
import { profileData } from '@/config/data/profile'
import ProfileAvatar from '@/components/Sidebar/ProfileAvatar.vue'
</script>