<template>
	<div v-if="pokemon">
		<router-link :to="'/pokemon/' + index">
			<p>{{ name }}</p>
		</router-link>
		<img :src="pokemon.sprites.front_default" alt="#" />
	</div>
</template>

<script>
import capitalize from 'capitalize';
export default {
	props: {
		pokeData: Object,
		index: Number,
	},
	computed: {
		name() {
			return capitalize(this.pokemon.name);
		},
	},
	mounted() {
		fetch(this.pokeData.url)
			.then((res) => res.json())
			.then((json) => (this.pokemon = json));
	},
	data() {
		return {
			pokemon: null,
			url: '',
		};
	},
};
</script>

<style scoped>
p:hover {
	color: rgb(22, 93, 155);
}
</style>
