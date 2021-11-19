const app = new Vue({
	el: '#app',
	data: {
		title: 'Learning Vue on Scrimba',
		desc: 'This is an interactive lesson on how to remove the data from the DOM and put it on the Vue instance.',
		link: {
			url: 'https://vuejs.org/',
			desc: 'Visit Vue',
		},
		name: '',
	},
	computed: {
		exclamationTitle() {
			return this.title + '!!!';
		},
		exclamationName() {
			return this.name + '!';
		},
	},
});

// setTimeout(() => (app.color = 'red'), 2500);
