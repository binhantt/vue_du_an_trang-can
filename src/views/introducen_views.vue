<template>
    <MainLayout>
        <b-container class="py-4">
            <b-row class="g-4">
                <b-col lg="6">
                    <BaseCard title="About Me" icon="fas fa-user" animation="fade-up">
                        <p>Hi there! I'm Binh An, a passionate Frontend Developer based in Ho Chi Minh City. I love
                            creating beautiful and user-friendly web experiences. When I'm not coding, you can find me
                            exploring new technologies or enjoying a good cup of coffee.</p>
                    </BaseCard>
                </b-col>
                <b-col lg="6">
                    <BaseCard title="Education Journey" icon="fas fa-graduation-cap" animation="fade-up">
                        <div class="timeline">
                            <div class="timeline-item">
                                <b-badge variant="warning" class="time">2016 - 2020</b-badge>
                                <div class="content">
                                    <h3>University of Information Technology</h3>
                                    <p>Bachelor's in Software Engineering</p>
                                    <p>Focused on Web Development and UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                    </BaseCard>
                </b-col>
            </b-row>
        </b-container>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/Layout/main_layout.vue'
import BaseCard from '@/components/base/base.vue'
import { defineOptions } from 'vue'

defineOptions({
    name: 'IntroduceViews'
})
</script>

<style scoped>
.introduce-wrapper {
    min-height: calc(70vh - var(--navbar-height));
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0;
}

.introduce-wrapper::-webkit-scrollbar {
    display: none;
}

.introduce-container {
    max-width: 1200px;
    padding: 2rem 1rem;
}

.section {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 1rem !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.section-title {
    color: #ffd700;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
}

.info-content {
    color: #adb5bd;
    line-height: 1.8;
    font-size: 1rem;
}

.timeline {
    position: relative;
    padding-left: 2rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ffd700;
    opacity: 0.3;
}

.timeline-item {
    position: relative;
    padding-bottom: 1rem;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #ffd700;
    border: 2px solid #1a1a1a;
    transition: transform 0.3s ease;
}

.timeline-item:hover::before {
    transform: scale(1.2);
}

.time {
    background: rgba(255, 215, 0, 0.15) !important;
    color: #ffd700 !important;
    padding: 0.5rem 1rem;
    border-radius: 2rem !important;
    font-weight: 500;
}

.content h3 {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.content p {
    color: #adb5bd;
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

@media (max-width: 991.98px) {
    .introduce-container {
        padding: 1rem;
    }

    .timeline {
        padding-left: 1.5rem;
    }

    .timeline-item::before {
        left: -1.5rem;
    }
}
</style>