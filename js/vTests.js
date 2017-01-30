Vue.component('counter', {
	template: '#counter-template',
	
	props: ['subject'],
	
	data: function () {
		return { count: 0 };
	}
});

new Vue({
	el: '#app',
	
	/*
	data: {
			message: '',
			//count: 0
		},
		
		methods: {
			
			
			handleIt: function () {
					alert('handle test');
				}	
		}*/
});


/*
			updateCount: function () {
				this.count += 1;
			},*/