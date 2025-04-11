<template>
    <div class="timeline position-relative ps-4 bg-black text-light">
        <div v-for="(exp, index) in experiences" 
             :key="index" 
             class="timeline-item position-relative mb-4 pb-4 border-start border-warning">
            <div class="timeline-content ms-5">
                <h4 class="fw-bold mb-2">{{ exp.position }}</h4>
                <p class="mb-1">{{ exp.company }} - {{ exp.period }}</p>
                <ExperienceContentList :achievements="exp.achievements" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    experiences: {
        type: Array,
        required: true
    }
})
</script>