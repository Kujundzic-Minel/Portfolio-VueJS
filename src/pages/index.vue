<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import mySkills from '@/components/mySkills.vue'
import skillBar from '@/components/skillBar.vue'
import cardsSupa from '@/components/cardsSupa.vue'
</script>
<template>
  <Hero />
  <h2 id="skills-section" class="font-bold text-white px-10 pb-2 text-2xl sm:text-3xl md:text-4xl">My skills</h2>
  <skillBar />
  <mySkills />
  <h2 id="projects-section" class="font-bold text-white px-10 pb-2 text-2xl sm:text-3xl md:text-4xl">My projects</h2>
  <skillBar />
  <cardsSupa />
</template>
