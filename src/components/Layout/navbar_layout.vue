<template>
    <b-navbar  toggleable="sm" class="custom-navbar " key=""  >
        <b-container>
            <b-navbar-toggle target="nav-collapse">
                <template #default="{ expanded }">
                    <i :class="expanded ? 'fas fa-times' : 'fas fa-bars'" class="toggle-icon"></i>
                </template>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav >
                <b-navbar-nav>
                    <b-nav-item 
                        v-for="(route, index) in routes" 
                        :key="index"
                        :to="route.path"
                        :active="$route.path === route.path">
                        <i :class="route.icon" class="me-2"></i>
                        {{ route.name }}
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ms-auto">
                    <b-nav-item-dropdown text="Social Links" right class="d-lg-none">
                        <b-dropdown-item href="https://github.com" target="_blank">
                            <i class="fab fa-github me-2"></i>GitHub
                        </b-dropdown-item>
                        <b-dropdown-item href="https://linkedin.com" target="_blank">
                            <i class="fab fa-linkedin me-2"></i>LinkedIn
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <div class="social-links d-none d-lg-flex">
                        <b-link href="https://github.com" target="_blank" class="social-link">
                            <i class="fab fa-github"></i>
                        </b-link>
                        <b-link href="https://linkedin.com" target="_blank" class="social-link">
                            <i class="fab fa-linkedin"></i>
                        </b-link>
                    </div>

                    <b-button variant="primary" class="cv-button ms-lg-3">
                        <i class="fas fa-download me-2"></i>
                        Download CV
                    </b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
    name: 'NavbarLayout'
})

const routes = [
    { path: '/', name: 'Trang Chủ', icon: 'fas fa-home' },
    { path: '/gioi-thieu', name: 'Giới Thiệu', icon: 'fas fa-user' },
    { path: '/ky-nang', name: 'Kỹ Năng', icon: 'fas fa-code' },
    { path: '/du-an', name: 'Dự Án', icon: 'fas fa-project-diagram' },
    { path: '/lien-he', name: 'Liên Hệ', icon: 'fas fa-envelope' }
]
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