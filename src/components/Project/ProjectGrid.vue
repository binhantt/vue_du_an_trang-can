<template>
    <div v-for="(row, rowIndex) in projectRows" :key="rowIndex">
        <b-row class="mb-1">
            <b-col lg="4" md="6" class="mb-1" 
                   v-for="(project, index) in row" 
                   :key="project.title">
                <ProjectCard :project="project" />
            </b-col>
        </b-row>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
})

const projectRows = computed(() => {
    const rows = []
    const itemsPerRow = 3
    
    for (let i = 0; i < props.projects.length; i += itemsPerRow) {
        rows.push(props.projects.slice(i, i + itemsPerRow))
    }
    
    return rows
})
</script>