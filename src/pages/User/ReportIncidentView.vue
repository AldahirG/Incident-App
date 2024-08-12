<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Navbar -->
      <AppNavbar :role="'User'" />
  
      <!-- Main Content -->
      <div class="flex-grow p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h1 class="text-2xl font-semibold mb-6">Reportar Incidencia</h1>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="titulo" class="block mb-2 text-sm font-medium text-gray-700">Título:</label>
              <input type="text" id="titulo" v-model="titulo" required class="w-full px-4 py-2 border rounded-lg focus:outline-none" />
            </div>
            <div class="mb-4">
              <label for="descripcion" class="block mb-2 text-sm font-medium text-gray-700">Descripción:</label>
              <textarea id="descripcion" v-model="descripcion" required class="w-full px-4 py-2 border rounded-lg focus:outline-none"></textarea>
            </div>
            <div class="mb-4">
              <label for="fecha" class="block mb-2 text-sm font-medium text-gray-700">Fecha:</label>
              <input type="date" id="fecha" v-model="fecha" required class="w-full px-4 py-2 border rounded-lg focus:outline-none" />
            </div>
            <div class="mb-4">
              <label for="foto" class="block mb-2 text-sm font-medium text-gray-700">Foto:</label>
              <input type="file" id="foto" @change="handleFileChange" class="w-full px-4 py-2 border rounded-lg focus:outline-none" />
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Enviar</button>
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
        titulo: '',
        descripcion: '',
        fecha: '',
        fto_base64: '',
      };
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.fto_base64 = e.target.result.split(',')[1];
          };
          reader.readAsDataURL(file);
        }
      },
      async submitForm() {
        const newItem = {
          titulo: this.titulo,
          fecha: this.fecha,
          descripcion: this.descripcion,
          fto_base64: this.fto_base64,
        };
  
        try {
          const response = await axios.post('https://omp7h5yonf.execute-api.us-east-1.amazonaws.com/Prod/create_incidence', newItem);
          alert('Incidencia reportada: ' + JSON.stringify(response.data));
          this.$router.push('/user-incidents');
        } catch (error) {
          alert('Error al reportar la incidencia. Inténtalo de nuevo.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles managed by Tailwind CSS */
  </style>
  