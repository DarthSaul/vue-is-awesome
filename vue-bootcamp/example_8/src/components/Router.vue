<template>
	<div>
		<h1>Router</h1>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import VueRouter from 'vue-router';

const PageOne = { template: '<div>Page One</div>' };

const routes = [{ path: '/page-one', component: PageOne }];

const router = new VueRouter({
	routes,
});

export default {
	router,
};
</script>

<style scoped></style>
