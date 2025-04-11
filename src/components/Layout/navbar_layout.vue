<template>
    <b-navbar toggleable="sm" class="bg-black shadow-sm">
        <b-container>
            <b-navbar-toggle target="nav-collapse" class="border-0">
                <template #default="{ expanded }">
                    <i :class="expanded ? 'fas fa-times' : 'fas fa-bars'" class="text-white"></i>
                </template>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="bg-black rounded-lg border border-light">
                <NavbarRoutes />
                <b-navbar-nav class="ms-auto">
                    <NavbarSocialLinks />
                    <NavbarCvButton />
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script setup>
import { defineOptions } from 'vue'
import { navbarData } from '@/config/data/navbar'
import NavbarRoutes from '@/components/Navbar/NavbarRoutes.vue'
import NavbarSocialLinks from '@/components/Navbar/NavbarSocialLinks.vue'
import NavbarCvButton from '@/components/Navbar/NavbarCvButton.vue'

defineOptions({
    name: 'NavbarLayout'
})
</script>