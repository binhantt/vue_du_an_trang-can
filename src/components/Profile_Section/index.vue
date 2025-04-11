<template>
    <b-col lg="4">
        <b-card class="shadow-sm bg-black text-white border-dark" data-aos="fade-right">
            <ProfileHeader :avatar="profileCardData.avatar" 
                          :status="profileCardData.status"
                          :info="profileCardData.info" />
            
            <ProfileStats :stats="profileCardData.stats" />
        </b-card>
    </b-col>
</template>

<script setup>
import { defineOptions } from 'vue'
import { profileCardData } from '@/config/data/profile-card'
import ProfileHeader from './ProfileHeader.vue'
import ProfileStats from './ProfileStats.vue'

defineOptions({
    name: 'ProfileCard'
})
</script>