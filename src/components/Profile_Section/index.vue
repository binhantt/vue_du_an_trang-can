<template>
        <b-col lg="4">
                    <b-card class="profile-card" data-aos="fade-right">
                        <div class="profile-header">
                            <div class="avatar-wrapper">
                                <b-img src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" alt="Profile" class="profile-avatar" />
                                <b-badge variant="success" class="status-badge">
                                    <span class="status-dot"></span>
                                    Available for Work
                                </b-badge>
                            </div>
                            <h2 class="profile-name">Binh An</h2>
                            <p class="profile-title">
                                <i class="fas fa-code me-2"></i>
                                Frontend Developer
                            </p>
                        </div>
                        
                        <b-row class="profile-stats mx-0">
                            <b-col  class="px-2">
                                <div class="stat-item">
                                    <span class="stat-value">3<span class="plus">+</span></span>
                                    <span class="stat-label">Years</span>
                                </div>
                            </b-col>
                            <b-col  class="px-2">
                                <div class="stat-item">
                                    <span class="stat-value">50<span class="plus">+</span></span>
                                    <span class="stat-label">Projects</span>
                                </div>
                            </b-col>
                            <b-col  class="px-2">
                                <div class="stat-item">
                                    <span class="stat-value">100<span class="percent">%</span></span>
                                    <span class="stat-label">Success</span>
                                </div>
                            </b-col>
                        </b-row>

                    </b-card>
                </b-col>
</template>
<script>
import { defineOptions } from 'vue'

defineOptions({
    name: 'ProfileCard'
})
</script>