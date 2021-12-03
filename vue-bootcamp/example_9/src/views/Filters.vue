<template>
	<div>
		<h1>Filters</h1>
		<h2 v-if="text">{{ str | capitalize('@') }}</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: true,
			str: 'hello',
		};
	},
	filters: {
		myFilter(text) {
			return text.toUpperCase();
		},
	},
};
</script>

<style scoped></style>
