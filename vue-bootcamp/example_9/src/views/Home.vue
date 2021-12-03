<template>
	<div class="home">
		<p>{{ myMessage }}</p>
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld,
	},
	computed: {
		myMessage() {
			return this.$store.getters.getMessage;
		},
	},
};
</script>
