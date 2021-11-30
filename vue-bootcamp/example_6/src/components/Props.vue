<template>
	<div v-if="isVisible">
		<h1>Title: {{ title }}</h1>
		<p>Episode num: {{ episodeNum }}</p>
		<p>Published: {{ isPublished }}</p>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Harry Potter',
		},
		episodeNum: {
			type: Number,
			default: 3,
		},
		isPublished: {
			type: [Boolean, Number],
			default: false,
		},
		isVisible: {
			type: Boolean,
			default: true,
		},
	},
};
</script>
<style scoped>
div {
	margin-bottom: 3em;
	border: 1px solid grey;
	border-radius: 12px;
	padding: 1em;
	width: 200px;
}
</style>
