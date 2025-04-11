<template>
    <b-card no-body class="bg-black text-light border-1 border-secondary rounded-1 shadow-lg border-dark" :data-aos="animation" :data-aos-duration="duration">
        <b-card-body class="position-relative">
            <h2 class="section-title d-flex align-items-center gap-3 mb-4">
                <div class="icon-wrapper d-flex align-items-center justify-content-center bg-warning rounded-circle shadow-sm px-3 py-3">
                    <i :class="icon" class="text-black "></i>
                </div>
                {{ title }}
            </h2>
            <div class="info-content">
                <slot></slot>
            </div>
        </b-card-body>
    </b-card>
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
        default: 'fas fa-star'
    },
    animation: {
        type: String,
        default: 'fade-up'
    },
    duration: {
        type: Number,
        default: 1000
    }
})
</script>