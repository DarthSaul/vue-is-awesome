<template>
	<input type="text" v-model="value" name="my-input" />
</template>

<script>
import EventBus from '../bus';

export default {
	props: ['default'],
	mounted() {
		this.value = this.default;
	},
	updated() {
		if (this.value === this.default) {
			return EventBus.$emit('dirty-field', false);
		}
		EventBus.$emit('dirty-field', true);
	},
	data() {
		return {
			value: '',
		};
	},
};
</script>

<style scoped>
input {
	padding: 1em;
}
</style>
