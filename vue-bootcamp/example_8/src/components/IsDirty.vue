<template>
	<p v-if="dirty">Field is dirty.</p>
</template>

<script>
import EventBus from '../bus';
export default {
	mounted() {
		EventBus.$on('dirty-field', (dirty) => (this.dirty = dirty));
	},
	data() {
		return {
			dirty: '',
		};
	},
};
</script>

<style scoped></style>
