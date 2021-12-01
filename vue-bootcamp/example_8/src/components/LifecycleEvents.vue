<template>
	<div>
		<h1>Lifecycle Events</h1>
		<input-field default="My default text."></input-field>
		<IsDirty />
	</div>
</template>

<script>
import InputField from './InputField';
import IsDirty from './IsDirty';
export default {
	components: {
		InputField,
		IsDirty,
	},
	data() {},
};
</script>

<style scoped></style>
