<template>
	<div>
		<h1>{{ getMessage }}</h1>
		<input type="text" v-model="value" />
		<button @click.prevent="update">UPDATE STATE</button>
		<button @click.prevent="reset">RESET STATE</button>

		<div>
			<button @click.prevent="takeAction">Action</button>
		</div>

		<div class="poke">
			<button @click.prevent="fetchPokemon">Get Bulbasaur</button>
			<div v-if="getPokemon">
				<p>{{ getPokemon.name }}</p>
			</div>
		</div>

		<InputField field="msg" />
		<InputField field="amount" />
		<Listener />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import InputField from '@/components/InputField.vue';
import Listener from '@/components/Listener.vue';

export default {
	components: {
		InputField,
		Listener,
	},
	data() {
		return {
			value: '',
			pokemon: null,
		};
	},
	computed: {
		...mapGetters(['getMessage', 'getPrefix', 'getPokemon']),
	},
	methods: {
		update() {
			this.$store.commit('setMessage', this.value);
		},
		reset() {
			this.$store.dispatch('resetMessage');
		},
		fetchPokemon() {
			this.$store.dispatch('fetchPokemon');
		},
		takeAction() {
			this.$store.dispatch('newAction');
		},
	},
};
</script>

<style scoped>
.poke {
	margin: 2em 0;
}
</style>
