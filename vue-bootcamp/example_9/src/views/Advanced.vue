<template>
	<div>
		<h1>hello, world</h1>
		<Example :count="count" />
		<button @click.prevent="count++">Increase</button>
	</div>
</template>

<script>
import Example from '@/components/Example';

export default {
	components: {
		Example,
	},
	data() {
		return {
			count: 0,
		};
	},
};
</script>

<style scoped></style>
