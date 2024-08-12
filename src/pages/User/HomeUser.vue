<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Navbar -->
      <AppNavbar :role="'User'" class="w-64 bg-white shadow-lg" />
  
      <!-- Contenido Principal -->
      <div class="flex-grow p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h1 class="text-2xl font-semibold mb-6">Bienvenido, {{ username }}</h1>
  
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Tarjeta 1: Reportar Incidencia -->
            <div class="bg-blue-500 text-white rounded-lg p-4">
              <h2 class="text-lg font-semibold mb-4">Reportar Incidencia</h2>
              <p class="text-sm mb-4">Informa de un problema o incidencia en tu área.</p>
              <router-link to="/report-incident" class="block bg-blue-700 text-center text-white py-2 rounded-md">
                Reportar
              </router-link>
            </div>
  
            <!-- Tarjeta 2: Incidencias Reportadas -->
            <div class="bg-green-500 text-white rounded-lg p-4">
              <h2 class="text-lg font-semibold mb-4">Mis Incidencias</h2>
              <p class="text-sm mb-4">Consulta el estado de las incidencias que has reportado.</p>
              <router-link to="/my-incidents" class="block bg-green-700 text-center text-white py-2 rounded-md">
                Ver Mis Incidencias
              </router-link>
            </div>
  
            <!-- Tarjeta 3: Perfil -->
            <div class="bg-yellow-500 text-white rounded-lg p-4">
              <h2 class="text-lg font-semibold mb-4">Mi Perfil</h2>
              <p class="text-sm mb-4">Gestiona tu información de perfil y configuración.</p>
              <router-link to="/profile" class="block bg-yellow-700 text-center text-white py-2 rounded-md">
                Editar Perfil
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/AppNavbar.vue';
  
  export default {
  
    components: {
      AppNavbar,
    },
    data() {
      return {
        username: 'Nombre de Usuario', // Este valor se puede obtener desde el estado global o API
      };
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales aquí */
  </style>
  