<template>
	<div class="card-circle">
		<p>{{ initials }}</p>
	</div>
</template>

<script>
export default {
	props: { fullName: String },
	data() {
		return {};
	},
	computed: {
		initials() {
			return this.fullName.match(/[A-Z]/g).join('');
		},
	},
};
</script>

<style scoped>
.card-circle {
	background: linear-gradient(to right, #da4453, #89216b);
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75px;
	height: 75px;
	font-size: 24px;
	font-weight: bold;
	border-radius: 100%;
	padding: 5px;
	border: 3px solid #fff;
}
</style>
