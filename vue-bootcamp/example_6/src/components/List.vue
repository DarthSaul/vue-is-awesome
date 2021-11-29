<template>
	<ul>
		<li v-for="(item, ind) in items" :key="ind">{{ item }}</li>
	</ul>
</template>

<script>
export default {
	props: { items: Array },
};
</script>
<style scoped>
ul {
	width: 60%;
	margin: 1em auto;
	padding: 1em;
}
li {
	text-align: left;
	margin-bottom: 1em;
	padding-left: 2em;
}
</style>
