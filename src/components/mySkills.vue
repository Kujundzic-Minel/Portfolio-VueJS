<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const technos = ref([])

onMounted(async () => {
  try {
    const { data: technosData } = await supabase
      .from('technos')
      .select('*')

    technos.value = technosData
  } catch (error) {
    console.error('Erreur lors de la récupération des technologies :', error)
  }
})
</script>

<template>
  <main class="w-full flex flex-col items-center">
    <div v-if="technos.length === 0" class="mt-8">
      Aucune techno spécifiée
    </div>
    <div v-else class="flex flex-wrap justify-center mt-8">
      <div
        v-for="techno in technos"
        :key="techno.id"
        class="m-4 mx-6 sm:mx-14"
      >
        <img :src="techno.icon_techno" alt="Logo de la technologie" class="w-24 sm:w-36 object-cover" />
      </div>
    </div>
    <div v-if="technos.length > 0" class="w-full flex justify-center pb-7">
      <!-- Vous pouvez ajouter d'autres éléments ici si nécessaire -->
    </div>
  </main>
</template>
