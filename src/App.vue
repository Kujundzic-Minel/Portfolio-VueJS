<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const mouse = document.querySelector('#mouse')

  const updateMousePosition = (e) => {
    mouse.style.top = e.clientY + 'px'
    mouse.style.left = e.clientX + 'px'
  }

  window.addEventListener('mousemove', updateMousePosition)

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition)
  })
})
</script>

<template>
  <Header />
  <div id="mouse"></div>
  <suspense>
    <RouterView />
  </suspense>
  <Footer />
</template>
