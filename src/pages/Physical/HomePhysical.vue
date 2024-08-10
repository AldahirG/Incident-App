<template>
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-semibold mb-4">Ver Todos</h2>
  
      <table v-if="filteredItems.length" class="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-500">
          <tr>
            <th class="py-2 px-4 text-left">ID</th>
            <th class="py-2 px-4 text-left">Título</th>
            <th class="py-2 px-4 text-left">Fecha</th>
            <th class="py-2 px-4 text-left">Descripción</th>
            <th class="py-2 px-4 text-left">Status</th>
            <th class="py-2 px-4 text-left">Foto</th>
            <th class="py-2 px-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="item in filteredItems" :key="item.reporte_id" class="border-b text-black ">
            <td class="py-2 px-4">{{ item.reporte_id }}</td>
            <td class="py-2 px-4">{{ item.titulo }}</td>
            <td class="py-2 px-4">{{ item.fecha }}</td>
            <td class="py-2 px-4">{{ item.descripcion }}</td>
            <td class="py-2 px-4">
              <span :class="statusClass(item.estatus)">
                {{ formatEstatus(item.estatus) }}
              </span>
            </td>
            <td class="py-2 px-4">
              <img :src="item.fto_url" alt="Foto" class="w-24 h-auto rounded-md" />
            </td>
            <td class="py-2 px-4">
              <button @click="editItem(item.reporte_id)" class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                Actualizar
              </button>
              <button @click="deleteItem(item.reporte_id)" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <p v-else class="text-center text-gray-500">Cargando datos...</p>
    </div>
  </template>
  
  <script>
  // Importa axios si deseas hacer solicitudes HTTP
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: [], // Inicializar como un array vacío
      };
    },
    created() {
      this.fetchItems();
    },
    computed: {
      filteredItems() {
        // Filtra los elementos que tienen estatus 'En Progreso' (valor 2)
        return this.items.filter(item => item.estatus === 2);
      }
    },
    methods: {
      async fetchItems() {
        // const token = localStorage.getItem('idToken'); // Descomenta para obtener el token de localStorage
        try {
          // const response = await axios.get('https://omp7h5yonf.execute-api.us-east-1.amazonaws.com/Prod/read_all_incidence', {
          //   headers: {
          //     'Authorization': `Bearer ${token}`, // Incluye el token en la cabecera de autorización
          //   },
          // });
  
          // this.items = response.data; // Asume que la respuesta es un array de elementos
  
          // Como bypass, puedes simular datos para ver la estructura de la vista
          this.items = [
            {
              reporte_id: 1,
              titulo: 'Fallo en proyector',
              fecha: '2024-08-10',
              descripcion: 'El proyector no enciende.',
              estatus: 2,
              fto_url: 'https://via.placeholder.com/150',
            },
            {
              reporte_id: 2,
              titulo: 'Problema con aire acondicionado',
              fecha: '2024-08-10',
              descripcion: 'El aire acondicionado no enfría.',
              estatus: 1,
              fto_url: 'https://via.placeholder.com/150',
            },
          ];
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      editItem(reporte_id) {
        this.$router.push({ path: '/put', query: { reporte_id } });
      },
      async deleteItem(id) {
        if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
          // const token = localStorage.getItem('idToken'); // Incluye el token en la cabecera de autorización
          try {
            // await axios.delete(`https://omp7h5yonf.execute-api.us-east-1.amazonaws.com/Prod/delete_incidence/${id}`, {
            //   headers: {
            //     'Authorization': `Bearer ${token}`,
            //   },
            // });
            alert('Elemento eliminado correctamente.');
            this.fetchItems(); // Actualiza la lista después de eliminar
          } catch (error) {
            console.error('Error al eliminar el elemento:', error);
            alert('Error al eliminar el elemento.');
          }
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
      }
    },
  };
  </script>
  
  <style scoped>
  /* Los estilos se han manejado principalmente con Tailwind CSS dentro del template */
  </style>
  