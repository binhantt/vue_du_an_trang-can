<template>
    <b-col :lg="size">
        <BaseCard title="Nhắn tin " icon="fas fa-envelope" :animation="animation">
            <b-alert v-model="showAlert" :variant="alertVariant" dismissible fade class="">
                             {{ alertMessage }}
            </b-alert>
            <b-form @submit.prevent="handleSubmit" :class="{ 'was-validated': isSubmitted }">
                <b-row>
                    <b-col md="6">
                        <b-form-group class="mb-4">
                            <b-form-input 
                                v-model="form.name" 
                                placeholder="Your Name" 
                                :state="nameState"
                                required 
                                @input="validateName"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                                Name must be at least 2 characters
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group class="mb-4">
                            <b-form-input 
                                v-model="form.email" 
                                type="email" 
                                placeholder="Your Email"
                                :state="emailState" 
                                required 
                                @input="validateEmail"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                                Please enter a valid email address
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group class="mb-4">
                            <b-form-textarea 
                                v-model="form.message" 
                                placeholder="Your Message" 
                                rows="5"
                                :state="messageState" 
                                required 
                                @input="validateMessage"
                            ></b-form-textarea>
                            <b-form-invalid-feedback>
                                Message must be at least 10 characters
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" class="text-center">
                        <b-button 
                            type="submit" 
                            variant="primary" 
                            size="lg" 
                            class="submit-btn"
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

<style scoped>
:deep(.form-control) {
    background: var(--bg-overlay) !important;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    padding: 1rem;
    border-radius: 10px;
    transition: all 0.3s ease;
}

:deep(.form-control:focus) {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 0.25rem rgba(var(--primary-color-rgb), 0.1);
}

:deep(.alert) {
    background: var(--bg-overlay);
    border-color: var(--border-color);
    color: var(--text-color);
}

:deep(.alert-success) {
    border-left: 4px solid #28a745;
}

:deep(.alert-danger) {
    border-left: 4px solid #dc3545;
}

:deep(.form-control.is-valid),
:deep(.form-control.is-invalid) {
    background-image: none;
}

:deep(.invalid-feedback) {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

.submit-btn {
    padding: 1rem 2.5rem;
    font-size: var(--size-3);
    border-radius: 10px;
    background: var(--primary-color);
    border: none;
    color: var(--bg-color);
    transition: all 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(var(--primary-color-rgb), 0.3);
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
</style>