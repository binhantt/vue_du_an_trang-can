<template>
    <div class="mt-4" >
        <div v-for="(stat, index) in stats" 
             :key="index"
             class="d-flex align-items-center justify-content-between p-3 mb-3 rounded  bg-black text-white border-start border-warning border-4 shadow-sm hover-translate-x-5">
            <div class="d-flex align-items-center">
                <b-badge variant="warning" class="me-3 p-2">
                    <i class="fas fa-chart-line"></i>
                </b-badge>
                <span class="text-white">{{ stat.label }}</span>
            </div>
            <span class="fw-bold text-warning fs-5">
                {{ stat.value }}<span class="fs-6 ms-1">{{ stat.suffix }}</span>
            </span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    stats: Array
})
</script>