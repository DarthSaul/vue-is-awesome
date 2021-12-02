<template>
	<div class="about">
		<h1>This is an about page</h1>
		<h2 v-if="id">{{ id }}</h2>
	</div>
</template>

<script>
export default {
	created() {
		this.id = this.$route.params.id;
	},
	data() {
		return {
			id: null,
		};
	},
};
</script>
