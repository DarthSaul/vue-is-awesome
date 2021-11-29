<template>
	<div class="card rounded-lg">
		<div class="card-title mb-3">Your Instructor</div>
		<UserCircle :fullName="name" />
		<div class="card-name">
			<div class="light-font">{{ splitName[0] }}</div>
			<div>{{ splitName[1] }}</div>
		</div>
		<div class="card-company">{{ company }}</div>
	</div>
</template>

<script>
import UserCircle from './UserCircle.vue';
export default {
	components: { UserCircle },
	data() {
		return {
			name: 'Saul Graves',
			company: 'Conservation Labs',
		};
	},
	computed: {
		splitName() {
			return this.name.split(' ');
		},
	},
};
</script>

<style scoped>
.card {
	background: rgb(4, 84, 104);
	color: #dff1f5;
	padding: 15px;
	width: 200px;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 3em auto;
}
.card-name {
	display: flex;
	text-transform: uppercase;
	margin-top: 15px;
}
.light-font {
	color: #7dd2d5;
	margin-right: 5px;
}
</style>
