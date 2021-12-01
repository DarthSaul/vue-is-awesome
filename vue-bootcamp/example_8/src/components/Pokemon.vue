<template>
	<div v-if="pokemon">
		<p>{{ pokemon.name }}</p>
		<img :src="pokemon.sprites.front_default" alt="#" />
	</div>
</template>

<script>
export default {
	props: {
		pokeData: Object,
	},
	mounted() {
		fetch(this.pokeData.url)
			.then((res) => res.json())
			.then((json) => (this.pokemon = json));
	},
	data() {
		return {
			pokemon: null,
		};
	},
};
</script>

<style scoped></style>
