<template>
	<div id="app" class="bg-blue-200">
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <TestComponent /> -->
		<!-- <test-component></test-component> -->
		<!-- <SecondComponent /> -->
		<!-- <TodoComponent /> -->
		<!-- <Card /> -->
		<Props title="Star Wars" :episodeNum="10" :isPublished="true" />
		<Props title="Dune" :episodeNum="5" :isPublished="1" />
		<Props />
		<Props title="hide me!" :isVisible="false" />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import TestComponent from './components/TestComponent.vue';
// import SecondComponent from './components/SecondComponent';
// import TodoComponent from './components/TodoComponent';
// import Card from './components/Card';
import Props from './components/Props';

export default {
	name: 'App',
	components: {
		// HelloWorld,
		// TestComponent,
		// SecondComponent,
		// TodoComponent,
		// Card,
		Props,
	},
};
</script>

<style>
#app {
	/* font-family: Avenir, Helvetica, Arial, sans-serif; */
	/* -webkit-font-smoothing: antialiased; */
	/* -moz-osx-font-smoothing: grayscale; */
	/* text-align: center; */
	/* margin-top: 60px; */
	color: #2c3e50;
	height: 100vh;
	padding: 3em;
}
</style>
