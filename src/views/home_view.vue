<template>
    <MainLayout>
        <b-container class="home-container ">
            <b-row class="">
                <!-- Profile Section -->
                   <ProfileCard/>
                <!-- Experience Section -->
                    <Experience/>
            </b-row>
        </b-container>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/Layout/main_layout.vue'
import ProfileCard from '@/components/Profile_Section/index.vue'
import Experience from '@/components/Experience_Section/index.vue'
import { defineOptions } from 'vue'

defineOptions({
    name: 'HomeViews'
})
</script>

<style scoped>

:deep(.list-group-item) {
    background: transparent !important;
    color: var(--text-color) !important;
    border-color: var(--border-color);
    padding: var(--space-md);
    margin-bottom: var(--space-sm);
    transition: all 0.3s ease;
}

:deep(.list-group-item:hover) {
    background: var(--bg-overlay) !important;
    transform: translateX(var(--space-sm));
    border-color: var(--primary-color);
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 var(--timeline-bg); }
    70% { box-shadow: 0 0 0 10px transparent; }
    100% { box-shadow: 0 0 0 0 transparent; }
}

@media (max-width: 991.98px) {
    .home-container {
        padding: var(--space-md);
    }
}
</style>