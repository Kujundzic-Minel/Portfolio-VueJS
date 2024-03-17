<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const mouse = ref(null)
const hoverEffect = ref(null)

onMounted(() => {
  mouse.value = document.querySelector('#mouse')
  hoverEffect.value = document.createElement('div')
  hoverEffect.value.id = 'hover-effect'
  document.body.appendChild(hoverEffect.value)

  const updateMousePosition = (e) => {
    mouse.value.style.top = e.clientY + 'px'
    mouse.value.style.left = e.clientX + 'px'
    hoverEffect.value.style.top = e.clientY + 'px'
    hoverEffect.value.style.left = e.clientX + 'px'
  }

  window.addEventListener('mousemove', updateMousePosition)

  const handleMouseEnter = () => {
    mouse.value.style.width = '10px'
    mouse.value.style.height = '10px'
    hoverEffect.value.style.opacity = '0.2'
  }

  const handleMouseLeave = () => {
    mouse.value.style.width = '20px'
    mouse.value.style.height = '20px'
    hoverEffect.value.style.opacity = '0'
  }

  const clickableElements = document.querySelectorAll('button, a')
  clickableElements.forEach((element) => {
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition)
    clickableElements.forEach((element) => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    })
    document.body.removeChild(hoverEffect.value)
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