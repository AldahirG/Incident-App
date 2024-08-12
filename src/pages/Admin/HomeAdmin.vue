<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Navbar -->
      <AppNavbar :role="'Admin'" class="w-64 bg-white shadow-lg" />
  
      <!-- Contenido Principal -->
      <div class="flex-grow p-6">
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-white shadow-md rounded-lg p-4">
            <canvas id="doughnutChart"></canvas>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4">
            <canvas id="barChart"></canvas>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4">
            <canvas id="lineChart"></canvas>
          </div>
        </div>
  
        <div class="bg-white shadow-md rounded-lg p-6">
          <h1 class="text-2xl font-semibold mb-6">Incidencias Recientes</h1>
          <DataTable
            title="Ver Todos"
            :items="filteredItems"
            :headers="headers"
            @edit-item="editItem"
            @delete-item="deleteItem"
          />
          <button class="float-right mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" @click="goToAllIncidences">
            Ver todas las incidencias
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/AppNavbar.vue';
  import DataTable from '@/components/DataTable.vue';
  import {
    Chart,
    DoughnutController,
    BarController,
    LineController,
    ArcElement,
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  Chart.register(
    DoughnutController,
    BarController,
    LineController,
    ArcElement,
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  );
  
  export default {
    components: {
      AppNavbar,
      DataTable,
    },
    data() {
      return {
        items: [],
        headers: ['ID', 'Título', 'Fecha', 'Descripción', 'Status', 'Foto', 'Acciones'],
      };
    },
    mounted() {
      this.fetchItems();
      this.renderCharts();
    },
    methods: {
      async fetchItems() {
        // Lógica para obtener los datos de las incidencias
        this.items = [
          {
            reporte_id: 1,
            titulo: 'Fallo en proyector',
            fecha: '2024-08-10',
            descripcion: 'El proyector no enciende.',
            estatus: 2,
            fto_url: 'https://via.placeholder.com/150',
            actions: true,
          },
          {
            reporte_id: 2,
            titulo: 'Problema con aire acondicionado',
            fecha: '2024-08-10',
            descripcion: 'El aire acondicionado no enfría.',
            estatus: 1,
            fto_url: 'https://via.placeholder.com/150',
            actions: true,
          },
        ];
      },
      renderCharts() {
        const doughnutCtx = document.getElementById('doughnutChart')?.getContext('2d');
        const barCtx = document.getElementById('barChart')?.getContext('2d');
        const lineCtx = document.getElementById('lineChart')?.getContext('2d');
  
        if (doughnutCtx) {
          new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
              labels: ['Pendiente', 'En Progreso', 'Completado'],
              datasets: [
                {
                  label: 'Distribución de Incidencias',
                  data: [20, 40, 30],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            },
          });
        }
  
        if (barCtx) {
          new Chart(barCtx, {
            type: 'bar',
            data: {
              labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
              datasets: [
                {
                  label: 'Incidencias por Mes',
                  data: [12, 19, 3, 5, 2],
                  backgroundColor: '#4CAF50',
                },
              ],
            },
          });
        }
  
        if (lineCtx) {
          new Chart(lineCtx, {
            type: 'line',
            data: {
              labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
              datasets: [
                {
                  label: 'Incidencias Resueltas',
                  data: [3, 6, 8, 10],
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  fill: false,
                },
              ],
            },
          });
        }
      },
      editItem(item) {
        this.$router.push({ path: '/put', query: { reporte_id: item.reporte_id } });
      },
      deleteItem(id) {
        if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
          alert('Elemento eliminado correctamente.');
          this.fetchItems(); // Actualiza la lista después de eliminar
        }
      },
      goToAllIncidences() {
        this.$router.push('/admin-incidents');
      },
    },
    computed: {
      filteredItems() {
        return this.items.filter((item) => item.estatus === 2 || item.estatus === 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  canvas {
    max-height: 200px; /* Ajusta el tamaño de las gráficas */
  }
  
  .float-right {
    float: right;
  }
  
  .bg-gray-100 {
    background-color: #f7f7f7;
  }
  </style>
  