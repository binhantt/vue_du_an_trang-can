<template>
    <b-col lg="6" class="mb-4">
        <b-card class="skill-card" :data-aos="animation">
            <h2 class="section-title">
                <i :class="icon + ' me-2'"></i>{{ title }}
            </h2>
            <div class="skills-grid">
                <div class="skill-item" v-for="(skill, index) in skills" :key="index">
                    <div class="skill-icon">
                        <i :class="skill.icon"></i>
                        <div class="skill-glow"></div>
                    </div>
                    <span class="skill-name">{{ skill.name }}</span>
                </div>
            </div>
        </b-card>
    </b-col>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: 'fas fa-code'
    },
    skills: {
        type: Array,
        required: true
    },
    animation: {
        type: String,
        default: 'fade-right'
    }
})
</script>

<style scoped>
.skill-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: var(--space-lg);
    height: 100%;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.skill-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 10px 20px rgba(var(--primary-color-rgb), 0.1);
}

.skill-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-overlay);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.skill-icon i {
    color: var(--primary-color);
    font-size: 1.5rem;
    z-index: 2;
    transition: all 0.3s ease;
}

.skill-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, 
        rgba(var(--primary-color-rgb), 0.2) 0%,
        rgba(var(--primary-color-rgb), 0) 70%);
    opacity: 0;
    transition: all 0.3s ease;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: 1rem;
    border-radius: 12px;
    background: var(--bg-overlay);
    border: 1px solid transparent;
    transition: all 0.3s ease;
}

.skill-item:hover {
    border-color: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(var(--primary-color-rgb), 0.1);
}

.skill-item:hover .skill-icon {
    border-color: var(--primary-color);
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(var(--primary-color-rgb), 0.2);
}

.skill-item:hover .skill-glow {
    opacity: 1;
    transform: scale(1.5);
}

.skill-item:hover i {
    transform: scale(1.1);
}

.skill-name {
    color: var(--text-color);
    font-size: var(--size-2);
    font-weight: 500;
    transition: all 0.3s ease;
}

.skill-item:hover .skill-name {
    color: var(--primary-color);
}

.section-title {
    color: var(--primary-color);
    font-size: var(--size-1);
    margin-bottom: var(--space-lg);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
}

.skill-item {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.skill-icon {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-overlay);
    border-radius: 10px;
    border: 1px solid var(--border-color);
}

@media (max-width: 576px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }
}
</style>