export default {
	state: {
		message: 'Hello from Vuex!',
		prefix: 'Message: ',
	},
	getters: {
		getMessage(state, getters) {
			return getters.getPrefix + state.message + '!!!';
		},
		getPrefix(state) {
			return state.prefix.toUpperCase();
		},
	},
	mutations: {
		setMessage(state, text) {
			state.message = text;
		},
		resetPrefix(state) {
			state.prefix = 'Unset: ';
		},
	},
	actions: {
		resetMessage(context) {
			context.commit('resetPrefix');
			context.commit('setMessage', 'tbd');
		},
	},
};
