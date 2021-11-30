<template>
	<ul>
		<li v-for="(item, ind) in items" :key="ind">
			{{ item }} <button @click="handleClick(ind)">X</button>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		items: Array,
	},
	data() {
		return {};
	},
	methods: {
		handleClick(index) {
			this.$emit('remove-item', index);
		},
	},
};
</script>

<style scoped>
ul {
	margin-top: 15px;
}
li {
	padding: 5px 15px;
	margin-bottom: 5px;
	background: white;
	border-radius: 15px;
	color: #555;
	display: flex;
	justify-content: space-between;
}
</style>
