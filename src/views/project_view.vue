<template>
    <MainLayout>
        <b-container>
            <h1 class="text-warning text-center mb-2">
                <i :class="projectsData.icon + ' me-2'"></i>{{ projectsData.title }}
            </h1>
            
            <ProjectGrid :projects="projectsData.projects" />
        </b-container>
    </MainLayout>
</template>

<script setup>
import { defineOptions } from 'vue'
import MainLayout from '@/components/Layout/main_layout.vue'
import ProjectGrid from '@/components/Project/ProjectGrid.vue'
import { projectsData } from '@/config/data/projects'

defineOptions({
    name: 'ProjectView'
})
</script>
