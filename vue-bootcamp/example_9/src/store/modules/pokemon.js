export default {
	state: {
		pokemon: null,
	},
	getters: {
		getPokemon(state) {
			return state.pokemon;
		},
	},
	mutations: {
		setPokemon(state, data) {
			state.pokemon = data;
		},
	},
	actions: {
		fetchPokemon(context) {
			fetch('https://pokeapi.co/api/v2/pokemon/1')
				.then((res) => res.json())
				.then((json) => {
					context.commit('setPokemon', json);
				});
		},
	},
};
