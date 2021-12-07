<template>
	<div class="balance">
		<h2 class="text-xl">
			Account balance:
			<strong
				:class="[
					'mx-2',
					getTotal > 0 ? 'text-green-600' : 'text-red-600',
				]"
				>{{ formatMoney(getTotal) }}</strong
			>
		</h2>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			style: null,
		};
	},
	computed: {
		...mapGetters(['getTotal']),
	},
};
</script>
