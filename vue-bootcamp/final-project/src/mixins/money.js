export default {
	methods: {
		formatMoney(num) {
			let dollar = num / 100;
			return (
				'$ ' +
				dollar.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			);
		},
	},
};
