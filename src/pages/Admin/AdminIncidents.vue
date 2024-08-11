<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Navbar -->
      <AppNavbar :role="'Admin'" class="w-64 bg-blue-900 text-white shadow-lg" />
  
      <!-- Contenido Principal -->
      <div class="flex-grow p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h1 class="text-2xl font-semibold text-gray-800 mb-4">Todas las Incidencias</h1>
          
          <DataTable
            :items="incidents"
            :headers="headers"
            @approve-item="approveIncident"
            @reject-item="rejectIncident"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/AppNavbar.vue';
  import DataTable from '@/components/DataTable.vue';
  import axios from 'axios';
  
  export default {
    
    components: {
      AppNavbar,
      DataTable,
    },
    data() {
      return {
        incidents: [],
        headers: ['ID', 'Título', 'Fecha', 'Descripción', 'Status', 'Foto', 'Acciones'],
      };
    },
    created() {
      this.fetchIncidents();
    },
    methods: {
      async fetchIncidents() {
        try {
          const response = await axios.get('https://api.example.com/incidents');
          this.incidents = response.data;
        } catch (error) {
          console.error('Error fetching incidents:', error);
        }
      },
      async approveIncident(incidentId) {
        if (confirm('¿Estás seguro de que deseas aprobar esta incidencia?')) {
          try {
            await axios.put(`https://api.example.com/incidents/${incidentId}/approve`);
            this.fetchIncidents();
            alert('Incidencia aprobada correctamente.');
          } catch (error) {
            console.error('Error al aprobar la incidencia:', error);
            alert('Error al aprobar la incidencia.');
          }
        }
      },
      async rejectIncident(incidentId) {
        if (confirm('¿Estás seguro de que deseas rechazar esta incidencia?')) {
          try {
            await axios.put(`https://api.example.com/incidents/${incidentId}/reject`);
            this.fetchIncidents();
            alert('Incidencia rechazada correctamente.');
          } catch (error) {
            console.error('Error al rechazar la incidencia:', error);
            alert('Error al rechazar la incidencia.');
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajustes adicionales */
  .flex-grow {
    padding: 1.5rem;
  }
  
  .bg-white {
    background-color: #ffffff;
  }
  
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  button {
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #317b5a; /* Color al pasar el cursor */
  }
  </style>
  