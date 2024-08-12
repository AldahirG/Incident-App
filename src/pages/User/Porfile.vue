<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Navbar -->
      <AppNavbar :role="'User'" />
  
      <!-- Main Content -->
      <div class="flex-grow p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h1 class="text-2xl font-semibold mb-6">Mi Perfil</h1>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="nombre" class="block mb-2 text-sm font-medium text-gray-700">Nombre:</label>
              <input type="text" id="nombre" v-model="nombre" required class="w-full px-4 py-2 border rounded-lg focus:outline-none" />
            </div>
            <div class="mb-4">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Correo Electrónico:</label>
              <input type="email" id="email" v-model="email" required class="w-full px-4 py-2 border rounded-lg focus:outline-none" />
            </div>
            <div class="mb-4">
              <label for="telefono" class="block mb-2 text-sm font-medium text-gray-700">Teléfono:</label>
              <input type="text" id="telefono" v-model="telefono" required class="w-full px-4 py-2 border rounded-lg focus:outline-none" />
            </div>
            <div class="mb-4">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Nueva Contraseña:</label>
              <input type="password" id="password" v-model="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none" />
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Guardar Cambios</button>
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
        nombre: '',
        email: '',
        telefono: '',
        password: '',
      };
    },
    created() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
        try {
          // Replace with actual API call to fetch user data
          const response = await axios.get('https://api.example.com/user/profile');
          const userData = response.data;
          this.nombre = userData.nombre;
          this.email = userData.email;
          this.telefono = userData.telefono;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      },
      async submitForm() {
        try {
          const updatedUser = {
            nombre: this.nombre,
            email: this.email,
            telefono: this.telefono,
            password: this.password,
          };
  
          // Replace with actual API call to update user profile
          await axios.put('https://api.example.com/user/profile', updatedUser);
  
          alert('Perfil actualizado correctamente.');
        } catch (error) {
          console.error('Error updating profile:', error);
          alert('Error al actualizar el perfil. Inténtalo de nuevo.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles managed by Tailwind CSS */
  </style>
  