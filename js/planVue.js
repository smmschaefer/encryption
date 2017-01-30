new Vue ({
	el: '#plan',
	
	data:
	{
		plans: [
			{ name: 'Awesome', price: 100 },
			{ name: 'Good', price: 50 },
			{ name: 'Ok', price: 0 }
		],
		
		active: {}
	},
	
	components: {
		plan: {
			template: '#plan-template',
			
			props: ['plan', 'active'],
			
			computed: {
				isUpgrade: function () {
					return this.plan.price > this.active.price;
				}
			},
			
			methods: {
				setActivePlan: function () {
					this.active = this.plan;
				}
			}
			
		}
	}
	
	
})