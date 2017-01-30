//Flips a div element

//@import url('/css/main.css');


$(document).ready(function() {
		
	$("#linkReport").on('click', function() {
			$('#divHome').delay(100).fadeOut(300)
			$('#divTest').delay(100).fadeOut(300)
			$('#divCode').delay(100).fadeOut(300)
			
			$('#divReport').delay(800).fadeIn(700)
			$('.secFlip').delay(400).animate({height: 600}, 700)	
	});	
	
	$("#linkTest").on('click', function() {
			$('#divHome').delay(100).fadeOut(300)
			$('#divReport').delay(100).fadeOut(300)
			$('#divCode').delay(100).fadeOut(300)

			$('#divTest').delay(800).fadeIn(700)
			$('.secFlip').delay(400).animate({height: 600}, 700)
	});	
	
	$("#linkCode").on('click', function() {
			$('#divHome').delay(100).fadeOut(300)
			$('#divTest').delay(100).fadeOut(300)
			$('#divReport').delay(100).fadeOut(300)
		
			$('#divCode').delay(800).fadeIn(700)
			$('.secFlip').delay(400).animate({height: 600}, 700)
	});	
		
		/////////////////////////////
		///		INSIDE LINKS FOR DATA
		/////////////////////////////
		
	
});

