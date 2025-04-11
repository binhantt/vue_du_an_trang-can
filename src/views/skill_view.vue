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
import { ref } from 'vue'

defineOptions({
    name: 'SkillView',
})

const frontendSkills = ref([
    { name: 'Vue.js', level: 90, icon: 'fab fa-vuejs' },
    { name: 'React', level: 85, icon: 'fab fa-react' },
    { name: 'JavaScript', level: 90, icon: 'fab fa-js' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' }
])

const backendSkills = ref([
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'Python', level: 75, icon: 'fab fa-python' },
    { name: 'PHP', level: 70, icon: 'fab fa-php' },
    { name: 'MySQL', level: 75, icon: 'fas fa-database' },
    { name: 'MongoDB', level: 70, icon: 'fas fa-leaf' },
    { name: 'Docker', level: 65, icon: 'fab fa-docker' }
])
</script>