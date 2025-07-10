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
    <div class="pagination" v-if="totalPages > 1">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>
        <span v-for="page in totalPages" :key="page">
            <button @click="goToPage(page)" :disabled="page === currentPage">{{ page }}</button>
        </span>
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
})

const itemsPerPage = 3
const itemsPerRow = 3
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.projects.length / itemsPerPage))

const paginatedProjects = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return props.projects.slice(start, start + itemsPerPage)
})

const projectRows = computed(() => {
    const rows = []
    for (let i = 0; i < paginatedProjects.value.length; i += itemsPerRow) {
        rows.push(paginatedProjects.value.slice(i, i + itemsPerRow))
    }
    return rows
})

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
}

.pagination button {
  background: #222;
  color: #FFD600;
  border: 1px solid #FFD600;
  border-radius: 6px;
  padding: 6px 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.pagination button:disabled {
  background: #444;
  color: #888;
  border-color: #444;
  cursor: not-allowed;
}

.pagination button:not(:disabled):hover {
  background: #FFD600;
  color: #222;
}
</style>