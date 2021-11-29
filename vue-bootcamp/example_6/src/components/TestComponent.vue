<template>
	<div class="blue-wrapper">
		<h1>{{ msg }}</h1>
		<input type="text" v-model="text" />
		<button @click="sayHello">Click</button>
		<p>{{ typedMsg }}</p>
	</div>
</template>

<script>
export default {
	props: {
		userId: String,
	},
	data() {
		return {
			msg: 'hello, world',
			text: '',
			typedMsg: '',
			isAdmin: true,
		};
	},
	methods: {
		sayHello() {
			this.typedMsg = this.text;
		},
	},
};
</script>

<style scoped>
.blue-wrapper {
	padding: 3em;
	margin-bottom: 1em;
	background-color: rgb(168, 223, 252);
}
</style>
