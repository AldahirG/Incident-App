// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePhysical from '@/pages/Physical/HomePhysical.vue';
import Login from '@/components/Login.vue';
import ActivateUser from '@/layout/ActivateUser.vue'
import CreateUser from '@/layout/CreateUser.vue'
import HomeAdmin from '@/pages/Admin/HomeAdmin.vue'
import ManageUsers from '@/pages/Admin/ManageUsers.vue'
import AdminIncidents from '@/pages/Admin/AdminIncidents.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/physical',
    name: 'HomePhysical',
    component: HomePhysical,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/activate-user',
    name: 'ActivateUser',
    component: ActivateUser,
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: CreateUser,
  },
  {
    path: '/admin',
    name: 'HomeAdmin',
    component: HomeAdmin,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/manage-users',
    name: 'ManageUsers',
    component: ManageUsers,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin-incidents',
    name: 'AdminIncidents',
    component: AdminIncidents,
    meta: {
      requiresAuth: true,
    },
  },

  // Otras rutas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = !!localStorage.getItem('id_token');
//   if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;
