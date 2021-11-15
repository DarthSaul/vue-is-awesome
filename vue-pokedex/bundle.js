(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// // import Vue from 'vue';
// const axios = require('axios');

Vue.component('pokemon', {
	props: {
		name: {
			type: String,
		},
		url: {
			type: String,
		},
		loggedIn: true,
	},
	template: `
    <div class='pokemon'>
            <h1>{{name}}</h1>
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
			types: [],
			weaknesses: [],
			images: {
				sprite: '',
				thumbnail: '',
				medium: '',
			},
		};
	},
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

},{}]},{},[1]);
