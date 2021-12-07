import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
import transactions from './modules/transactions';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		modal,
		transactions,
	},
});

export default store;
