<template>
    <b-navbar toggleable="sm" class="custom-navbar">
        <b-container>
            <b-navbar-toggle target="nav-collapse">
                <template #default="{ expanded }">
                    <i :class="expanded ? 'fas fa-times' : 'fas fa-bars'" class="toggle-icon"></i>
                </template>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item 
                        v-for="(route, index) in navbarData.routes" 
                        :key="index"
                        :to="route.path"
                        :active="$route.path === route.path">
                        <i :class="route.icon" class="me-2"></i>
                        {{ route.name }}
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ms-auto">
                    <b-nav-item-dropdown text="Mạng xã hội" right class="d-lg-none">
                        <b-dropdown-item 
                            v-for="(social, index) in navbarData.social"
                            :key="index"
                            :href="social.url" 
                            target="_blank">
                            <i :class="social.icon + ' me-2'"></i>
                            {{ social.name }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <div class="social-links d-none d-lg-flex">
                        <b-link 
                            v-for="(social, index) in navbarData.social"
                            :key="index"
                            :href="social.url" 
                            target="_blank" 
                            class="social-link"
                            :title="social.name">
                            <i :class="social.icon"></i>
                        </b-link>
                    </div>

                    <b-button 
                        variant="primary" 
                        class="cv-button ms-lg-3"
                        :href="navbarData.cv.url"
                        download>
                        <i :class="navbarData.cv.icon + ' me-2'"></i>
                        {{ navbarData.cv.text }}
                    </b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script setup>
import { defineOptions } from 'vue'
import { navbarData } from '@/config/data/navbar'

defineOptions({
    name: 'NavbarLayout'
})
</script>

<style scoped>

:deep(.navbar-toggler) {
    border: none;
    padding: 0.5rem;
}

:deep(.nav-link) {
    color: var(--secondary-color) !important;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.nav-link.active),
:deep(.nav-link:hover) {
    color: var(--primary-color) !important;
    background: rgba(var(--primary-color-rgb), 0.1);
    transform: translateY(-2px);
}

@media (max-width: 991.98px) {
    :deep(.navbar-collapse) {
        background: var(--bg-color);
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 0.5rem;
        border: 1px solid rgba(var(--primary-color-rgb), 0.2);
    }

    :deep(.nav-link) {
        text-align: center;
    }

    .cv-button {
        width: 100%;
        margin-top: 1rem;
    }
}
</style>