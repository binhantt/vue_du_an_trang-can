<template>
  <b-navbar toggleable="lg" class="bg-black shadow-sm border-bottom border-dark ">
    <b-container>

      <!-- Toggle Button -->
      <b-navbar-toggle v-model="isNavOpen" target="nav-collapse" class="border-0 ms-auto d-lg-none">
        <template #default="{ expanded }">
          <i :class="expanded ? 'fas fa-times' : 'fas fa-bars'" class="text-white fs-4"></i>
        </template>
      </b-navbar-toggle>

      <!-- Collapsible Content -->
      <b-collapse 
        id="nav-collapse" 
        is-nav 
        v-model="isNavOpen" 
        class="bg-black">
        <NavbarRoutes 
          :onLinkClick="() => isNavOpen = false" 
          class="text-center mb-3 mb-lg-0 me-lg-auto" 
        />
        <b-navbar-nav class="d-flex align-items-center flex-column flex-lg-row gap-3 pe-3">
          <NavbarSocialLinks />
          <NavbarCvButton />
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script setup>
import { ref } from 'vue'
const isNavOpen = ref(false)
import NavbarRoutes from '@/components/Navbar/NavbarRoutes.vue'
import NavbarSocialLinks from '@/components/Navbar/NavbarSocialLinks.vue'
import NavbarCvButton from '@/components/Navbar/NavbarCvButton.vue'
</script>
