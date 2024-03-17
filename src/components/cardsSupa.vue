Bien sûr, voici le code modifié pour que l'effet de curseur s'applique également sur les cartes de projet :

html


Copy code
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
const mouse = ref(null)
const hoverEffect = ref(null)

onMounted(async () => {
  mouse.value = document.querySelector('#mouse')
  hoverEffect.value = document.createElement('div')
  hoverEffect.value.id = 'hover-effect'
  document.body.appendChild(hoverEffect.value)

  let { data } = await supabase.from('projects').select('*')
  // Ajoutez l'URL de l'image correcte pour chaque projet ici, selon votre logique de stockage d'images
  data = data.map((project) => ({
    ...project,
    imageUrl: `/image/${project.project_name}.png`, // Ajustez selon le chemin d'accès réel
    transform: '',
    glow: 'radial-gradient(circle at 50% 0%, rgb(200, 247, 211), transparent)'
  }))
  projects.value = data

  const updateMousePosition = (e) => {
    mouse.value.style.top = e.clientY + 'px'
    mouse.value.style.left = e.clientX + 'px'
    hoverEffect.value.style.top = e.clientY + 'px'
    hoverEffect.value.style.left = e.clientX + 'px'
  }

  window.addEventListener('mousemove', updateMousePosition)
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

  mouse.value.style.width = '10px'
  mouse.value.style.height = '10px'
  hoverEffect.value.style.opacity = '0.2'
}

const handleMouseLeave = (project) => {
  project.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
  project.glow = 'radial-gradient(circle at 50% 0%, rgb(200, 247, 211), transparent)'

  mouse.value.style.width = '20px'
  mouse.value.style.height = '20px'
  hoverEffect.value.style.opacity = '0'
}
</script>
