import { createRouter, createWebHistory } from 'vue-router';
import HomeViev from '../components/HomeViev.vue';
// import TryViev from '../components/TryViev.vue';
import WorkInProgressView from "@/components/WorkInProgressView.vue";
import AboutView from '../components/AboutView.vue';

const routes = [
	{ path: '/', component: HomeViev },
	{ path: '/try', component: WorkInProgressView },
	{ path: '/about', component: AboutView },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
