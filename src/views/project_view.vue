<template>
    <MainLayout>
        <b-container class="pt-3 ">
            <h1 class="text-warning text-center mb-2" data-aos="fade-down">
                <i :class="projectsData.icon + ' me-2'"></i>{{ projectsData.title }}
            </h1>
            
            <div v-for="(row, rowIndex) in projectRows" :key="rowIndex">
                <b-row class="mb-1">
                    <b-col lg="4" md="6" class="mb-1" 
                           v-for="(project, index) in row" 
                           :key="project.title" 
                           data-aos="fade-up"
                           :data-aos-delay="index * 100">
                        <b-card class="bg-black text-light border-1  border-secondary rounded-lg shadow-lg h-100">
                            <b-img :src="project.image" 
                                   class="rounded mb-1"
                                   :alt="project.title"
                                   fluid
                                   style="width: 100%; height: 200px; object-fit: cover;"></b-img>
                            
                            <h3 class="text-warning fw-bold">{{ project.title }}</h3>
                            
                            <div class="mb-1">
                                <b-badge 
                                    v-for="tech in project.technologies" 
                                    :key="tech"
                                    variant="warning"
                                    class="me-2 mb-1">
                                    {{ tech }}
                                </b-badge>
                            </div>
                            
                            <p class="text-light">{{ project.description }}</p>
                            
                            <div class="mt-auto">
                                <b-button 
                                    v-if="project.demo" 
                                    :href="project.demo" 
                                    target="_blank" 
                                    variant="outline-warning"
                                    class="me-2">
                                    <i class="fas fa-external-link-alt me-1"></i> Xem Demo
                                </b-button>
                                <b-button 
                                    v-if="project.github" 
                                    :href="project.github" 
                                    target="_blank" 
                                    variant="outline-light">
                                    <i class="fab fa-github me-1"></i> Mã nguồn
                                </b-button>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </MainLayout>
</template>

<script setup>
import { defineOptions } from 'vue'
import MainLayout from '@/components/Layout/main_layout.vue'
import { projectsData } from '@/config/data/projects'
import { computed } from 'vue'

defineOptions({
    name: 'ProjectView'
})

const projectRows = computed(() => {
    const rows = []
    const itemsPerRow = 3
    
    for (let i = 0; i < projectsData.projects.length; i += itemsPerRow) {
        rows.push(projectsData.projects.slice(i, i + itemsPerRow))
    }
    
    return rows
})
</script>
