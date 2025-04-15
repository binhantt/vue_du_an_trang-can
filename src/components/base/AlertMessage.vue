<template>
    <b-alert 
        :show="showAlert" 
        :variant="variant" 
        dismissible 
        fade 
        class="mb-3 animate__animated animate__fadeInDown animate__faster" 
        @dismissed="onDismissed">
        {{ message }}
    </b-alert>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    showAlert: Boolean,
    variant: String,
    message: String
})

const emit = defineEmits(['update:showAlert'])

const onDismissed = () => {
    emit('update:showAlert', false)
}
</script>

<style scoped>
.animate__animated {
    animation-duration: 0.5s;
}
</style>