<template>
	<form method="post" action="#">
		<!-- form input components -->
		<InputField label="First Name" id="first_name" />
		<InputField label="Last Name" id="last_name" />
		<InputField label="Email" id="email" />
		<!-- <div class="input-wrapper">
			<label for="first_name">First Name</label>
			<input type="text" id="first" v-model="form.firstName" />
		</div>
		<div class="input-wrapper">
			<label for="last_name">Last Name</label>
			<input type="text" id="last_name" v-model="form.lastName" />
		</div>
		<div class="input-wrapper">
			<label for="email">Email</label>
			<input type="text" id="email" v-model="form.email" />
		</div> -->
		<div class="input-wrapper">
			<button @click.prevent="submitForm()">Contact Us</button>
		</div>
	</form>
</template>

<script>
import InputField from './InputField.vue';

export default {
	components: {
		InputField,
	},
	data() {
		return {
			form: {
				firstName: '',
				lastName: '',
				email: '',
			},
		};
	},
	methods: {
		submitForm() {
			this.form.firstName = '';
			this.form.lastName = '';
			this.form.email = '';
		},
	},
};
</script>

<style scoped>
.input-wrapper {
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
}
/* .input-wrapper > label {
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 5px;
}
.input-wrapper > input {
	background: transparent;
	border: 1px solid #555ae4;
	border-radius: 5px;
	padding: 5px;
} */
.input-wrapper > button {
	background: #555ae4;
	color: #fff;
	border-radius: 5px;
	padding: 10px;
}
</style>
