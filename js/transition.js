$(function() {
	$('.whoSwitch').on('click', function() {
		$('#divHome').delay(100).fadeOut(700);
		$('.secFlip').delay(200).animate({height: 0}, 600)
		$('#wrapper').delay(400).animate({
			'width': '100%',
			'margin-left': '0%'
		}, 800);
		$('#footer').delay(100).animate({
			'width': '100%',
			'margin-left': '0%'
		}, 300);
		$('li').css({
			'color': 'black'
		});
		$('h2').css({
			'color': 'black',
			'text-shadow': '0px 0px 0px white'
		});
		$('#divWhoWeAre').delay(200).fadeIn(800)
	});
});