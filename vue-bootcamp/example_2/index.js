const app = new Vue({
	el: '#app',
	data: {
		formData: {
			name: '',
			email: '',
			message: '',
		},
		error: '',
		success: '',
	},
	methods: {
		validateForm() {
			if (!this.formData.name.length || !this.formData.email.length) {
				return (this.error = 'Please provide your name and email.');
			}
			this.error = '';
			this.formData.name = '';
			this.formData.email = '';
			this.formData.message = '';
			this.success = 'Form sent!';
		},
	},
});
