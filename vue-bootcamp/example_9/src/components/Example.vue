<template>
	<div>
		<p>{{ formatMoney(2999) }}</p>
		<div>{{ msg }}</div>
		<div>{{ count }}</div>
		<input type="text" v-model="msg" />
	</div>
</template>

<script>
import mixin from '../mixins/general';

export default {
	props: ['count'],
	data() {
		return {
			msg: 'message here',
		};
	},
	mixins: [mixin],
	methods: {
		formatMoney() {
			return 'DIFFERENT';
		},
	},
	watch: {
		count(newVal, oldVal) {
			console.log(oldVal);
		},
		msg(newVal, oldVal) {
			console.log(oldVal);
		},
	},
};
</script>

<style scoped></style>
