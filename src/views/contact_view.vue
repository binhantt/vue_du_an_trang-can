<template>
    <MainLayout>
        <b-container class="contact-container">
            <b-row class="justify-content-center">
                <Contact 
                    :contact-items="contactItems" 
                    :socials="socialLinks" 
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

defineOptions({
    name: 'ContactView'
})

const contactItems = [
    {
        icon: 'fas fa-map-marker-alt',
        title: 'Location',
        content: 'Ho Chi Minh City, Vietnam'
    },
    {
        icon: 'fas fa-envelope',
        title: 'Email',
        content: 'binhan@gmail.com'
    },
    {
        icon: 'fas fa-phone',
        title: 'Phone',
        content: '+84 123 456 789'
    }
]

const socialLinks = [
    { icon: 'fab fa-github', link: 'https://github.com/binhan' },
    { icon: 'fab fa-linkedin', link: 'https://linkedin.com/in/binhan' },
    { icon: 'fab fa-facebook', link: 'https://facebook.com/binhan' },
    { icon: 'fab fa-instagram', link: 'https://instagram.com/binhan' }
]
</script>