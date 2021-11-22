const app = new Vue({
	el: '#app',
	data: {
		formData: {
			text: '',
		},
		items: [],
	},
	methods: {
		addItem() {
			this.items.push(this.formData.text);
			return (this.formData.text = '');
		},
	},
});
