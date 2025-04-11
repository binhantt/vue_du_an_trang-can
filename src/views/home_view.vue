<template>
    <MainLayout>
        <b-container class="home-container py-3">
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
