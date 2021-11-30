<template>
	<div v-if="show" @keyup.esc="show = !show">
		<p>{{ counter }}</p>
		<button @click="counter++">+ 1</button>
		<button @click="counter--">- 1</button>
		<div>
			<button @click="add(10)">+ 10</button>
		</div>
		<!-- <button @keyup.esc="add(5)">Escape for +5</button> -->
		<div @dblclick="showMsg = !showMsg">Show</div>
		<div v-if="showMsg">Abracadabra</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
			show: true,
			showMsg: true,
		};
	},
	methods: {
		add(value) {
			this.counter += value;
		},
		toggleShow() {
			this.show = !this.show;
		},
	},
};
</script>

<style scoped></style>
