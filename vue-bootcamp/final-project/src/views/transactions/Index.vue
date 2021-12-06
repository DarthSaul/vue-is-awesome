<template>
	<div class="flex flex-col items-center">
		<h1>Transactions</h1>

		<div
			v-for="(item, ind) in getTransactions"
			:key="ind"
			class="transaction"
		>
			<div class="flex">
				<div class="w-20">{{ item.type }}</div>
				<div>{{ item.description.substring(0, 20) }}</div>
			</div>
			<div>
				{{ formatMoney(item.amount) }}
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['getTransactions']),
	},
};
</script>

<style scoped></style>
