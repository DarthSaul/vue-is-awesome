import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/transactions',
		name: 'Transactions',
		component: () => import('../views/transactions/Index.vue'),
	},
	{
		path: '/transactions/create',
		name: 'Create',
		component: () => import('../views/transactions/Create.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
