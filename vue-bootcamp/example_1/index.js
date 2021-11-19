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
		color: '',
		nameTwo: '',
		field: '',
		counterComputed: 0,
		counterMethod: 0,
	},
	computed: {
		exclamationTitle() {
			return this.title + '!!!';
		},
		exclamationName() {
			return this.name + '!';
		},
		computedName: {
			get: function () {
				// console.log('running one...');
				return this.nameTwo;
			},
			set: function (newVal) {
				this.nameTwo = newVal;
			},
		},
		printNameOne() {
			console.log('running one...');
			return this.name;
		},
		printTextComputed() {
			console.log('counter printed from computed', this.counterComputed);
		},
	},
	methods: {
		modified: function () {
			this.field += '!';
		},
		printNameTwo() {
			// console.log('running two...');
			return this.name;
		},
		printTextMethod() {
			console.log('counter printed from method', this.counterMethod);
		},
	},
});

// setTimeout(() => (app.color = 'red'), 2500);
