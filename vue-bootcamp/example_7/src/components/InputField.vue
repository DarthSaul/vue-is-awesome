<template>
	<div class="input-wrapper">
		<label :for="id">{{ label }}</label>
		<input
			type="text"
			:id="id"
			v-model="value"
			@input="$emit('updated', value)"
		/>
	</div>
</template>

<script>
export default {
	props: {
		label: String,
		id: String,
	},
	data() {
		return {
			value: '',
		};
	},
};
</script>
