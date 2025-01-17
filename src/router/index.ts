import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/pokemon',
    children: [
      {
        path: 'pokemon',
        name: 'Pokemon',
        component: Home,
      },
      {
        path: '/pokemon/:id/:name',
        name: 'PokemonDetails',
        component: () => import('../views/PokemonDetails.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
