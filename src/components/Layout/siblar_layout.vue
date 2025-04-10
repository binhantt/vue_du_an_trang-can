<template>
    <b-sidebar id="sidebar" visible bg-variant="primary" text-variant="light" shadow>
        <div class="sidebar-content mt-4 overflow-hidden">
            <div class="profile-section">
                <div class="avatar-container">
                    <b-avatar :size="'6rem'" :src="profileData.personal.avatar" class="profile-avatar"></b-avatar>
                    <span class="status-badge size-3">
                        <i class="fas fa-circle text-success"></i>
                        {{ profileData.personal.status }}
                    </span>
                </div>

                <div class="profile-info">
                    <h4 class="name size-1">{{ profileData.personal.name }}</h4>
                    <div class="title size-2">
                        <i class="fas fa-laptop-code"></i>
                        {{ profileData.personal.title }}
                    </div>
                </div>

                <div class="section-divider">
                    <span></span>
                    <i class="fas fa-star"></i>
                    <span></span>
                </div>


                <div class="info-section">
                    <div class="info-item size-3">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Thành phố Hồ Chí Minh, Việt Nam</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Đại học Công nghệ TP.HCM (HUTECH)</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-code"></i>
                        <span>Kỹ sư Phần mềm</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-briefcase"></i>
                        <span>Lập trình viên Frontend tại TechCorp</span>
                    </div>
                </div>

                <div class="section-divider">
                    <span></span>
                    <i class="fas fa-link"></i>
                    <span></span>
                </div>

                <div class="social-links">
                    <b-button href="https://github.com/binhan" variant="outline-warning" class="social-btn" target="_blank" title="GitHub">
                        <i class="fab fa-github"></i>
                    </b-button>
                    <b-button href="https://linkedin.com/in/binhan" variant="outline-warning" class="social-btn" target="_blank" title="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </b-button>
                    <b-button href="mailto:binhan@gmail.com" variant="outline-warning" class="social-btn" title="Gửi Email">
                        <i class="fas fa-envelope"></i>
                    </b-button>
                </div>
            </div>
        </div>
    </b-sidebar>
</template>

<script setup>
import { profileData } from '@/config/data/profile'

defineOptions({
    name: 'SiblarLayout'
})
</script>

<style scoped>

.sidebar-content {
    background: var( --bg-color);
    color: var(--secondary-color);
}

.profile-avatar {
    border: 3px solid var(--secondary-color);
}

.name, .title {
    color: var(--secondary-color);
}

.info-item {
    color: var(--secondary-color);
}

.info-item:hover {
    background: rgba(255, 255, 255, 0.1);
}

.profile-section {
    text-align: center;
}

.avatar-container {
    position: relative;
    display: inline-block;
    margin-bottom: 1.5rem;
}

.profile-avatar {
    border: 3px solid #ffd700;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.15);
    transition: transform 0.3s ease;
}

.profile-avatar:hover {
    transform: scale(1.05);
}

.status-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #1a1a1a;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    border: 2px solid #ffd700;
    font-size: 0.8rem;
    color: #ffd700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.profile-info {
    margin-bottom: 2rem;
}

.name {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.title {
    color: #ffd700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.section-divider {
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    gap: 1rem;
}

.section-divider span {
    flex: 1;
    height: 1px;
    background: rgba(255, 215, 0, 0.2);
}

.section-divider i {
    color: #ffd700;
    font-size: 0.8rem;
}

.bio-section {
    margin: 1.5rem 0;
}

.bio-text {
    color: #adb5bd;
    line-height: 1.6;
    font-size: 0.9rem;
}

.info-section {
    text-align: left;
    margin: 1.5rem 0;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    color: #adb5bd;
    transition: all 0.3s ease;
    border-radius: 8px;
    margin-bottom: 0.5rem;
}

.info-item:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: translateX(5px);
}

.info-item i {
    color: #ffd700;
    width: 20px;
    text-align: center;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
}

.social-btn {
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.social-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
}

@media (max-width: 991.98px) {
    .sidebar-content {
        padding: 1.5rem 1rem;
    }
}
</style>
