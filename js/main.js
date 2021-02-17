$(document).ready(function(){
	$('header .header').each(function(index, elemento){
		$(this).css({
			'margin-top': '-300px'
		});

		$(this).animate({
			'margin-top': '0'
		}, 2000 + (index * 500));
	});
});