var main = function() {
	$('.main').css('height', $(window).innerHeight()*.88);
	$('.main h1').css('padding',$ (window).innerHeight()*0.19 + ' 0 ' + $(window).innerHeight()*0.12 + ' 0');
}

$(document).ready(main);

// $(window).resize(main);

// var currentPage = "home";
// if(currentPage == "home") {
// 	$('.home').css('border-bottom', '2px solid white');
// }

$(document).ready(function() {
	$('.nav > li').bind('mouseover', function() {
		$(this).find('ul').css('visibility', 'visible');
		// $(this).fadeTo(fadeOut, 0, function(){ $(this).find('ul').css('visibility', 'visible'); }).fadeTo(fadeIn_menu, 1);
	});
	$('.nav > li').bind('mouseout', function() {
		$(this).find('ul').css('visibility', 'hidden');
		// $(this).fadeTo(fadeOut, 0, function(){ $(this).find('ul').css('visibility', 'hidden'); }).fadeTo(fadeIn_menu, 1);
	});				
});