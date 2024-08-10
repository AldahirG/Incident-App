import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../components/Login.vue';
import HomePhysical from '../pages/Physical/HomePhysical.vue';

const routes = [
 
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login,
  // },
  {
    path: '/',
    name: 'HomePhysical',
    component: HomePhysical,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
