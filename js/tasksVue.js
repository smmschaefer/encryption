new Vue({
  el: '#tasks',
  data: {
	  tasks: [
	      { body: 'Go to store', completed: false },
		 { body: 'Buy food', completed: false },
		  { body: 'Go home', completed: false }
	  ]
  },
  
  methods: {
	  taskToggle: function(task) {
		  task.completed =  !task.completed;
	  }
  }
})
