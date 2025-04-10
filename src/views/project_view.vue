<template>
    <MainLayout>
        <b-container class="project-container">
            <h1 class="main-title text-center mb-5" data-aos="fade-down">
                <i class="fas fa-code-branch me-2"></i>My Projects
            </h1>
            
            <b-row>
                <b-col lg="4" md="6" class="mb-4" v-for="(project, index) in projects" :key="index" data-aos="fade-up">
                    <b-card class="project-card h-100">
                        <b-img :src="project.image" class="project-image mb-3"></b-img>
                        
                        <h3 class="project-title">{{ project.title }}</h3>
                        
                        <div class="tech-stack  mb-3">
                            <b-badge 
                                v-for="tech in project.technologies" 
                                :key="tech"
                                variant="primary"
                                class="me-2 mb-2">
                                {{ tech }}
                            </b-badge>
                        </div>
                        
                        <p class="project-description">{{ project.description }}</p>
                        
                        <div class="project-links mt-auto">
                            <b-button 
                                v-if="project.demo" 
                                :href="project.demo" 
                                target="_blank" 
                                variant="outline-primary"
                                class="me-2">
                                <i class="fas fa-external-link-alt me-1"></i> Demo
                            </b-button>
                            <b-button 
                                v-if="project.github" 
                                :href="project.github" 
                                target="_blank" 
                                variant="outline-secondary">
                                <i class="fab fa-github me-1"></i> Code
                            </b-button>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </MainLayout>
</template>

<script setup>
import { defineOptions } from 'vue'
import MainLayout from '@/components/Layout/main_layout.vue'
import { ref } from 'vue'

defineOptions({
    name: 'ProjectView'
})

const projects = ref([
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
        image: 'https://placehold.co/600x400',
        technologies: ['Vue.js', 'Node.js', 'MongoDB'],
        demo: 'https://demo-link.com',
        github: 'https://github.com/username/project'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates and team features.',
        image: 'https://placehold.co/600x400',
        technologies: ['React', 'Firebase', 'Material-UI'],
        demo: 'https://demo-link.com',
        github: 'https://github.com/username/project'
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing projects and skills.',
        image: 'https://placehold.co/600x400',
        technologies: ['Vue.js', 'Bootstrap', 'SCSS'],
        demo: 'https://demo-link.com',
        github: 'https://github.com/username/project'
    }
])
</script>

<style scoped>
.project-container {
    padding: var(--space-sm) 0;
}

.main-title {
    color: var(--primary-color);
    font-size: 2.5rem;
    font-weight: bold;
}

.project-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 15px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.1);
}

.project-image {
    border-radius: 10px;
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-title {
    color: var(--secondary-color);
    font-size: var(--size-1);
    margin-bottom: var(--space-md);
}

.project-description {
    color: var(--text-color);
    font-size: var(--size-3);
    margin-bottom: var(--space-lg);
}

.tech-stack {
    margin-bottom: var(--space-md);
}

:deep(.badge) {
    background-color: var(--primary-color) !important;
    color: var(--text-color) !important;
    font-size: var(--size-3);
    padding: 0.5em 1em;
}

.project-links {
    margin-top: auto;
}

:deep(.btn-outline-primary) {
    color: var(--text-color);
    border-color: var(--primary-color);
}

:deep(.btn-outline-primary:hover) {
    background-color: var(--primary-color);
    color: var(--bg-color);
}

:deep(.btn-outline-secondary) {
    color: var(--text-color);
    border-color: var(--text-color);
}

:deep(.btn-outline-secondary:hover) {
    background-color: var(--text-color);
    color: var(--primary-color);
}

@media (max-width: 768px) {
    .main-title {
        font-size: 2rem;
    }
    
    .project-image {
        height: 180px;
    }
}
</style>