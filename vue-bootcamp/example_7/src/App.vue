<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<!-- <FirstEvent /> -->
		<!-- <CustomEvents /> -->
		<!-- <Todo /> -->
		<!-- <Form /> -->
		<!-- <ComponentA /> -->
		<!-- <ComponentB /> -->
		<!-- <ComponentC /> -->
		<ShoppingCartModule />
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import FirstEvent from './components/FirstEvent.vue';
// import CustomEvents from './components/CustomEvents.vue';
// import Todo from './components/Todo.vue';
// import Form from './components/Form.vue';
// import ComponentA from './components/ComponentA.vue';
// import ComponentB from './components/ComponentB.vue';
// import ComponentC from './components/ComponentC.vue';
import ShoppingCartModule from './components/ShoppingCartModule.vue';

export default {
	name: 'App',
	components: {
		// HelloWorld,
		// FirstEvent,
		// CustomEvents,
		// Todo,
		// Form,
		// ComponentA,
		// ComponentB,
		// ComponentC,
		ShoppingCartModule,
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
