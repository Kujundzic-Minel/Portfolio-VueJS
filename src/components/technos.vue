<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex flex-col items-center py-12 bg-[#272727] rounded-lg shadow-lg">
      <div v-if="technos.length === 0" class="text-xl md:text-2xl lg:text-3xl font-medium text-white">
        Aucune techno spécifiée
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        <div
          v-for="techno in technos"
          :key="techno.id"
          class="flex flex-col items-center p-6 bg-[#383838] hover:bg-[#474747] transition duration-300 rounded-lg shadow-md"
        >
          <img :src="techno.icon_techno" alt="Logo" class="w-20 h-20 object-cover rounded-full mb-4" />
          <span class="text-xl md:text-2xl lg:text-3xl font-medium text-white">{{ techno.nom_techno }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/lib/supabaseClient.js'
  
  const props = defineProps({
    id: {
      type: Number,
      required: true
    }
  })
  
  const technos = ref([])
  
  onMounted(async () => {
    try {
      const { data: technosProjects } = await supabase
        .from('technos_projects')
        .select('id_techno')
        .eq('id_project', props.id)
  
      if (technosProjects.length > 0) {
        const ids = technosProjects.map((tp) => tp.id_techno)
        const { data: technosData } = await supabase
          .from('technos')
          .select('*')
          .in('id', ids)
        technos.value = technosData
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error)
    }
  })
  </script>