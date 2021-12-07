<template>
	<div class="flex flex-col items-center">
		<h1>Transactions</h1>

		<div
			v-for="(item, ind) in getTransactions"
			:key="ind"
			class="transaction"
		>
			<div class="flex">
				<div class="w-20">
					<PlusSign
						v-if="item.type == 'credit'"
						class="text-green-500"
					/>
					<MinusSign v-else class="text-red-500" />
				</div>
				<div>{{ item.description.substring(0, 20) }}</div>
			</div>
			<div class="flex">
				<div class="mr-4">{{ formatMoney(item.amount) }}</div>
				<div>
					<button @click.prevent="removeTransaction(ind)">X</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import PlusSign from '@/components/ui/PlusSign';
import MinusSign from '@/components/ui/MinusSign';

export default {
	components: {
		PlusSign,
		MinusSign,
	},
	computed: {
		...mapGetters(['getTransactions']),
	},
	methods: {
		removeTransaction(index) {
			this.$store
				.dispatch('showModal')
				.then(() => this.$store.dispatch('removeTransaction', index));
		},
	},
};
</script>

<style scoped></style>
