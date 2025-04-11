<template>
    <b-list-group flush class="bg-black text-light">
      
        <b-list-group-item v-for="(achievement, idx) in achievements" 
                           :key="idx"
                           class="bg-black text-light border-secondary">
            {{ achievement }}
        </b-list-group-item>
    </b-list-group>
</template>

<script setup>
defineProps({
    achievements: {
        type: Array,
        required: true
    }
})
</script>

