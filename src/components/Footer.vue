<script setup>
import { ref } from 'vue'

const scrollToHome = () => {
  const homeSection = document.getElementById('home-section')
  homeSection.scrollIntoView({ behavior: 'smooth' })
}

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about-section')
  aboutSection.scrollIntoView({ behavior: 'smooth' })
}

const scrollToSkills = () => {
  const skillsSection = document.getElementById('skills-section')
  skillsSection.scrollIntoView({ behavior: 'smooth' })
}

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects-section')
  projectsSection.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <body>
    <footer class="bg-[#353232] text-white p-8 w-screen">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div class="flex flex-col md:flex-row justify-center md:justify-start mb-4 md:mb-0">
          <a href="#" class="hover:text-gray-300 mb-2 md:mb-0 md:mr-6" @click.prevent="scrollToHome">Home</a>
          <a href="#" class="hover:text-gray-300 mb-2 md:mb-0 md:mr-6" @click.prevent="scrollToSkills">My skills</a>
          <a href="#" class="hover:text-gray-300 mb-2 md:mb-0" @click.prevent="scrollToProjects">My projects</a>
        </div>
        <div class="mb-4 md:mb-0">
          <a href="mailto:your-email@example.com" class="hover:text-gray-300">Contact me</a>
        </div>
        <div>
          <img src="/image/MK-LOGO.svg" alt="Minel's Logo" class="w-20 md:w-24 lg:w-32 mx-auto md:mx-0 md:ml-auto" />
        </div>
      </div>
      <p class="text-center md:text-left mt-4 md:mt-8">&copy; 2024 Minel KUJUNDZIC</p>
    </footer>
  </body>
</template>