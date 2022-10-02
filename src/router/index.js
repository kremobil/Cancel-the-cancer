import { createRouter, createWebHistory } from 'vue-router';
import HomeViev from '../components/HomeViev.vue';
import TryViev from '../components/TryViev.vue';

const routes = [
  { path: '/', component: HomeViev },
  { path: '/try', component: TryViev },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
