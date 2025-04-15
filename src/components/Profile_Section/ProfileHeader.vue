<template>
    <div class="text-center mb-4">
        <div class="position-relative d-inline-block mb-3">
            <div class="border border-4 border-warning rounded-circle p-2 avatar-container">
                <b-img 
                    :src="avatar.image" 
                    :alt="avatar.alt" 
                    class="rounded-circle shadow avatar-image" 
                    width="120"
                    height="120" />
            </div>
            <b-badge 
                :variant="status.variant" 
                class="position-absolute bottom-0 end-0 rounded-circle p-2 shadow-sm border border-2 border-dark status-badge">
                <span class="d-inline-block rounded-circle bg-white" style="width: 8px; height: 8px;"></span>
                {{ status.text }}
            </b-badge>
        </div>
        <h2 class="h4 fw-bold text-white mb-3">{{ info.name }}</h2>
        <p class="text-warning mb-0">
            <i :class="info.icon + ' me-2 icon-bounce'"></i>
            {{ info.title }}
        </p>
    </div>
</template>

<style scoped>
.avatar-container {
    transition: transform 0.3s ease;
}

.avatar-container:hover {
    transform: scale(1.05);
}

.avatar-image {
    transition: filter 0.3s ease;
}

.avatar-container:hover .avatar-image {
    filter: brightness(1.1);
}

.status-badge {
    transition: transform 0.3s ease;
}

.status-badge:hover {
    transform: translateY(-3px);
}

.icon-bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
}
</style>

<script setup>
defineProps({
    avatar: Object,
    status: Object,
    info: Object
})
</script>