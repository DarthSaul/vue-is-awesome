<template>
	<div>
		<div>
			<button @click="handleClick(1)">CLICK +1</button>
		</div>
		<div>
			<button @click="handleClick(-1)">CLICK -1</button>
		</div>
		<div>
			<button
				class="bg-blue-500 text-white px-3 py-1 rounded"
				@click="$emit('new-event', movieInfo)"
			>
				Click Me
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			movieInfo: { id: 1, title: 'Harry Potter' },
		};
	},
	methods: {
		handleClick(val) {
			if (val == 1) {
				return this.$emit('add-one');
			} else if (val == -1) {
				return this.$emit('minus-one');
			}
		},
	},
};
</script>

<style scoped></style>
