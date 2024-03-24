<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const scrollToSkills = () => {
  const skillsSection = document.getElementById('skills-section')
  skillsSection.scrollIntoView({ behavior: 'smooth' })
  closeMenu()
}

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects-section')
  projectsSection.scrollIntoView({ behavior: 'smooth' })
  closeMenu()
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="m-4 sticky top-[30px] z-50 HeaderAnimation">
    <div
      class="flex justify-between items-center p-2 bg-[#353232] bg-opacity-50 rounded-full border border-[#60A337] backdrop-blur-sm"
    >
      <a href="/">
        <div class="flex items-center">
          <img
            src="/image/MK-LOGO.svg"
            alt="Minel Kujundzic Logo"
            class="h-8 sm:h-10 lg:h-14 px-2 sm:px-4 lg:px-7"
          />
        </div>
      </a>
      <ul
        class="hidden md:flex items-center space-x-6 md:space-x-16 z-40 text-white text-xs sm:text-sm lg:text-xl"
      >
        <li class="list-none nav-link hover:font-semibold">
          <RouterLink to="/">Home</RouterLink>
          <span class="nav-underline"></span>
        </li>
        <li class="list-none nav-link hover:font-semibold">
          <RouterLink to="#" @click.prevent="scrollToSkills">Skills</RouterLink>
          <span class="nav-underline"></span>
        </li>
        <li class="list-none nav-link hover:font-semibold">
          <RouterLink to="#" @click.prevent="scrollToProjects">Project</RouterLink>
          <span class="nav-underline"></span>
        </li>
      </ul>
      <div class="flex items-center">
        <a href="mailto:minelkujundzic@icloud.com"
          ><div
            class="hidden md:block p-1 sm:p-2 lg:p-4 border rounded-full border-[#60A337] bg-gradient-to-r from-[#52773B] to-[#364d27] gradient-hover"
          >
            <button class="text-white font-bold text-xs sm:text-sm lg:text-xl px-2 sm:px-4 lg:px-6">
              Contact me
            </button>
          </div></a
        >
        <div class="md:hidden ml-2 sm:ml-4">
          <button class="text-white focus:outline-none" @click="isOpen = !isOpen">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-show="isOpen" class="md:hidden">
      <ul class="bg-[#353232] bg-opacity-25 rounded-lg p-4 mt-2 space-y-2 text-white text-sm">
        <li class="list-none hover:font-semibold">
          <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        </li>
        <li class="list-none hover:font-semibold" @click="scrollToSkills">Skills</li>
        <li class="list-none hover:font-semibold" @click="scrollToProjects">Project</li>
        <RouterLink to="../pages/contact.vue" @click="closeMenu">
          <a href="mailto:minelkujundzic@icloud.com">
            <div
              class="p-2 border rounded-full border-[#60A337] bg-gradient-to-r from-[#52773B] to-[#364d27] gradient-hover text-center mt-4"
            >
              <button class="text-white font-bold text-lg px-6 contact-btn">Contact me</button>
            </div>
          </a>
        </RouterLink>
      </ul>
    </div>
  </nav>
</template>
