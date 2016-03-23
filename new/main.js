var nav = function() {
	// $('.nav > ul> li, .menu').bind('mouseover', function() {
	// 	$('.menu').css('visibility', 'visible');
	// });
	// $('.nav > ul > li, .menu').bind('mouseout', function() {
	// 	$('.menu').css('visibility', 'hidden');
	// });
	$('#dropdown_hide').click(function() {
		$('div.dropdown').slideUp('slow', 'swing');
	});
	$('.nav > ul > li a').click(function() {
		$('div.dropdown').slideDown('slow', 'swing');
	});
}

$(document).ready(nav);