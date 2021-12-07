export default {
	state: {
		transactions: [
			{
				type: 'debit',
				description: 'Pants',
				amount: 4500,
			},
			{
				type: 'credit',
				description: 'Shirt',
				amount: 2000,
			},
		],
	},

	getters: {
		getTransactions(state) {
			return state.transactions;
		},
		getTotal(state) {
			if (!state.transactions.length) {
				return 0;
			}
			return state.transactions.reduce((a, b) => {
				if (b.type == 'debit') {
					return (a -= b.amount);
				} else {
					return (a += b.amount);
				}
			}, 0);
		},
	},
	mutations: {
		addTransaction(state, transaction) {
			state.transactions.push(JSON.parse(JSON.stringify(transaction)));
			console.log(state.transactions);
		},
		removeTransaction(state, index) {
			state.transactions.splice(index, 1);
			console.log(state.transactions);
		},
	},
	actions: {
		addTransaction(context, transaction) {
			context.commit('addTransaction', transaction);
		},
		removeTransaction(context, index) {
			context.commit('removeTransaction', index);
		},
	},
};
