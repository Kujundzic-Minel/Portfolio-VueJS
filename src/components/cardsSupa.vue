<template>
    <div class="flex justify-center items-center min-h-screen">
      <div class="container px-4">
        <div class="cards-grid">
          <div class="card" v-for="project in projects" :key="project.id"
               @mousemove="handleMouseMove($event, project)"
               @mouseleave="handleMouseLeave(project)">
            <div class="content-card" :style="{ transform: project.transform }">
                <img :src="project.project_image" :alt="project.project_name" />
              <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent rounded-[25px]">
                <div class="p-4 text-white font-semibold">
                  <h2>{{ project.project_name }}</h2>
                  <p>{{ project.project_desc }}</p>
                </div>
              </div>
            </div>
            <div class="glow" :style="{ background: project.glow, transform: project.transform }"></div>
          </div>
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
    data = data.map(project => ({
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
    project.glow = `radial-gradient(circle at ${x / cardRect.width * 100}% ${y / cardRect.height * 100}%, rgb(200, 247, 211), transparent)`
  }
  
  const handleMouseLeave = (project) => {
    project.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
    project.glow = 'radial-gradient(circle at 50% 0%, rgb(200, 247, 211), transparent)'
  }
  </script>
  
  <style>
  .container {
    max-width: 1200px;
  }
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  .card {
    width: 100%;
    height: 0;
    padding-bottom: 90%;
    perspective: 1000px;
    position: relative;
  }
  .card:hover {
    z-index: 10;
  }
  .content-card {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 25px;
    transition: all 0.15s ease-out;
    position: absolute;
    top: 0;
    left: 0;
  }
  .content-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.15s ease-out;
    border-radius: 25px;
    mix-blend-mode: hard-light;
    background: radial-gradient(circle at 50% 0%, rgb(200, 247, 211), transparent);
  }
  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  </style>
  