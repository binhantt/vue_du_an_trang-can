<template>
    <div class="text-center">
        <div class="position-relative d-inline-block mb-4">
            <b-avatar :size="'6rem'" :src="profileData.personal.avatar" class="border border-warning border-3 shadow-lg"></b-avatar>
            <span class="position-absolute bottom-0 end-0 bg-warning text-dark border border-dark rounded-pill p-1 px-3 d-flex align-items-center gap-2 shadow-sm">
                <i class="fas fa-circle text-success"></i>
                {{ profileData.personal.status }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { profileData } from '@/config/data/profile'
</script>