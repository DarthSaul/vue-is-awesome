<template>
	<div class="hero-box">
		<div class="hero-box-left">
			<p class="large-text">
				Your trusted web developers, just a click away.
			</p>
			<p class="medium-text">
				Meet our team of web dev experts ready to take on your biggest
				challenges and turn them into opportunities to outshine your
				competition. Connect with us today to get started.
			</p>
		</div>
		<div class="hero-box-right">
			<form method="post" action="#">
				<input-field-two
					unique="first_name"
					label="First Name"
				></input-field-two>
				<input-field-two
					unique="last_name"
					label="Last Name"
				></input-field-two>
				<input-field-two unique="email" label="Email"></input-field-two>
				<div class="input-wrapper">
					<button>Contact Us</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import InputFieldTwo from '../components/InputFieldTwo.vue';

export default {
	components: {
		InputFieldTwo,
	},
};
</script>

<style>
.hero-box {
	background: #f3f3ff;
	display: flex;
	text-align: left;
}
.hero-box-left {
	width: 400px;
	margin: 25px;
}
.hero-box-right {
	width: 100%;
	margin: 25px;
}
.large-text {
	font-size: 25px;
	line-height: 1.5em;
}
.medium-text {
	margin-top: 10px;
}
.input-wrapper {
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
}
.input-wrapper > label {
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 5px;
}
.input-wrapper > input {
	background: transparent;
	border: 1px solid #555ae4;
	border-radius: 5px;
	padding: 5px;
}
.input-wrapper > button {
	background: #555ae4;
	color: #fff;
	border-radius: 5px;
	padding: 10px;
}
</style>
