<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
    <div class="overflow-x-auto">
      <table v-if="items.length" class="min-w-full bg-white shadow-md rounded-lg">
        <thead class="bg-gray-500 text-white">
          <tr>
            <th v-for="header in headers" :key="header" class="py-3 px-4 text-left">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id" class="border-b text-gray-700">
            <td v-for="(value, key) in item" :key="key" class="py-3 px-4">
              <template v-if="key === 'actions'">
                <!-- Botones de Aprobar y Rechazar, visibles solo para el Admin -->
                <template v-if="role === 'Admin'">
                  <button @click="approveItem(item.id)" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    Aprobar
                  </button>
                  <button @click="rejectItem(item.id)" class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                    Rechazar
                  </button>
                </template>
                <!-- Botones de Actualizar y Eliminar -->
                <button @click="editItem(item)" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Actualizar
                </button>
                <button @click="deleteItem(item.id)" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Eliminar
                </button>
              </template>
              <template v-else-if="key === 'fto_url'">
                <img :src="value" alt="Foto" class="w-24 h-auto rounded-md" />
              </template>
              <template v-else-if="key === 'estatus'">
                <span :class="statusClass(value)">
                  {{ formatEstatus(value) }}
                </span>
              </template>
              <template v-else>
                {{ value }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    role: {  // Añade una prop para el rol del usuario
      type: String,
      required: true,
    },
  },
  methods: {
    editItem(item) {
      this.$emit('edit-item', item);
    },
    deleteItem(id) {
      this.$emit('delete-item', id);
    },
    approveItem(id) {
      this.$emit('approve-item', id);
    },
    rejectItem(id) {
      this.$emit('reject-item', id);
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
/* Ya se han utilizado estilos Tailwind CSS en el template, así que no es necesario añadir más estilos aquí. */
</style>
