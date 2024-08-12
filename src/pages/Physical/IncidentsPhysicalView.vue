<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Navbar -->
      <AppNavbar :role="'Physical'" />
  
      <!-- Main Content -->
      <div class="flex-grow p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h1 class="text-2xl font-semibold mb-6">Todas las Incidencias</h1>
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
                    <button @click="openModal(incidencia)" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Actualizar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <p class="text-gray-500">No hay incidencias disponibles.</p>
          </div>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-1/3">
          <h2 class="text-xl font-semibold mb-4">Actualizar Incidencia</h2>
          <form @submit.prevent="updateIncident">
            <div class="mb-4">
              <label for="titulo" class="block text-sm font-medium text-gray-600">Título:</label>
              <input type="text" id="titulo" v-model="selectedIncident.titulo" required
                class="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
  
            <div class="mb-4">
              <label for="descripcion" class="block text-sm font-medium text-gray-600">Descripción:</label>
              <textarea id="descripcion" v-model="selectedIncident.descripcion" required
                class="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
  
            <div class="mb-4">
              <label for="estatus" class="block text-sm font-medium text-gray-600">Estatus:</label>
              <select id="estatus" v-model="selectedIncident.estatus" required
                class="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="1">Pendiente</option>
                <option value="2">En Progreso</option>
                <option value="3">Completado</option>
              </select>
            </div>
  
            <div class="flex justify-end">
              <button type="button" @click="closeModal" class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2">
                Cancelar
              </button>
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Guardar
              </button>
            </div>
          </form>
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
        isModalOpen: false,
        selectedIncident: null,
      };
    },
    created() {
      this.fetchIncidencias();
    },
    methods: {
      async fetchIncidencias() {
        try {
          // Replace with actual API call to fetch all incidents
          const response = await axios.get('https://api.example.com/incidents');
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
      openModal(incidencia) {
        this.selectedIncident = { ...incidencia };
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.selectedIncident = null;
      },
      async updateIncident() {
        try {
          // Replace with actual API call to update incident
          await axios.put(`https://api.example.com/incidents/${this.selectedIncident.id}`, this.selectedIncident);
          this.closeModal();
          this.fetchIncidencias();
          alert('Incidencia actualizada correctamente.');
        } catch (error) {
          console.error('Error updating incident:', error);
          alert('Error al actualizar la incidencia. Inténtalo de nuevo.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles managed by Tailwind CSS */
  </style>
  