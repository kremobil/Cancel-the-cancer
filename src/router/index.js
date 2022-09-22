import { createRouter, createWebHistory } from 'vue-router';
import HomeViev from '../components/HomeViev.vue';

const routes = [{ path: '/', component: HomeViev }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
