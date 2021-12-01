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
			<div class="price-wrapper">
				<span v-if="subTotal > 0">{{ priceFormatted(subTotal) }}</span>
				<span v-else>N/A</span>
			</div>
		</div>
		<div class="price-row">
			<div class="price-label">Shipping</div>
			<div class="price-wrapper">
				<span v-if="subTotal > 0">{{ priceFormatted(shipping) }}</span>
				<span v-else>TBD</span>
			</div>
		</div>
		<div class="price-row">
			<div class="price-label">Total</div>
			<div class="price-wrapper">
				<span v-if="subTotal > 0">{{ priceFormatted(total) }}</span>
				<span v-else>N/A</span>
			</div>
		</div>
		<button class="checkout-button">CHECKOUT</button>
	</div>
</template>

<script>
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
		shipping() {
			return this.cart.reduce((acc, curVal) => acc + curVal.qty * 399, 0);
		},
		total() {
			return this.subTotal ? this.subTotal + this.shipping : 0;
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
