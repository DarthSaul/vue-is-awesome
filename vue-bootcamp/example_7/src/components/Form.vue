<template>
	<form action="#" method="post" v-if="!formData.submitted">
		<InputField
			label="First Name"
			id="first_name"
			@updated="formData.firstName = $event"
		/>
		<div>Current: {{ formData.firstName }}</div>
		<InputField
			label="Last Name"
			id="last_name"
			@updated="formData.lastName = $event"
		/>
		<div>Current: {{ formData.lastName }}</div>
		<InputField
			label="Email"
			id="email"
			@updated="formData.email = $event"
		/>
		<div>Current: {{ formData.email }}</div>
		<div class="input-wrapper">
			<button @click.prevent="submitForm()">Contact Us</button>
		</div>
	</form>
	<div v-else>Form submitted!</div>
</template>

<script>
import InputField from './InputField.vue';

export default {
	components: {
		InputField,
	},
	data() {
		return {
			formData: {
				firstName: '',
				lastName: '',
				email: '',
				submitted: false,
			},
		};
	},
	methods: {
		submitForm() {
			this.formData.firstName = '';
			this.formData.lastName = '';
			this.formData.email = '';
			this.formData.submitted = true;
		},
	},
};
</script>

<style scoped></style>
