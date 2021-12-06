<template>
	<div class="flex flex-col items-center">
		<h1>Add Transaction</h1>

		<div class="toggle-switch">
			<input
				type="radio"
				id="debit"
				name="transaction_type"
				v-model="form.type"
				value="debit"
			/>
			<label for="debit">Debit</label>

			<input
				type="radio"
				id="credit"
				name="transaction_type"
				v-model="form.type"
				value="credit"
			/>
			<label for="credit">Credit</label>
		</div>

		<template v-if="error">
			<p class="text-red-600 my-2">{{ error }}</p>
		</template>

		<div class="input-field">
			<label for="description">Description</label>
			<input
				type="text"
				id="description"
				name="transaction_description"
				placeholder="Enter description"
				v-model="form.description"
			/>
		</div>

		<div class="input-field">
			<label for="amount">Amount</label>
			<div>
				<span class="currency">$</span>
				<input
					type="text"
					id="amount"
					name="transaction_amount"
					v-model="form.amount"
				/>
			</div>
		</div>

		<div class="mb-12">
			<button @click.prevent="addTransaction">Add</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				type: 'debit',
				description: '',
				amount: null,
			},
			error: '',
		};
	},
	methods: {
		addTransaction() {
			if (!this.validForm()) {
				return (this.error = 'Please fill out all fields.');
			}
			this.error = null;
			this.form.amount *= 100;
			this.$store.dispatch('addTransaction', this.form);
			this.form.description = '';
			this.form.amount = null;
			this.$router.push({ path: '/transactions' });
		},
		validForm() {
			if (this.form.description == '' || !this.form.amount) {
				return false;
			}
			return true;
		},
	},
};
</script>

<style scoped></style>
