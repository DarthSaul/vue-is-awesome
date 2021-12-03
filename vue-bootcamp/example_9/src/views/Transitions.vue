<template>
	<div>
		<h1>Transitions</h1>
		<div>
			<button @click="text = !text">Toggle</button>
		</div>
		<transition name="fade" appear>
			<h2 v-if="text">hello, world</h2>
		</transition>
		<transition name="dim" appear>
			<h2 v-if="text" class="dim">hello, world</h2>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: true,
		};
	},
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 1.5s;
}

.dim {
	opacity: 0.5;
}
.dim-enter,
.dim-leave-to {
	opacity: 0;
}
.dim-enter-active,
.dim-leave-active {
	transition: all 2.5s;
}
</style>
