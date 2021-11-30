<template>
	<div>
		<input type="text" placeholder="Add new item" v-model="item" />
		<button @click.prevent="addItem">Add</button>
		<List :items="items" @remove-item="removeItem" />
	</div>
</template>

<script>
import List from './List.vue';

export default {
	components: { List },
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
		removeItem(index) {
			// console.log(index);
			this.items.splice(index, 1);
		},
	},
};
</script>

<style scoped>
input {
	padding: 5px 15px;
	border-radius: 15px;
}
button {
	text-transform: uppercase;
	font-size: 14px;
	margin-left: 5px;
	font-weight: bold;
}
li {
	color: blue;
	font-size: 4em;
}
</style>
