<template>
    <MainLayout>
        <b-container class="justify-content-center">
            <b-row>
                <!-- Profile Section -->
                <ProfileCard />
                <!-- Experience Section -->
                <Experience />
            </b-row>
        </b-container>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/Layout/main_layout.vue'
import ProfileCard from '@/components/Profile_Section/index.vue'
import Experience from '@/components/Experience_Section/index.vue'

defineOptions({
    name: 'HomeViews'
})
</script>
