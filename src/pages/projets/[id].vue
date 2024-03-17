<template>
    <div class="container mx-auto my-8 p-4">
      <!-- Conteneur pour l'image et les détails du projet -->
      <div class="flex flex-col lg:flex-row">
        <!-- Conteneur pour l'image -->
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <img
            class="w-full h-auto rounded-lg shadow-lg object-cover"
            :src="projectDetails.project_image"
            :alt="projectDetails.project_name"
            style="max-width: 500px; max-height: 500px;"
          />
        </div>
        <!-- Conteneur pour les informations -->
        <div class="lg:w-1/2 lg:pl-8">
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            {{ projectDetails.project_name }}
          </h1>
          <div class="text-lg font-light text-gray-300 mb-6 whitespace-pre-line">
            {{ projectDetails.project_info }}
          </div>
          <a
            v-if="projectDetails.project_link"
            :href="projectDetails.project_link"
            class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-colors duration-300"
            target="_blank"
          >
            Voir le projet
            <svg
              class="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 4v6a2 2 0 002 2h6m2-2a2 2 0 00-2-2h-6a2 2 0 01-2-2V4a2 2 0 012-2h6a2 2 0 012 2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { supabase } from '@/lib/supabaseClient.js';
  
  const route = useRoute();
  const projectId = route.params.id;
  const projectDetails = ref({});
  
  onMounted(async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', projectId)
      .single();
    projectDetails.value = data;
  });
  </script>
  
  <style scoped>
  /* Aucun style supplémentaire requis */
  </style>