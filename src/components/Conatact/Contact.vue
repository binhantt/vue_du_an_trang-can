<template>
    <b-col :lg="size">
        <BaseCard :title="title" :icon="icon" :animation="animation">
            <div class="d-flex flex-column gap-4">
                <div v-for="(item, index) in contactItems" :key="index" class="d-flex align-items-center gap-3">
                    <div class="d-flex align-items-center justify-content-center bg-warning rounded-circle border border-dark shadow-sm" style="width: 45px; height: 45px;">
                        <i :class="item.icon" class="text-black fs-5"></i>
                    </div>
                    <div>
                        <h4 class="text-white mb-1 fs-6">{{ item.title }}</h4>
                        <p class="text-white mb-0 fs-7">{{ item.content }}</p>
                    </div>
                </div>
            </div>

            <div v-if="socials.length" class="mt-4 text-center pt-3 border-top border-dark">
                <h4 class="text-white mb-3 fs-6">{{ socialTitle }}</h4>
                <div class="d-flex justify-content-center gap-3">
                    <a v-for="(social, index) in socials" 
                       :key="index"
                       :href="social.link" 
                       target="_blank" 
                       class="d-flex align-items-center justify-content-center bg-warning rounded-circle border border-dark text-black fs-5 shadow-sm" style="width: 45px; height: 45px;">
                        <i :class="social.icon"></i>
                    </a>
                </div>
            </div>
        </BaseCard>
    </b-col>
</template>

<script setup>
import BaseCard from '../base/base.vue'
import { defineProps } from 'vue'

defineProps({
    size: {
        type: [Number, String],
        default: 5
    },
    title: {
        type: String,
        default: 'Liên hệ'
    },
    icon: {
        type: String,
        default: 'fas fa-address-card'
    },
    animation: {
        type: String,
        default: 'fade-right'
    },
    contactItems: {
        type: Array,
        required: true
    },
    socialTitle: {
        type: String,
        default: 'Follow Me'
    },
    socials: {
        type: Array,
        default: () => []
    }
})
</script>