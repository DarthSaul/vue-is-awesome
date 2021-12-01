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
			message: 'Component C here!',
		};
	},
};
</script>

<style scoped></style>
