var aList = new Vue({
  el: '#tfList',
  data: {
    items: [
      { message: ' Easy to change, on demand' },
      { message: 'Short term commitments' },
      { message: 'Affordable' },
      { message: 'Very flexible' },
	  { message: 'Rich media (video, photos)' }
    ],
	
	moreItems: [
        { message: 'Hard to Change' },
        { message: 'Long term commitments' },
        { message: 'Expensive' },
        { message: 'Lacks customer engagement' },
  	    { message: 'Fixed on dynamic media' }
	]
  }
})


/*

var listIt = Vue.extend({
	data: function() {
		items: [],
		countItems: 0
	},
	
	ready: function() {
		this.loadItems();
		
		this.countItems();
	}.
	
	methods: {
		loadItems: funciton() {
			
		},
		
		countItems: function () {
			
		}
	},
	
	template: '<ul><li v-for="item in items">{{ item.message }}</li></ul>'
});*/






		 
		 
		
		 
	