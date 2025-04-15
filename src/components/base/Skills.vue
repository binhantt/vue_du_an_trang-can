<template>
    <b-col lg="6" class="mb-4">
        <b-card class="bg-black text-light border border-secondary rounded-3 shadow-sm card-animate" :data-aos="animation">
            <b-card-body>
                <h2 class="section-title d-flex align-items-center mb-4">
                    <i :class="icon + ' me-2 text-warning animate-bounce'"></i>{{ title }}
                </h2>
                <div class="skills-grid d-grid gap-3" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="skill-item d-flex align-items-center p-3 bg-dark rounded shadow-sm skill-animate" 
                         v-for="(skill, index) in skills" 
                         :key="index"
                         :data-aos="animation"
                         :data-aos-delay="index * 100">
                        <div class="skill-icon d-flex align-items-center justify-content-center bg-warning rounded-circle shadow-sm me-3 py-2 px-2 icon-animate">
                            <i :class="skill.icon" class="text-dark"></i>
                        </div>
                        <span class="skill-name text-light">{{ skill.name }}</span>
                    </div>
                </div>
            </b-card-body>
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
.card-animate {
    transition: all 0.3s ease;
}

.card-animate:hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 3rem rgba(255, 255, 255, 0.1) !important;
}

.skill-animate {
    transition: all 0.3s ease;
}

.skill-animate:hover {
    transform: translateX(5px);
    background-color: #2a2a2a !important;
}

.icon-animate {
    transition: all 0.3s ease;
}

.icon-animate:hover {
    transform: rotate(15deg);
}

.animate-bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
</style>