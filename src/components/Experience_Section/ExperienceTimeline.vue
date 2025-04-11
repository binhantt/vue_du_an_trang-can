<template>
    <div class="timeline position-relative ps-4 bg-black text-light">
        <div v-for="(exp, index) in experiences" 
             :key="index" 
             class="timeline-item position-relative mb-4 pb-4 bg-black text-light">
            <div class="timeline-content ms-5">
                <ExperienceContentHeader :position="exp.position" :company="exp.company" :period="exp.period" />
                <ExperienceContentList :achievements="exp.achievements" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    experiences: Array
})
</script>