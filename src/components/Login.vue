<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sección izquierda -->
      <div class="flex flex-col justify-center w-1/2 p-8 bg-white">
        <div class="max-w-md mx-auto">
          <div class="mb-8">
            <h3 class="text-sm text-gray-500">Sistema de Gestión de Incidencias</h3>
          </div>
          <div class="mb-8">
            <img src="https://picsum.photos/600/300" alt="Chart" class="rounded-lg" />
          </div>
          <div>
           
            <p class="mt-4 text-sm text-center text-gray-500">Comunícate al Numero de gestión en breve:</p>
          </div>
          <div class="mt-12 text-center">
            <h2 class="text-2xl text-blue-500 font-semibold">Welcome back!</h2>
            <p class="text-gray-500">Start managing your finance faster and better</p>
          </div>
          <div class="mt-4 flex justify-center space-x-2">
            <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
      
      <!-- Sección derecha (Formulario) -->
      <div class="flex flex-col justify-center w-1/2 p-8 bg-gray-100">
        <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 class="mb-4 text-3xl text-blue-500 font-semibold text-center">Welcome back!</h2>
          <p class="mb-8 text-sm text-center text-gray-500">Start managing your finance faster and better</p>
  
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="username" class="block mb-2 text-sm font-medium text-gray-600">Usuario:</label>
              <div class="relative">
                <input type="text" id="username" v-model="username" required
                  class="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <!-- Ícono de usuario -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z" />
                  </svg>
                </span>
              </div>
            </div>
  
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Contraseña:</label>
              <div class="relative">
                <input type="password" id="password" v-model="password" required
                  class="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <!-- Ícono de candado -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5v14" />
                  </svg>
                </span>
              </div>
            </div>
  
            <div class="mb-4 text-right">
              <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
  
            <button type="submit"
              class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Login
            </button>
          </form>
  
          <div class="my-6 text-center">
            <span class="text-gray-400">or</span>
          </div>
  
          <div class="flex justify-between">
            <button class="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-gray-600 border rounded-lg hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.35 11.1h-9.68v2.99h5.59c-0.23 1.21-1.29 3.52-3.77 3.52-2.27 0-4.15-1.88-4.15-4.15s1.88-4.15 4.15-4.15c1.3 0 2.44 0.53 3.26 1.38l2.24-2.24c-1.55-1.44-3.58-2.34-5.84-2.34-4.84 0-8.76 3.92-8.76 8.76s3.92 8.76 8.76 8.76c4.22 0 7.81-2.99 8.48-7.15v-1.6z" />
              </svg>
              Google
            </button>
            <button class="flex items-center justify-center w-full px-4 py-2 ml-2 text-sm font-semibold text-gray-600 border rounded-lg hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 0h-23c-0.275 0-0.5 0.225-0.5 0.5v23c0 0.275 0.225 0.5 0.5 0.5h23c0.275 0 0.5-0.225 0.5-0.5v-23c0-0.275-0.225-0.5-0.5-0.5zm-13.5 23h-4v-9h4v9zm-2-10.25c-1.104 0-2-0.896-2-2s0.896-2 2-2 2 0.896 2 2-0.896 2-2 2zm12 10.25h-4v-4.5c0-1.105-0.895-2-2-2s-2 0.895-2 2v4.5h-4v-9h4v1.21c1.115-1.558 3.182-2.343 5.25-1.875 2.166 0.491 3.75 2.393 3.75 4.615v5.05zm-10.5-15.75h-3.5v3.5h-2v-3.5h-2v-2h2v-3.5h2v3.5h3.5v2z" />
              </svg>
              Facebook
            </button>
          </div>
  
          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
              Don’t you have an account? <a href="#" class="text-blue-600 hover:underline">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('https://omp7h5yonf.execute-api.us-east-1.amazonaws.com/Prod/login', {
            username: this.username,
            password: this.password,
          });
  
          const { id_token, access_token, refresh_token, role } = response.data;
  
          // Almacena los tokens en el almacenamiento local
          localStorage.setItem('id_token', id_token);
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);
          localStorage.setItem('role', role);
  
          // Redirige a la página principal o protegida
          this.$router.push('/get-all');
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          alert('Nombre de usuario o contraseña incorrectos.');
        }
      },
      goToRegisterUser() {
        // Redirige a la página de registro
        this.$router.push('/post_user');
      },
      goToActivateUser() {
        // Redirige a la página de registro
        this.$router.push('/activate_user');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ya se han utilizado estilos Tailwind CSS en el template, así que no es necesario añadir más estilos aquí. */
  </style>
  