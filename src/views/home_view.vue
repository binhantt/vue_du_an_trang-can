<template>
    <MainLayout>
        <b-container class="justify-content-center">
            <b-row>
                <ProfileCard class="animate__animated animate__fadeInLeft hover-lift" />
                <Experience class="animate__animated animate__fadeInRight hover-lift" />
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

<style scoped>
.hover-lift {
    transition: transform 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-5px);
}

/* Make sure to import animate.css in your main.js or index.html */
</style>
