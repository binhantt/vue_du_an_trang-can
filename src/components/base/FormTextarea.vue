<template>
    <b-form-group :class="groupClass">
        <b-form-textarea 
            :value="modelValue" 
            :placeholder="placeholder" 
            :rows="rows"
            :state="state"
            required 
            @input="onInput"
            class="form-control bg-black border-warning text-light"
        ></b-form-textarea>
        <b-form-invalid-feedback>
            {{ invalidFeedback }}
        </b-form-invalid-feedback>
    </b-form-group>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    modelValue: String,
    placeholder: String,
    rows: {
        type: Number,
        default: 5
    },
    state: Boolean,
    invalidFeedback: String,
    groupClass: {
        type: String,
        default: 'mb-3'
    }
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>