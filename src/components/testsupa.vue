<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'


const projects = ref([])

onMounted(async () => {
  const { data } = await supabase.from('projects').select('*')
  projects.value = data
  console.log(projects.value)
})
</script>

<template>
  <div>
    <p>Test</p>
    <div v-for="project in projects" :key="project.id">
      <div class="project">
        <h2>{{ project.project_name }}</h2>
        <p>{{ project.project_desc }}</p>
      </div>
    </div>
  </div>
</template>