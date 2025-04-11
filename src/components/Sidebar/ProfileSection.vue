<template>
    <div class="text-center">
        <div class="position-relative d-inline-block mb-4">
            <ProfileAvatar />
        </div>

        <div class="mb-4">
            <h4 class="text-white fw-bold mb-2">{{ profileData.personal.name }}</h4>
            <div class="text-warning d-flex justify-content-center align-items-center gap-2">
                <i class="fas fa-laptop-code"></i>
                {{ profileData.personal.title }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { profileData } from '@/config/data/profile'
import ProfileAvatar from '@/components/Sidebar/ProfileAvatar.vue'
</script>