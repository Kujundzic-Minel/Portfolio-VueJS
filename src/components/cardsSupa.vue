<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="container px-4">
      <div class="cards-grid">
        <router-link
          v-for="project in projects"
          :key="project.id"
          :to="`/projets/${project.id}`"
          class="card"
          @mousemove.native="handleMouseMove($event, project)"
          @mouseleave.native="handleMouseLeave(project)"
        >
          <div class="content-card" :style="{ transform: project.transform }">
            <img :src="project.project_image" :alt="project.project_name" />
            <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 to-transparent">
              <div class="p-4 text-white font-semibold">
                <h2>{{ project.project_name }}</h2>
                <p>{{ project.project_desc }}</p>
              </div>
            </div>
          </div>
          <div class="glow" :style="{ background: project.glow, transform: project.transform }"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'

const projects = ref([])

onMounted(async () => {
  let { data } = await supabase.from('projects').select('*')
  // Ajoutez l'URL de l'image correcte pour chaque projet ici, selon votre logique de stockage d'images
  data = data.map((project) => ({
    ...project,
    imageUrl: `/image/${project.project_name}.png`, // Ajustez selon le chemin d'accès réel
    transform: '',
    glow: 'radial-gradient(circle at 50% 0%, rgb(200, 247, 211), transparent)'
  }))
  projects.value = data
})

const handleMouseMove = (event, project) => {
  const cardRect = event.currentTarget.getBoundingClientRect()
  const x = event.clientX - cardRect.left
  const y = event.clientY - cardRect.top
  const midCardWidth = cardRect.width / 2
  const midCardHeight = cardRect.height / 2
  const angleY = (midCardWidth - x) / 10
  const angleX = (y - midCardHeight) / 10

  project.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
  project.glow = `radial-gradient(circle at ${(x / cardRect.width) * 100}% ${(y / cardRect.height) * 100}%, rgb(200, 247, 211), transparent)`
}

const handleMouseLeave = (project) => {
  project.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
  project.glow = 'radial-gradient(circle at 50% 0%, rgb(200, 247, 211), transparent)'
}
</script>
