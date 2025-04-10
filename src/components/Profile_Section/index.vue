<template>
    <b-col lg="4">
        <b-card class="profile-card" data-aos="fade-right">
            <div class="profile-header">
                <div class="avatar-wrapper">
                    <b-img 
                        :src="profileCardData.avatar.image" 
                        :alt="profileCardData.avatar.alt" 
                        class="profile-avatar" />
                    <b-badge 
                        :variant="profileCardData.status.variant" 
                        class="status-badge">
                        <span class="status-dot"></span>
                        {{ profileCardData.status.text }}
                    </b-badge>
                </div>
                <h2 class="profile-name">{{ profileCardData.info.name }}</h2>
                <p class="profile-title">
                    <i :class="profileCardData.info.icon + ' me-2'"></i>
                    {{ profileCardData.info.title }}
                </p>
            </div>
            
            <div class="profile-stats">
                <div v-for="(stat, index) in profileCardData.stats" 
                     :key="index"
                     class="stat-item mb-3">
                    <span class="stat-label">{{ stat.label }}</span>
                    <span class="stat-value">
                        {{ stat.value }}<span :class="stat.suffix === '%' ? 'percent' : 'plus'">{{ stat.suffix }}</span>
                    </span>
                </div>
            </div>
        </b-card>
    </b-col>
</template>

<script setup>
import { defineOptions } from 'vue'
import { profileCardData } from '@/config/data/profile-card'

defineOptions({
    name: 'ProfileCard'
})
</script>

<style scoped>


.stat-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 8px;
    background: rgba(var(--primary-color-rgb), 0.1);
    transition: all 0.3s ease;
}

.stat-item:hover {
    transform: translateX(5px);
    background: rgba(var(--primary-color-rgb), 0.15);
}

.stat-value {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--primary-color);
}

.stat-label {
    color: var(--text-color);
}

.plus, .percent {
    font-size: 0.875rem;
    margin-left: 2px;
}
</style>