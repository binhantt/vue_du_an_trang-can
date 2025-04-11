<template>
    <b-sidebar id="sidebar" visible bg-variant="primary" text-variant="light" shadow>
        <div class="mt-4 overflow-hidden text-light">
            <div class="text-center">
                <ProfileSection />

                <div class="d-flex align-items-center my-4 gap-3">
                    <span class="flex-grow-1 border-top border-warning opacity-25"></span>
                    <i class="fas fa-star text-warning"></i>
                    <span class="flex-grow-1 border-top border-warning opacity-25"></span>
                </div>

                <DetailsSection />

                <div class="d-flex align-items-center my-4 gap-3">
                    <span class="flex-grow-1 border-top border-warning opacity-25"></span>
                    <i class="fas fa-link text-warning"></i>
                    <span class="flex-grow-1 border-top border-warning opacity-25"></span>
                </div>

                <SocialLinks />
            </div>
        </div>
    </b-sidebar>
</template>

<script setup>
import ProfileSection from '@/components/Sidebar/ProfileSection.vue'
import DetailsSection from '@/components/Sidebar/DetailsSection.vue'
import SocialLinks from '@/components/Sidebar/SocialLinks.vue'
</script>
