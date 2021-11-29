<template>
	<div class="wrapper bg-green-100">
		<input
			type="text"
			placeholder="Add a todo item"
			v-model="item"
			class="py-2 px-4 rounded"
		/>
		<button
			@click.prevent="addItem"
			class="
				bg-blue-500
				hover:bg-blue-700
				text-white
				font-bold
				py-2
				px-4
				mx-4
				rounded
			"
		>
			Add
		</button>
		<List :items="items" />
	</div>
</template>

<script>
import List from './List';
export default {
	components: {
		List,
	},
	data() {
		return {
			item: '',
			items: ['Groceries', 'Trash'],
		};
	},
	methods: {
		addItem() {
			this.items.push(this.item);
			this.item = '';
		},
	},
};
</script>

<style scoped>
.wrapper {
	max-width: 750px;
	text-align: center;
	padding: 3em;
	margin: auto;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.08);
	border-radius: 1em;
}
</style>
