<template>
	<div>
		<my-button
			@add-one="counter++"
			@minus-one="counter--"
			@new-event="updateText"
		></my-button>
		<p>{{ counter }}</p>
		<p>{{ text }}</p>
	</div>
</template>

<script>
import MyButton from './MyButton.vue';

export default {
	components: { MyButton },
	data() {
		return {
			counter: 0,
			text: '',
		};
	},
	methods: {
		updateText(data) {
			this.text = data.title;
		},
	},
};
</script>

<style scoped></style>
