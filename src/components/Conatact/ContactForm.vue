<template>
    <b-col :lg="size">
        <BaseCard title="Nhắn tin " icon="fas fa-envelope" :animation="animation">
            <AlertMessage :showAlert="showAlert" :variant="alertVariant" :message="alertMessage" />
            <b-form @submit.prevent="handleSubmit" :class="{ 'was-validated': isSubmitted }">
                <b-row>
                    <b-col md="6">
                        <FormInput 
                            :modelValue="form.name" 
                            placeholder="Your Name" 
                            :state="nameState"
                            invalidFeedback="Name must be at least 2 characters"
                            @update:modelValue="form.name = $event"
                        />
                    </b-col>
                    <b-col md="6">
                        <FormInput 
                            :modelValue="form.email" 
                            type="email" 
                            placeholder="Your Email"
                            :state="emailState"
                            invalidFeedback="Please enter a valid email address"
                            @update:modelValue="form.email = $event"
                        />
                    </b-col>
                    <b-col cols="12">
                        <FormTextarea 
                            :modelValue="form.message" 
                            placeholder="Your Message" 
                            :state="messageState"
                            invalidFeedback="Message must be at least 10 characters"
                            @update:modelValue="form.message = $event"
                        />
                    </b-col>
                    <b-col cols="12" class="text-center">
                        <b-button 
                            type="submit" 
                            variant="warning" 
                            size="lg" 
                            class="mt-3"
                            :disabled="isSubmitting"
                        >
                            <b-spinner small v-if="isSubmitting"></b-spinner>
                            <span v-else><i class="fas fa-paper-plane me-2"></i>Send Message</span>
                        </b-button>
                    </b-col>
                </b-row>
            </b-form>
        </BaseCard>
    </b-col>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseCard from '../base/base.vue'
import FormInput from '../base/FormInput.vue'
import FormTextarea from '../base/FormTextarea.vue'
import AlertMessage from '../base/AlertMessage.vue'

defineProps({
    size: {
        type: [Number, String],
        default: 7
    },
    animation: {
        type: String,
        default: 'fade-left'
    }
})

const form = ref({
    name: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const showAlert = ref(false)
const alertVariant = ref('success')
const alertMessage = ref('')

const nameState = computed(() => {
    if (form.value.name.length === 0) return null
    return form.value.name.length >= 2
})

const emailState = computed(() => {
    if (form.value.email.length === 0) return null
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(form.value.email)
})

const messageState = computed(() => {
    if (form.value.message.length === 0) return null
    return form.value.message.length >= 10
})

const validateName = () => {
    if (isSubmitted.value) nameState.value
}

const validateEmail = () => {
    if (isSubmitted.value) emailState.value
}

const validateMessage = () => {
    if (isSubmitted.value) messageState.value
}

const showNotification = (message, variant) => {
    alertMessage.value = message
    alertVariant.value = variant
    showAlert.value = true
    setTimeout(() => {
        showAlert.value = false
    }, 5000)
}

const handleSubmit = async () => {
    isSubmitted.value = true

    if (!nameState.value || !emailState.value || !messageState.value) {
        showNotification('Please fill all required fields correctly', 'danger')
        return
    }

    isSubmitting.value = true

    try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        showNotification('Message sent successfully! I will contact you soon.', 'success')
        form.value = { name: '', email: '', message: '' }
        isSubmitted.value = false
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'danger')
    } finally {
        isSubmitting.value = false
    }
}
</script>