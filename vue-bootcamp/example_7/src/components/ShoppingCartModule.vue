<template>
	<div class="wrapper">
		<h1>The Cup Store</h1>

		<Product
			v-for="item in products"
			:key="item.id"
			:name="item.name"
			:price="item.price"
			:image="item.image"
		/>

		<Cart />
	</div>
</template>

<script>
import Cart from './Cart.vue';
import Product from './Product.vue';
export default {
	components: {
		Cart,
		Product,
	},
	data() {
		return {
			products: [
				{
					id: 1,
					name: 'Colorful Cups',
					price: 999,
					image: 'https://images.unsplash.com/photo-1611274757139-03ff1736701d',
				},
				{
					id: 2,
					name: 'Coffee & Home',
					price: 1000,
					image: 'https://images.unsplash.com/photo-1578250036464-069746676fdd',
				},
				{
					id: 3,
					name: 'Old Red Friend',
					price: 500,
					image: 'https://images.unsplash.com/photo-1561150547-f70dea3fa4f3',
				},
			],
		};
	},
};
</script>

<style scoped>
.wrapper {
	padding: 15px 0;
	font-size: 14px;
	background: #eeffff;
	color: #2b2b2b;
}
h1 {
	text-align: center;
	font-size: 24px;
	margin-bottom: 15px;
}
</style>
