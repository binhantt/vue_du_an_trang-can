<template>
    <b-card no-body class="section" :data-aos="animation" :data-aos-duration="duration">
        <div class="glow-effect"></div>
        <b-card-body>
            <h2 class="section-title">
                <div class="icon-wrapper">
                    <i :class="icon"></i>
                </div>
                {{ title }}
            </h2>
            <div class="info-content">
                <slot></slot>
            </div>
        </b-card-body>
    </b-card>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: 'fas fa-star'
    },
    animation: {
        type: String,
        default: 'fade-up'
    },
    duration: {
        type: Number,
        default: 1000
    }
})
</script>

<style scoped>
.section {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.section:hover {
    transform: translateY(-8px);
    border-color: var(--primary-color);
    box-shadow: 0 15px 30px rgba(var(--primary-color-rgb), 0.15);
}

.glow-effect {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
        rgba(var(--primary-color-rgb), 0.1) 0%,
        transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}

.section:hover .glow-effect {
    opacity: 1;
}

.section-title {
    color: var(--primary-color);
    font-size: var(--size-1);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: 1rem;
}

.icon-wrapper {
    width: 45px;
    height: 45px;
    background: var(--bg-overlay);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.section:hover .icon-wrapper {
    background: var(--primary-color);
    border-color: var(--primary-color);
    transform: rotate(360deg);
}

.icon-wrapper i {
    font-size: 1.5rem;
    color: var(--primary-color);
    transition: all 0.3s ease;
}

.section:hover .icon-wrapper i {
    color: var(--bg-color);
}

.info-content {
    color: var(--text-color);
    font-size: var(--size-3);
    line-height: 1.8;
    position: relative;
    z-index: 1;
}

:deep(p) {
    margin-bottom: 1rem;
}

:deep(p:last-child) {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .section {
        border-radius: 20px;
    }

    .section-title {
        font-size: calc(var(--size-1) * 0.9);
    }

    .icon-wrapper {
        width: 40px;
        height: 40px;
    }
}
</style>

<script>
// Add this to your main app or component where you use the base card
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.section').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / card.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / card.offsetHeight) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});
</script>