<template>
    <b-col lg="8">
        <BaseCard :title="experienceData.title" :icon="experienceData.icon" animation="fade-left">
            <div class="timeline">
                <div v-for="(exp, index) in experienceData.experiences" 
                     :key="index" 
                     class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="content-header">
                            <h4>{{ exp.position }}</h4>
                            <div class="meta">
                                <b-badge variant="warning" class="company">{{ exp.company }}</b-badge>
                                <span class="period">{{ exp.period }}</span>
                            </div>
                        </div>
                        <b-list-group flush class="content-list">
                            <b-list-group-item v-for="(achievement, idx) in exp.achievements" 
                                             :key="idx">
                                {{ achievement }}
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                </div>
            </div>
        </BaseCard>
    </b-col>
</template>

<script setup>
import { defineOptions } from 'vue'
import BaseCard from '@/components/base/base.vue'
import { experienceData } from '@/config/data/experience'

defineOptions({
    name: 'Experience'
})
</script>

<style scoped>
.timeline {
    position: relative;
    padding-left: 2rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: var(--primary-color);
    opacity: 0.3;
}

.timeline-item {
    position: relative;
    padding-bottom: 2rem;
}

.timeline-marker {
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--primary-color);
    border: 2px solid var(--bg-color);
    transition: transform 0.3s ease;
}

.timeline-item:hover .timeline-marker {
    transform: scale(1.2);
}

.content-header {
    margin-bottom: 1rem;
}

.content-header h4 {
    color: var(--text-color);
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

.meta {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.company {
    background: rgba(var(--primary-color-rgb), 0.15) !important;
    color: var(--primary-color) !important;
    padding: 0.5rem 1rem;
    border-radius: 2rem !important;
    font-weight: 500;
}

.period {
    color: var(--secondary-color);
    font-size: 0.9rem;
}

:deep(.list-group) {
    background: transparent;
    border: none;
}

:deep(.list-group-item) {
    background: transparent;
    border-color: var(--border-color);
    color: var(--text-color);
    padding: 1rem;
    position: relative;
    padding-left: 1.5rem;
}

:deep(.list-group-item::before) {
    content: '•';
    color: var(--primary-color);
    position: absolute;
    left: 0.5rem;
}

@media (max-width: 768px) {
    .timeline {
        padding-left: 1.5rem;
    }

    .timeline-marker {
        left: -1.5rem;
    }
}
</style>