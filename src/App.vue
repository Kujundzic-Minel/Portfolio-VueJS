<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const mouse = document.querySelector("#mouse");
  
  const updateMousePosition = (e) => {
    mouse.style.top = e.clientY + 'px';
    mouse.style.left = e.clientX + 'px';
  };

  window.addEventListener('mousemove', updateMousePosition);

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition);
  });
});
</script>

<template>
    <Header />
    <div id="mouse">
    </div>
    <suspense>
      <RouterView />
    </suspense>
    <Footer />
</template>

<style scoped>
#mouse {
  position: fixed; /* Changé de 'absolute' à 'fixed' pour un positionnement global */
  top: 0; /* Initialisé à 0; il sera mis à jour par JavaScript */
  left: 0; /* Initialisé à 0; il sera mis à jour par JavaScript */
  width: 20px; /* Taille réduite pour l'exemple */
  height: 20px; /* Taille réduite pour l'exemple */
  border-radius: 50%;
  border: 2px solid rgb(200, 247, 211);
  transform: translate(-50%, -50%);
  pointer-events: none; /* Assurez-vous que le curseur ne gêne pas les clics */
  z-index: 999;
}
</style>
