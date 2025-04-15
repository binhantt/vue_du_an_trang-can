<template>
    <div class="mt-4" data-aos="fade-up">
        <div v-for="(stat, index) in stats" 
             :key="index"
             :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
             :data-aos-delay="index * 100"
             class="stat-item d-flex align-items-center justify-content-between p-3 mb-3 rounded bg-black text-white border-start border-warning border-4 shadow-sm">
            <div class="d-flex align-items-center">
                <b-badge variant="warning" class="me-3 p-2 badge-animate">
                    <i class="fas fa-chart-line icon-pulse"></i>
                </b-badge>
                <span class="text-white">{{ stat.label }}</span>
            </div>
            <span class="fw-bold text-warning fs-5 value-animate">
                {{ stat.value }}<span class="fs-6 ms-1">{{ stat.suffix }}</span>
            </span>
        </div>
    </div>
</template>

<style scoped>
.stat-item {
    transition: all 0.3s ease;
}

.stat-item:hover {
    transform: translateX(10px);
    background-color: #1a1a1a !important;
}

.badge-animate {
    transition: all 0.3s ease;
}

.badge-animate:hover {
    transform: rotate(15deg);
}

.icon-pulse {
    animation: pulse 2s infinite;
}

.value-animate {
    transition: all 0.3s ease;
}

.stat-item:hover .value-animate {
    transform: scale(1.1);
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
</style>

<script setup>
defineProps({
    stats: Array
})
</script>