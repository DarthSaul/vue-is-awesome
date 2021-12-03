import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// GLOBAL MIXIN EXAMPLE
// Vue.mixin({
// 	methods: {
// 		formatMoney(num) {
// 			return '$' + num / 100;
// 		},
// 	},
// });

// GLOBAL FILTER EXAMPLE
Vue.filter('capitalize', function (text, prefix) {
	return prefix + text.charAt(0).toUpperCase() + text.slice(1);
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
