<template>
	<div>
		<h1>Pokedex</h1>
		<ul>
			<li v-for="(item, ind) in pokemon" :key="ind">
				<Pokemon :pokeData="item" />
			</li>
		</ul>
	</div>
</template>

<script>
import Pokemon from './Pokemon.vue';

export default {
	props: {
		pokemon: Array,
	},
	components: {
		Pokemon,
	},
	// beforeCreate() {
	// 	console.log('Before component created...');
	// },
	// created() {
	// 	console.log('Component instance created.');
	// },
	// beforeMount() {
	// 	console.log('Before component mounted...');
	// },
	// mounted() {
	// 	console.log('Component instance mounted. ');
	// },
};
</script>

<style scoped>
ul {
	text-align: left;
}
</style>
