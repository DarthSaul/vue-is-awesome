<template>
	<div>{{ message }}</div>
</template>

<script>
import EventBus from '../bus';

export default {
	data() {
		EventBus.$on('say-hello', () => {
			this.message = 'Hello from component A';
		});
		return {
			message: 'Component B here!',
		};
	},
};
</script>

<style scoped>
div {
	margin-bottom: 2em;
}
</style>
