<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Navbar -->
      <AppNavbar :role="'User'" />
  
      <!-- Main Content -->
      <div class="flex-grow p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h1 class="text-2xl font-semibold mb-6">Mis Incidencias</h1>
          <button 
            class="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            @click="goToReportIncident">
            Reportar Nueva Incidencia
          </button>
          <div v-if="incidencias.length" class="overflow-x-auto">
            <table class="min-w-full bg-white shadow-md rounded-lg">
              <thead class="bg-gray-500 text-white">
                <tr>
                  <th class="py-3 px-4 text-left">ID</th>
                  <th class="py-3 px-4 text-left">Título</th>
                  <th class="py-3 px-4 text-left">Fecha</th>
                  <th class="py-3 px-4 text-left">Descripción</th>
                  <th class="py-3 px-4 text-left">Estatus</th>
                  <th class="py-3 px-4 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="incidencia in incidencias" :key="incidencia.id" class="border-b text-gray-700">
                  <td class="py-3 px-4">{{ incidencia.id }}</td>
                  <td class="py-3 px-4">{{ incidencia.titulo }}</td>
                  <td class="py-3 px-4">{{ incidencia.fecha }}</td>
                  <td class="py-3 px-4">{{ incidencia.descripcion }}</td>
                  <td class="py-3 px-4">
                    <span :class="statusClass(incidencia.estatus)">
                      {{ formatEstatus(incidencia.estatus) }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <button @click="viewIncident(incidencia)" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Ver
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <p class="text-gray-500">No tienes incidencias reportadas.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import AppNavbar from '@/components/AppNavbar.vue';
  
  export default {
    components: {
      AppNavbar,
    },
    data() {
      return {
        incidencias: [],
      };
    },
    created() {
      this.fetchIncidencias();
    },
    methods: {
      async fetchIncidencias() {
        try {
          // Replace with actual API call to fetch user's incidents
          const response = await axios.get('https://api.example.com/user/incidents');
          this.incidencias = response.data;
        } catch (error) {
          console.error('Error fetching incidents:', error);
        }
      },
      formatEstatus(estatus) {
        switch (estatus) {
          case 1:
            return 'Pendiente';
          case 2:
            return 'En Progreso';
          case 3:
            return 'Completado';
          default:
            return 'Desconocido';
        }
      },
      statusClass(estatus) {
        switch (estatus) {
          case 1:
            return 'text-yellow-500';
          case 2:
            return 'text-blue-500';
          case 3:
            return 'text-green-500';
          default:
            return 'text-gray-500';
        }
      },
      goToReportIncident() {
        this.$router.push('/report-incident');
      },
      viewIncident(incidencia) {
        this.$router.push({ path: '/incident-details', query: { id: incidencia.id } });
      }
    },
  };
  </script>
  
  <style scoped>
  /* Styles managed by Tailwind CSS */
  </style>
  