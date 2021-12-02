<template>
	<div class="wrapper">
		<router-link to="/pokemon">Home</router-link> |
		<router-link to="/pokemon/1">Bulbasaur</router-link>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'Pokemon',
	components: {},
};
</script>

<style scoped>
.wrapper {
	padding: 0 1.5em;
}
</style>
