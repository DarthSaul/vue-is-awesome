<template>
	<div
		id="app"
		class="bg-gray-200 w-full h-screen flex flex-col items-center p-4"
	>
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<!-- <FirstEvent /> -->
		<!-- <CustomEvents /> -->
		<!-- <Todo /> -->
		<Form />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import FirstEvent from './components/FirstEvent.vue';
// import CustomEvents from './components/CustomEvents.vue';
// import Todo from './components/Todo.vue';
import Form from './components/Form.vue';

export default {
	name: 'App',
	components: {
		// HelloWorld,
		// FirstEvent,
		// CustomEvents,
		// Todo,
		Form,
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
	padding: 2em;
}
</style>
