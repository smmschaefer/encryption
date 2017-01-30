

new Vue ({
	el: '#compApp',
	
	data: {
		points: '800',
	},
	
	computed: {
		skill: function () {
			if(this.points <= 100)
			{
				return 'new comer';
			} else if(this.points <= 500){
				return 'Knows your way around';
			} else {
				return 'master';
			}
		}
	}
})