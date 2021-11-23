// Vue.component('first-component', {
// 	props: {},
// 	template: `<div>{{message}}</div>`,
// 	data() {
// 		return {
// 			message: 'Hello, world!!!',
// 		};
// 	},
// 	methods() {
// 		return {};
// 	},
// });

// Vue.component('title-text', {
// 	props: ['userId', 'link'],
// 	template: `
//         <div>
//             <slot name='something'></slot>
//             <p>{{ link.title }}<p>
//             <slot></slot>
//             <p>{{ userId }}</p>
//         </div>
//     `,
// 	data() {
// 		return {};
// 	},
// });

Vue.component('size-title', {
	props: {
		textSize: {
			type: String,
		},
	},
	template: `
    <p :style="{fontSize: textSize + 'px'}">
        <slot></slot>
    </p>
    `,
});
Vue.component('my-list', {
	props: ['list'],
	template: `
    <div>
        <h1><slot></slot></h1>
        <ul> 
            <li 
                v-for="(name, ind) in list.names"
                :key="ind"
            >{{ name }}</li>
        </ul>
    </div>
    `,
});
Vue.component('my-site', {
	template: `
    <div>
        <slot name="header"></slot>
        <br>
        <slot name="body"></slot>
        <br>
        <slot name="footer"></slot>
    </div>
    `,
});

const app = new Vue({
	el: '#app',
	data: {},
});
