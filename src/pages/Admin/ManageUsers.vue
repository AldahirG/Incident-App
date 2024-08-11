<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Navbar -->
      <AppNavbar :role="'Admin'" class="w-64 bg-blue-900 text-white shadow-lg" />
  
      <!-- Contenido Principal -->
      <div class="flex-grow p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-semibold text-gray-800">Gestión de Usuarios</h1>
            <button @click="goToCreateUser" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Agregar Usuario
            </button>
          </div>
  
          <DataTable
            title="Lista de Usuarios"
            :items="users"
            :headers="headers"
            @edit-item="editUser"
            @delete-item="deleteUser"
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
        users: [],
        headers: ['ID', 'Nombre', 'Email', 'Rol', 'Acciones'],
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('https://api.example.com/users');
          this.users = response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
      editUser(user) {
        this.$router.push({ path: '/edit-user', query: { userId: user.id } });
      },
      async deleteUser(id) {
        if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
          try {
            await axios.delete(`https://api.example.com/users/${id}`);
            this.fetchUsers();
            alert('Usuario eliminado correctamente.');
          } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error al eliminar el usuario.');
          }
        }
      },
      goToCreateUser() {
        this.$router.push('/create-user');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos consistentes con el resto de la aplicación */
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
  