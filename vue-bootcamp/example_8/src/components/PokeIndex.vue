<template>
	<div>
		<h1>Pokedex</h1>
		<p v-if="loading" class="mt-5">Loading...</p>
		<ul v-else class="mt-5">
			<li v-for="(item, ind) in pokemon" :key="ind">
				<Pokemon :pokeData="item" />
			</li>
		</ul>
	</div>
</template>

<script>
import Pokemon from './Pokemon.vue';

export default {
	components: {
		Pokemon,
	},
	mounted() {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
			.then((res) => res.json())
			.then((json) => {
				setTimeout(() => {
					this.pokemon = json.results;
					this.loading = false;
				}, 1000);
			});
	},
	data() {
		return {
			loading: true,
			pokemon: null,
		};
	},
};
</script>

<style scoped>
ul {
	text-align: left;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
li {
	margin: 0.25em;
	text-align: center;
}
</style>
