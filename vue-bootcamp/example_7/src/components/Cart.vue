<template>
	<div>
		<div>
			<ul>
				<li v-for="item in cart" :key="item.id" class="price-row">
					<div>{{ item.name }}</div>
					<div class="quantity-row">
						<div class="price-quantity">Qty: {{ item.qty }}</div>
						<div>{{ priceFormatted(item.price * item.qty) }}</div>
					</div>
				</li>
			</ul>
		</div>

		<div class="price-row">
			<div class="price-label">Sub-total</div>
			<div class="price-wrapper">{{ priceFormatted(subTotal) }}</div>
		</div>
		<div class="price-row">
			<div class="price-label">Shipping</div>
			<div class="price-wrapper">$9.99</div>
		</div>
		<div class="price-row">
			<div class="price-label">Total</div>
			<div class="price-wrapper">{{ priceFormatted(total) }}</div>
		</div>
		<button class="checkout-button">CHECKOUT</button>
	</div>
</template>

<script>
// import EventBus from '../bus';
export default {
	props: {
		cart: Array,
	},
	computed: {
		subTotal() {
			if (this.cart.length) {
				return this.cart.reduce(
					(acc, curVal) => acc + curVal.qty * curVal.price,
					0
				);
			} else {
				return 0;
			}
		},
		total() {
			if (this.subTotal) {
				return this.subTotal + 999;
			} else {
				return 0;
			}
		},
	},
	methods: {
		priceFormatted(num) {
			return '$' + num / 100;
		},
	},
};
</script>

<style scoped>
.quantity-row {
	display: flex;
}
.price-quantity {
	margin-right: 15px;
}
.checkout-button {
	width: 100%;
	text-align: center;
	padding: 10px 0;
	background: #000;
	color: #eee;
}
.price-row {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	margin: 10px;
	padding-bottom: 10px;
}
</style>
