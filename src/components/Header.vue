<template>
    <nav class="m-7 sticky top-[30px] HeaderAnimation z-50 ">
              <div class="flex justify-between items-center p-2 bg-[#353232] bg-opacity-50  rounded-full border border-[#60A337]">
        <div class="flex items-center">
          <img src="/image/MK-LOGO.svg" alt="Minel Kujundzic Logo" class="lg:h-14 lg:px-7 min-[320px]:h-7 min-[320px]:px-3">
        </div>
        <ul class="hidden md:flex items-center space-x-4 z-40">
          <li class="list-none text-white lg:text-xl sm:text-lg min-[320px]:text-sm">
            <a href="/">Home</a>
          </li>
          <li class="list-none text-white lg:text-xl sm:text-lg min-[320px]:text-sm">Skills</li>
          <li class="list-none text-white lg:text-xl sm:text-lg min-[320px]:text-sm">Project</li>
        </ul>
        <div class="flex items-center">
          <div class="p-2 border rounded-full border-[#60A337] bg-gradient-to-r from-[#52773B] to-[#364d27] gradient-hover min-[320px]:p-1 sm:p-4">
            <button class="text-white font-bold lg:text-xl sm:text-lg lg:px-6 min-[320px]:text-sm min-[320px]:px-2 sm:px-5">Contact me</button>
          </div>
          <div class="md:hidden ml-4">
            <button class="text-white focus:outline-none" @click="isOpen = !isOpen">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-show="isOpen" class="md:hidden">
        <ul class="bg-[#353232] bg-opacity-25 rounded-lg p-4 mt-2 space-y-2">
          <li class="list-none text-white text-lg">
            <a href="/">Home</a>
          </li>
          <li class="list-none text-white text-lg">Skills</li>
          <li class="list-none text-white text-lg">Project</li>
          <div class="p-2 border rounded-full border-[#60A337] bg-gradient-to-r from-[#52773B] to-[#364d27] gradient-hover">
            <button class="text-white font-bold text-lg px-6">Contact me</button>
          </div>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isOpen = ref(false);
  </script>
  
  <style>
  .HeaderAnimation {
    animation: HeaderAnimation 1s ease-out forwards;
  }
  
  @keyframes HeaderAnimation {
    0% {
      transform: translateY(-200%);
    }
    100% {
      transform: translateY(0);
    }
  }
  </style>