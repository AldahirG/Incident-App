<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Navbar -->
    <AppNavbar :role="'Physical'" class="w-64 bg-white shadow-lg" />

    <!-- Contenido Principal -->
    <div class="flex-grow p-6">
      <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 class="text-2xl font-semibold mb-6">Dashboard</h1>
        
        <!-- Contenedor para la tabla y el botón -->
        <div class="flex justify-between items-center mb-4">
          <DataTable
            title="Incidencias del día"
            :items="filteredItems"
            :headers="headers"
            @edit-item="editItem"
            @delete-item="deleteItem"
          />
          
        </div>
        <div class="flex justify-end">
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none" @click="fetchItems">
            Ver todas las incidencias
          </button>
        </div>
        
      </div>

      <!-- Gráficas -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white shadow-md rounded-lg p-4">
          <canvas id="chart1"></canvas>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4">
          <canvas id="chart2"></canvas>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4">
          <canvas id="chart3"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import DataTable from '@/components/DataTable.vue';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

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
  created() {
    this.fetchItems();
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.estatus === 2);
    }
  },
  methods: {
    async fetchItems() {
      try {
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
            titulo: 'Fallo en impresora',
            fecha: '2024-08-10',
            descripcion: 'La impresora no imprime.',
            estatus: 2,
            fto_url: 'https://via.placeholder.com/150',
            actions: true,
          }
        ];
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    editItem(item) {
      this.$router.push({ path: '/put', query: { reporte_id: item.reporte_id } });
    },
    deleteItem(id) {
      if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
        try {
          alert('Elemento eliminado correctamente.');
          this.fetchItems(); // Actualiza la lista después de eliminar
        } catch (error) {
          console.error('Error al eliminar el elemento:', error);
          alert('Error al eliminar el elemento.');
        }
      }
    },
    renderChart() {
      Chart.register(...registerables);

      // Gráfico 1 - Doughnut Chart
      new Chart(document.getElementById('chart1'), {
        type: 'doughnut',
        data: {
          labels: ['Pendientes', 'En Progreso', 'Completadas'],
          datasets: [{
            data: [5, 10, 15],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });

      // Gráfico 2 - Bar Chart
      new Chart(document.getElementById('chart2'), {
        type: 'bar',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
          datasets: [{
            label: 'Incidencias por mes',
            data: [10, 15, 20, 25],
            backgroundColor: '#42A5F5',
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });

      // Gráfico 3 - Line Chart
      new Chart(document.getElementById('chart3'), {
        type: 'line',
        data: {
          labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
          datasets: [{
            label: 'Incidencias resueltas',
            data: [5, 10, 3, 8],
            borderColor: '#66BB6A',
            fill: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
    }
  },
  mounted() {
    this.renderChart();
  },
};
</script>

<style scoped>
/* Estilos globales para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  margin-bottom: 20px;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eaeaea;
}

th {
  background-color: #f7f7f7;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  color: #555;
}

tr:hover {
  background-color: #f1f1f1;
}

button {
  background-color: #1a73e8;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0c59cf;
}
</style>
