<template>
	<div id="app">
		<Navigation />
		<TotalBar />
		<Modal />
		<router-view />
	</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import TotalBar from '@/components/TotalBar.vue';
import Modal from '@/components/Modal';

export default {
	components: {
		Navigation,
		TotalBar,
		Modal,
	},
};
</script>

<style></style>
