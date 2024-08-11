<template>
  <nav class="flex flex-col h-screen bg-blue-900 text-white w-1/5">
    <div class="flex items-center justify-center h-20 bg-blue-800">
      <!-- Logo -->
      <img src="https://via.placeholder.com/100x40?text=Logo" alt="Logo" class="h-8" />
    </div>
    <div class="flex-grow mt-6">
      <ul class="space-y-4">
        <!-- Navigation Links -->
        <li 
          v-if="role === 'Admin'" 
          class="px-4 py-2 hover:bg-blue-800 rounded-md"
          :class="{ 'bg-blue-700': isActive('/admin') }"
        >
          <router-link to="/admin" class="flex items-center">
            <i class="fas fa-clipboard-check mr-3"></i>
            <span>Dashboard</span>
          </router-link>
        </li>

        <li 
          v-if="role === 'Admin'" 
          class="px-4 py-2 hover:bg-blue-800 rounded-md"
          :class="{ 'bg-blue-700': isActive('/manage-users') }"
        >
          <router-link to="/manage-users" class="flex items-center">
            <i class="fas fa-user-cog mr-3"></i>
            <span>Gestionar Usuarios</span>
          </router-link>
        </li>

        <li 
          v-if="role === 'Admin'" 
          class="px-4 py-2 hover:bg-blue-800 rounded-md"
          :class="{ 'bg-blue-700': isActive('/admin-incidents') }"
        >
          <router-link to="/admin-incidents" class="flex items-center">
            <i class="fas fa-exclamation-circle mr-3"></i>
            <span>Gestión de Incidencias</span>
          </router-link>
        </li>


        <li 
          v-if="role === 'Physical'" 
          class="px-4 py-2 hover:bg-blue-800 rounded-md"
          :class="{ 'bg-blue-700': isActive('/physical') }"
        >
          <router-link to="/physical" class="flex items-center">
            <i class="fas fa-hard-hat mr-3"></i>
            <span>Dashboard</span>
          </router-link>
        </li>

        <li 
          v-if="role === 'Physical'" 
          class="px-4 py-2 hover:bg-blue-800 rounded-md"
          :class="{ 'bg-blue-700': isActive('/pto-liability') }"
        >
          <router-link to="/pto-liability" class="flex items-center">
            <i class="fas fa-tasks mr-3"></i>
            <span>Todas las Incidencias</span>
          </router-link>
        </li>

        <!-- Otros elementos -->
        <li 
          v-if="role === 'Physical'" 
          class="px-4 py-2 hover:bg-blue-800 rounded-md"
          :class="{ 'bg-blue-700': isActive('/reports') }"
        >
          <router-link to="/reports" class="flex items-center">
            <i class="fas fa-file-alt mr-3"></i>
            <span>Reportes</span>
          </router-link>
        </li>

        <li 
          v-if="role === 'Physical'" 
          class="px-4 py-2 hover:bg-blue-800 rounded-md"
          :class="{ 'bg-blue-700': isActive('/support') }"
        >
          <router-link to="/support" class="flex items-center">
            <i class="fas fa-life-ring mr-3"></i>
            <span>Soporte</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- Botón de Cerrar Sesión -->
    <div class="flex items-center justify-center h-20 bg-blue-800">
      <button @click="logout" class="flex items-center justify-center w-full text-center text-white hover:bg-blue-700 px-4 py-2 rounded-md">
        <i class="fas fa-sign-out-alt mr-3"></i>
        <span>Cerrar Sesión</span>
      </button>
    </div>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  setup() {
    const route = useRoute();

    // Función para determinar si la ruta actual coincide con el link
    const isActive = (path) => {
      return route.path === path;
    };

    return {
      isActive,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('id_token');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('role');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Ajustes adicionales */
nav {
  width: 16%; /* Ajustar ancho de la barra de navegación */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  transition: background-color 0.3s ease;
}

li:hover {
  background-color: #42b883; /* Color de fondo al pasar el cursor */
}

.bg-blue-700 {
  background-color: #317b5a; /* Color de fondo cuando está activo */
}

.bg-blue-800 {
  background-color: #273646; /* Fondo de los botones y navbar */
}

.bg-blue-900 {
  background-color: #35495E; /* Fondo del navbar */
}

button:hover {
  background-color: #bd0903; /* Fondo al pasar el cursor sobre el botón de cerrar sesión */
}
</style>
