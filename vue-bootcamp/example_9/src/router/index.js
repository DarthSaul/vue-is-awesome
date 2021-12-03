import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/state',
		name: 'State',
		component: () => import('../views/StateManagement.vue'),
		children: [],
	},
	{
		path: '/advanced',
		name: 'Advanced',
		component: () => import('../views/Advanced.vue'),
		children: [],
	},
	{
		path: '/transitions',
		name: 'Transitions',
		component: () => import('../views/Transitions.vue'),
		children: [],
	},
	{
		path: '/filters',
		name: 'Filters',
		component: () => import('../views/Filters.vue'),
		children: [],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
