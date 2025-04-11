<template>
    <b-form-group :class="groupClass">
        <b-form-input 
            :value="modelValue" 
            :placeholder="placeholder" 
            :type="type"
            :state="state"
            required 
            @input="onInput"
            class="form-control bg-black border-warning text-light"
        ></b-form-input>
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
    type: {
        type: String,
        default: 'text'
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