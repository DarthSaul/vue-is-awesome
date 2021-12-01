<template>
	<div class="wrapper">
		<h1>The Cup Store</h1>

		<Product
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>

		<Cart :cart="cart" />
	</div>
</template>

<script>
import EventBus from '../bus';

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
					qty: 1,
					name: 'Colorful Cups',
					price: 499,
					image: 'https://images.unsplash.com/photo-1611274757139-03ff1736701d',
				},
				{
					id: 2,
					qty: 1,
					name: 'Coffee & Home',
					price: 999,
					image: 'https://images.unsplash.com/photo-1578250036464-069746676fdd',
				},
				{
					id: 3,
					qty: 1,
					name: 'Old Red Friend',
					price: 2000,
					image: 'https://images.unsplash.com/photo-1561150547-f70dea3fa4f3',
				},
			],
			cart: [],
		};
	},
	mounted() {
		EventBus.$on('add-product', (product) => {
			if (this.cart.find((el) => el.id == product.id)) {
				this.cart[this.cart.findIndex((el) => el.id == product.id)]
					.qty++;
			} else {
				this.cart.push(product);
			}
		});
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
