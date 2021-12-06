import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import money from './mixins/money';

Vue.config.productionTip = false;

Vue.mixin(money);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
