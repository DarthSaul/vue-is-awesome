export default {
	state: {
		msg: 'hello, there',
		amount: '100',
	},
	getters: {},
	mutations: {
		setField(state, data) {
			state[data.field] = data.value;
		},
	},
	actions: {},
};
