<template>
	<div class="flex flex-col justify-center mt-10" v-if="pokemon">
		<p>{{ name }}</p>
		<img
			:src="pokemon.sprites.front_default"
			alt="#"
			class="h-30 w-30 mx-auto my-4"
		/>
		<p class="bg-yellow-200 px-3 py-1 rounded w-40 mb-5 mx-auto">
			Base Stats
		</p>
		<ul>
			<li v-for="(item, ind) in pokemon.stats" :key="ind">
				{{ capital(item.stat.name) }}:
				<strong>{{ item.base_stat }}</strong>
			</li>
		</ul>
	</div>
</template>

<script>
import capitalize from 'capitalize';

export default {
	mounted() {
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`)
			.then((res) => res.json())
			.then((json) => (this.pokemon = json));
	},
	data() {
		return {
			pokemon: null,
		};
	},
	methods: {
		capital(str) {
			return str.toUpperCase();
		},
	},
	computed: {
		name() {
			return capitalize(this.pokemon.name);
		},
	},
};
</script>

<style scoped>
p,
li {
	font-size: 1.4em;
}
</style>
