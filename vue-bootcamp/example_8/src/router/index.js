import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Pokemon from '../views/Pokemon.vue';
import Landing from '../views/Landing.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about/:id',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/pokemon',
		component: Pokemon,
		children: [
			{
				path: '',
				component: () => import('../components/PokeIndex.vue'),
			},
			{
				path: ':id',
				component: () => import('../components/PokemonTwo.vue'),
			},
		],
	},
	{
		path: '/landing',
		component: Landing,
		children: [
			{ path: '', component: () => import('../views/HomePage.vue') },
			{ path: 'about', component: () => import('../views/About.vue') },
			{
				path: 'services',
				component: () => import('../views/Services.vue'),
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
