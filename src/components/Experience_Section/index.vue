<template>
    <b-col lg="8">
        <BaseCard :title="experienceData.title" :icon="experienceData.icon" animation="fade-left">
            <ExperienceTimeline :experiences="experienceData.experiences" />
        </BaseCard>
    </b-col>
</template>

<script setup>
import { defineOptions } from 'vue'
import BaseCard from '@/components/base/base.vue'
import { experienceData } from '@/config/data/experience'
import ExperienceTimeline from './ExperienceTimeline.vue'

defineOptions({
    name: 'Experience'
})
</script>