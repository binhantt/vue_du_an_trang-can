<template>
    <div class="text-center mb-4">
        <div class="position-relative d-inline-block mb-3">
            <div class="border border-4 border-warning rounded-circle p-2">
                <b-img 
                    :src="avatar.image" 
                    :alt="avatar.alt" 
                    class="rounded-circle shadow" 
                    width="120"
                    height="120" />
            </div>
            <b-badge 
                :variant="status.variant" 
                class="position-absolute bottom-0 end-0 rounded-circle p-2 shadow-sm border border-2 border-dark">
                <span class="d-inline-block rounded-circle bg-white" style="width: 8px; height: 8px;"></span>
                {{ status.text }}
            </b-badge>
        </div>
        <h2 class="h4 fw-bold text-white mb-3">{{ info.name }}</h2>
        <p class="text-warning mb-0">
            <i :class="info.icon + ' me-2'"></i>
            {{ info.title }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    avatar: Object,
    status: Object,
    info: Object
})
</script>