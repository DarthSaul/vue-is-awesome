const app = new Vue({
	el: '#app',
	data: {
		nav: [
			{ title: 'Home', link: '#home' },
			{
				title: 'About',
				link: '#about',
				subLinks: [
					{ title: 'Story', link: '#story' },
					{ title: 'Team', link: '#team' },
				],
				toggle: false,
			},
			{
				title: 'Services',
				link: '#services',
				subLinks: [
					{ title: 'Audio', link: '#audio' },
					{ title: 'Video', link: '#video' },
					{ title: 'Web', link: '#web' },
				],
				toggle: false,
			},
		],
	},
	methods: {
		toggleLink(item) {
			if (item.subLinks) {
				item.toggle = !item.toggle;
			}
		},
	},
});
