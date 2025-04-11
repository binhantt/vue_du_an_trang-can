<template>
    <b-navbar toggleable="sm" class="bg-black shadow-sm border-bottom border-dark">
        <b-container>
            <b-navbar-toggle target="nav-collapse">
                <template #default="{ expanded }">
                    <i :class="expanded ? 'fas fa-times' : 'fas fa-bars'" class="text-white"></i>
                </template>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="bg-black d-flex justify-content-between">
                <NavbarRoutes />
                <b-navbar-nav class="d-flex align-items-center ">
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