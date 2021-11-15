Vue.component('pokemon', {
	props: {
		initName: {
			type: String,
		},
		initUrl: {
			type: String,
		},
		loggedIn: true,
	},
	template: `
    <div class='pokemon'>
        <h1>{{ name }}</h1>
        <p>Pokedex ID #{{id}}</p>
        <p>Types:</p>
        <ul class='types'>
        <li v-for="(el, index) in types" :key="index">
        {{el.type.name}}
        </li>
        </ul>
        <img :src="images.sprite" alt="" />
    </div>`,
	data() {
		return {
			id: null,
			name:
				this.initName.charAt(0).toUpperCase() + this.initName.slice(1),
			url: this.initUrl,
			types: [],
			weaknesses: [],
			images: {
				sprite: '',
				thumbnail: '',
				medium: '',
			},
		};
	},
	// methods: {
	// 	capitalize(word) {
	// 		word ? '' : word.charAt(0).toUpperCase() + this.word.slice(1);
	// 	},
	// },
	mounted() {
		axios.get(this.url).then((res) => {
			this.id = res.data.id;
			this.types = res.data.types;
			this.images.sprite = res.data.sprites.front_default;
		});
	},
});

const app = new Vue({
	el: '#app',
	data: {
		userId: null,
		pokemon: [],
	},
	mounted() {
		axios
			.get('https://pokeapi.co/api/v2/pokemon/')
			.then((res) => (this.pokemon = res.data.results));
	},
});
