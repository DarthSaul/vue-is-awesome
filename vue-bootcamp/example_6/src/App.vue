<template>
	<div id="app" class="bg-blue-200">
		<!-- <img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <TestComponent />
		<test-component></test-component>
		<SecondComponent /> -->
		<TodoComponent />
		<Card />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import TestComponent from './components/TestComponent.vue';
// import SecondComponent from './components/SecondComponent';
import TodoComponent from './components/TodoComponent';
import Card from './components/Card';

export default {
	name: 'App',
	components: {
		// HelloWorld,
		// TestComponent,
		// SecondComponent,
		TodoComponent,
		Card,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	/* margin-top: 60px; */
	height: 100vh;
	padding: 3em;
}
</style>
