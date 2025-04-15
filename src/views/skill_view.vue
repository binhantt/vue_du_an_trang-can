<template>
    <MainLayout>
        <b-container class="py-4">
            <b-row>
                <Skills 
                    title="Frontend Skills" 
                    icon="fas fa-laptop-code" 
                    :skills="frontendSkills" 
                    animation="fade-right"
                />     
                <Skills 
                    title="Backend Skills" 
                    icon="fas fa-server" 
                    :skills="backendSkills" 
                    animation="fade-left"
                />
            </b-row>
        </b-container>
    </MainLayout>
</template>

<script setup>
import { defineOptions } from 'vue'
import Skills from '@/components/base/Skills.vue'
import MainLayout from '@/components/Layout/main_layout.vue'
import { skillsData } from '@/config/data/skills'
import { ref } from 'vue'

defineOptions({
    name: 'SkillView',
})

const frontendSkills = ref(skillsData.frontendSkills)
const backendSkills = ref(skillsData.backendSkills)
</script>