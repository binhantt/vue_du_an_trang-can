<template>
    <b-col :lg="size">
        <BaseCard :title="title" :icon="icon" :animation="animation">
            <div class="contact-items">
                <div v-for="(item, index) in contactItems" :key="index" class="contact-item">
                    <div class="icon-wrapper">
                        <i :class="item.icon"></i>
                    </div>
                    <div class="info-content">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.content }}</p>
                    </div>
                </div>
            </div>

            <div v-if="socials.length" class="social-section">
                <h4 class="social-title">{{ socialTitle }}</h4>
                <div class="social-links">
                    <a v-for="(social, index) in socials" 
                       :key="index"
                       :href="social.link" 
                       target="_blank" 
                       class="social-link">
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
        default: 'Contact Details'
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

<style scoped>
.contact-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.icon-wrapper {
    width: 50px;
    height: 50px;
    background: var(--bg-overlay);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.icon-wrapper i {
    color: var(--primary-color);
    font-size: 1.25rem;
}

.info-content h4 {
    color: var(--secondary-color);
    margin-bottom: 5px;
    font-size: var(--size-2);
}

.info-content p {
    color: var(--text-color);
    margin: 0;
    font-size: var(--size-3);
}

.social-section {
    margin-top: 3rem;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
}

.social-title {
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    font-size: var(--size-2);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.social-link {
    width: 45px;
    height: 45px;
    background: var(--bg-overlay);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    font-size: 1.25rem;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.social-link:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
    border-color: var(--primary-color);
}

@media (max-width: 768px) {
    .social-link {
        width: 40px;
        height: 40px;
        font-size: 1.1rem;
    }
}
</style>