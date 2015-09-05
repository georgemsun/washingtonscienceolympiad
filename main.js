var main = function() {
	$('.main').css('height', $(window).innerHeight()*.88);
	$('.main h1').css('padding',$ (window).innerHeight()*0.19 + ' 0 ' + $(window).innerHeight()*0.12 + ' 0');
}

var nav = function() {
	$('.nav > li').bind('mouseover', function() {
		$(this).find('ul').css('visibility', 'visible');
	});
	$('.nav > li').bind('mouseout', function() {
		$(this).find('ul').css('visibility', 'hidden');
	});				
}

$(document).ready(main);
$(document).ready(nav);

// $(window).resize(main);