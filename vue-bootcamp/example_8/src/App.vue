<template>
	<div id="app" class="bg-blue-200">
		<!-- <p v-if="loading">Loading...</p> -->
		<!-- <PokeIndex v-else :pokemon="pokemon" /> -->
		<!-- <LifecycleEvents /> -->
		<Router />
	</div>
</template>

<script>
// import PokeIndex from './components/PokeIndex.vue';
// import LifecycleEvents from './components/LifecycleEvents.vue';
import Router from './components/Router.vue';

export default {
	name: 'App',
	components: {
		// PokeIndex,
		// LifecycleEvents,
		Router,
	},
	// beforeCreate() {
	// 	console.log('Before create...');
	// },
	// created() {
	// 	console.log('Vue instance created.');
	// },
	// beforeMount() {
	// 	console.log('Before mount...');
	// },
	mounted() {
		// fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		setTimeout(() => {
		// 			this.pokemon = json.results;
		// 			this.loading = false;
		// 		}, 1000);
		// 	});
	},
	data() {
		return {
			// loading: true,
			// pokemon: null,
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100vh;
	/* margin-top: 60px; */
}
</style>
