<template>
    <b-col lg="6" class="mb-4">
        <b-card class="bg-black text-light border border-secondary rounded-3 shadow-sm" :data-aos="animation">
            <b-card-body>
                <h2 class="section-title d-flex align-items-center mb-4">
                    <i :class="icon + ' me-2 text-warning'"></i>{{ title }}
                </h2>
                <div class="skills-grid d-grid gap-3" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="skill-item d-flex align-items-center p-3 bg-dark rounded shadow-sm" v-for="(skill, index) in skills" :key="index">
                        <div class="skill-icon d-flex align-items-center justify-content-center bg-warning rounded-circle shadow-sm me-3 py-2 px-2">
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