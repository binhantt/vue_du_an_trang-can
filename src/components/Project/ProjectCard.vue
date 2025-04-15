<template>
    <b-card class="project-card bg-black text-light border-1 border-secondary rounded-lg shadow-lg h-100">
        <div class="img-container">
            <b-img :src="project.image" 
                   class="rounded mb-1 project-image"
                   :alt="project.title"
                   fluid
                   style="width: 100%; height: 200px; object-fit: cover;"></b-img>
        </div>
        
        <h3 class="text-warning fw-bold title-hover">{{ project.title }}</h3>
        
        <div class="mb-1">
            <b-badge 
                v-for="tech in project.technologies" 
                :key="tech"
                variant="warning"
                class="me-2 mb-1 badge-hover">
                {{ tech }}
            </b-badge>
        </div>
        
        <p class="text-light">{{ project.description }}</p>
        
        <div class="mt-auto">
            <b-button 
                v-if="project.demo" 
                :href="project.demo" 
                target="_blank" 
                variant="outline-warning"
                class="me-2 btn-hover">
                <i class="fas fa-external-link-alt me-1"></i> Xem Demo
            </b-button>
            <b-button 
                v-if="project.github" 
                :href="project.github" 
                target="_blank" 
                variant="outline-light"
                class="btn-hover">
                <i class="fab fa-github me-1"></i> Mã nguồn
            </b-button>
        </div>
    </b-card>
</template>

<style scoped>
.project-card {
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(255, 193, 7, 0.15) !important;
}

.img-container {
    overflow: hidden;
    border-radius: 0.25rem;
}

.project-image {
    transition: transform 0.3s ease;
}

.img-container:hover .project-image {
    transform: scale(1.05);
}

.title-hover {
    transition: color 0.3s ease;
}

.title-hover:hover {
    color: #ffc107 !important;
    transform: translateX(5px);
}

.badge-hover {
    transition: all 0.3s ease;
}

.badge-hover:hover {
    transform: translateY(-3px);
}

.btn-hover {
    transition: all 0.3s ease;
}

.btn-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 193, 7, 0.2);
}
</style>

<script setup>
defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>