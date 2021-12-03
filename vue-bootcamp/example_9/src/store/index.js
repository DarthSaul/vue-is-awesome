import Vue from 'vue';
import Vuex from 'vuex';
import field from './modules/field';
import pokemon from './modules/pokemon';
import main from './modules/main';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		main,
		field,
		pokemon,
	},
});

export default store;
