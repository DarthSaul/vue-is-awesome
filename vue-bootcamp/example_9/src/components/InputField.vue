<template>
	<input type="text" v-model="inputValue" />
</template>

<script>
export default {
	props: ['field'],
	computed: {
		inputValue: {
			get() {
				return this.$store.state.field[this.field];
			},
			set(value) {
				this.$store.commit('setField', {
					field: this.field,
					value: value,
				});
			},
		},
	},
};
</script>

<style scoped></style>
