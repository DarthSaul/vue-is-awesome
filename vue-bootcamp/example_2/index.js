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
	computed: {
		validName() {
			return !this.formData.name && this.error
				? 'Please provide a name.'
				: '';
		},
		validEmail() {
			return !this.formData.email && this.error
				? 'Please provide an email.'
				: '';
		},
		validMsg() {
			return !this.formData.message && this.error
				? 'Please provide a message.'
				: '';
		},
	},
	methods: {
		validateForm() {
			if (!this.formData.name.length || !this.formData.email.length) {
				return (this.error = 'Errors below.');
			}
			this.error = '';
			this.formData.name = '';
			this.formData.email = '';
			this.formData.message = '';
			this.success = 'Form sent!';
		},
	},
});
