<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <TestComponent /> -->
		<!-- <test-component></test-component> -->
		<!-- <SecondComponent /> -->
		<!-- <TodoComponent /> -->
		<!-- <Card /> -->
		<!-- <Props title="Star Wars" :episodeNum="10" :isPublished="true" /> -->
		<!-- <Props title="Dune" :episodeNum="5" :isPublished="1" /> -->
		<!-- <Props /> -->
		<!-- <Props title="hide me!" :isVisible="false" /> -->
		<Nav />
		<div class="hero-box">
			<div class="hero-box-left">
				<p class="large-text">
					Your trusted web developers, just a click away.
				</p>
				<p class="medium-text">
					Meet our team of web dev experts ready to take on your
					biggest challenges and turn them into opportunities to
					outshine your competition. Connect with us today to get
					started.
				</p>
			</div>
			<div class="hero-box-right">
				<Form />
			</div>
		</div>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import TestComponent from './components/TestComponent.vue';
// import SecondComponent from './components/SecondComponent';
// import TodoComponent from './components/TodoComponent';
// import Card from './components/Card';
// import Props from './components/Props';
import Nav from './components/Nav';
import Form from './components/Form';

export default {
	name: 'App',
	components: {
		// HelloWorld,
		// TestComponent,
		// SecondComponent,
		// TodoComponent,
		// Card,
		// Props,
		Nav,
		Form,
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
	/* color: #2c3e50; */
	/* padding: 3em; */
	height: 100vh;
	background: #fff;
	color: #777;
}
.hero-box {
	background: #f3f3ff;
	display: flex;
}
.hero-box-left {
	width: 400px;
	margin: 25px;
}
.hero-box-right {
	width: 100%;
	margin: 25px;
}
.large-text {
	font-size: 25px;
	line-height: 1.5em;
}
.medium-text {
	margin-top: 10px;
}
</style>
