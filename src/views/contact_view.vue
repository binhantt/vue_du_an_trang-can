<template>
    <MainLayout>
        <b-container class="py-3">
            <b-row class="py-md-3">
                <Contact 
                    :contact-items="contactData.contactItems" 
                    :socials="contactData.socialLinks" 
                />
                <ContactForm />
            </b-row>
        </b-container>
    </MainLayout>
</template>

<script setup>
import { defineOptions } from 'vue'
import MainLayout from '@/components/Layout/main_layout.vue'
import Contact from '@/components/Conatact/Contact.vue'
import ContactForm from '@/components/Conatact/ContactForm.vue'
import { contactData } from '@/config/data/contact'

defineOptions({
    name: 'ContactView'
})
</script>

<style scoped>
.contact-container {
    padding: var(--space-md) var(--space-md);
}

@media (max-width: 768px) {
    .contact-container {
        padding: var(--space-md) var(--space-sm);
    }
}
</style>