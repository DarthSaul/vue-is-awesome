export default {
	state: {
		modal: false,
		modalResolve: null,
	},
	getters: {
		getModal(state) {
			return state.modal;
		},
	},
	mutations: {
		hideModal(state) {
			state.modalResolve = null;
			state.modal = false;
		},
		showModal(state, payload) {
			state.modalResolve = payload.resolve;
			state.modal = true;
		},
		resolveModal(state) {
			if (state.modalResolve) {
				state.modalResolve();
			}
		},
	},
	actions: {
		hideModal(context) {
			context.commit('hideModal');
		},
		showModal(context) {
			return new Promise((resolve, reject) => {
				context.commit('showModal', { resolve, reject });
			});
		},
		resolveModal(context) {
			context.commit('resolveModal');
			context.commit('hideModal');
		},
	},
};
