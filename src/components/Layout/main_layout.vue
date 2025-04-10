<template>
    <div class="main-layout d-flex p-0 vh-100">
        <SidebarLayout class="sidebar border-end border-secondary d-none d-lg-block"></SidebarLayout>
        <div class="d-flex flex-column flex-grow-1">
            <NavbarLayout class="navbar-wrapper"></NavbarLayout>
            <div class="content-wrapper flex-grow-1 ps-4 pe-4">
                <slot></slot>
            </div>
            <FooerLayout class="footer"></FooerLayout>
        </div>
    </div>
</template>

<style scoped>


@media (max-width: 991.98px) {
    .content-wrapper {
        padding-left: 0 !important;
    }
}
</style>

<script setup>
import SidebarLayout from '@/components/Layout/siblar_layout.vue'
import NavbarLayout from '@/components/Layout/navbar_layout.vue'
import FooerLayout from '@/components/Layout/fooer_layout.vue'
import { defineOptions } from 'vue'

defineOptions({
    name: 'MainLayout'
})
</script>