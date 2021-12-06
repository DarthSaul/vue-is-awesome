import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
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
	},
	mutations: {
		addTransaction(state, transaction) {
			state.transactions.push(JSON.parse(JSON.stringify(transaction)));
			console.log(state.transactions);
		},
	},
	actions: {
		addTransaction(context, transaction) {
			context.commit('addTransaction', transaction);
		},
	},
});

export default store;
