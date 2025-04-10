<template>
    <MainLayout>
        <b-container class="skills-container">
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

<style scoped>
.skills-container {
    padding: var(--space-md) 0;
}

.skill-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: var(--space-lg);
    height: 100%;
    transition: all 0.3s ease;
}

.skill-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
}

.section-title {
    color: var(--primary-color);
    font-size: var(--size-1);
    margin-bottom: var(--space-lg);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-lg);
}

.skill-item {
    background: var(--bg-overlay);
    padding: var(--space-md);
    border-radius: 10px;
    text-align: center;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.skill-item:hover {
    border-color: var(--primary-color);
    transform: translateY(-3px);
}

.skill-item i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: var(--space-sm);
}

.skill-name {
    display: block;
    color: var(--text-color);
    font-size: var(--size-2);
    margin-bottom: var(--space-sm);
}

:deep(.progress) {
    background-color: var(--bg-overlay);
    height: 8px;
    border-radius: 4px;
}

:deep(.progress-bar) {
    background-color: var(--primary-color);
    transition: width 1s ease;
}

@media (max-width: 768px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }
}
</style>