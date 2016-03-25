var html = function() {
	$('#javascript').remove();
	$('#html').html('<link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500, 700, 900" rel="stylesheet" type="text/css">');
	$('#nav').html('<div class="nav"><a href="index.html"><img src="logo.png" width="100px"></a><span class="title">Washington Science Olympiad</span><ul><li><a href="#">Menu <i class="material-icons">menu</i></a></li></ul></div><div class="dropdown"><table><tr><td>About</td><td>Tournaments</td><td>Contribute</td><td>State Board</td></tr><td><a href="#">About Science Olympiad</a></br><a href="#">Meetings and Workshops</a></td><td><a href="#">Register</a></br><a href="#">List of Tournaments</a></br><a href="#">Tournament Schedule</a></br><a href="#">Results History</a></td><td><a href="#">Volunteer</a></br><a href="#">Coach</a></br><a href="#">Donate</a></td><td><a href="#">Board of Directors</a></br><a href="#">Board Nominations</a></br><a href="#">State By-Laws</a></td><tr></tr><tr><td colspan="5"><i class="material-icons">keyboard_arrow_up</i></td></tr></table></div>');
	$('#footer').html('<div class="footer"><p>Find us on <a href="https://www.facebook.com/washingtonscienceolympiad/" target="blank_">Facebook</a> and join the <a href="https://www.facebook.com/groups/washingtonscienceolympiad/" target="blank_">group</a> for students, coaches, parents, and alumni!</p><p class="copyright">&copy; Washington Science Olympiad 2016 &ndash; All Rights Reserved</p></div>');
}

var nav = function() {
	var dropdown = 0;
	$('.nav > ul > li a').click(function() {
		if(dropdown == 0) {
			$('div.dropdown').slideDown('slow', 'swing');
			dropdown = 1;
		}
		else if(dropdown == 1) {
			$('div.dropdown').slideUp('slow', 'swing');
			dropdown = 0;
		}
	});
	$('.dropdown > table tr:last-child td').click(function() {
		$('div.dropdown').slideUp('slow', 'swing');
		dropdown = 0;
	});
	$(document).scroll(function() {
		if($(document).scrollTop() > 250) {
			$('div.dropdown').slideUp('slow', 'swing');
			dropdown = 0;
		}
	});
}

var tabs = function() {
	$('.tabs > ul > li').on('click', function(e) {
		$('.tabs > .content > .' + $(this).attr('id')).show().siblings().hide();
		$(this).addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
}

var redirect = function() {
	if(document.location.href.indexOf('#') > -1) {
		var redirect_id = document.location.href.substring(document.location.href.lastIndexOf('#') + 1);
		if(redirect_id != '') {
			$('.tabs > .content > div').removeClass('active');
			$('.tabs > .content > .' + redirect_id).addClass('active');
			$('.tabs > .content > .' + redirect_id).show().siblings().hide();
			$('.tabs > ul > li#' + redirect_id).addClass('active').siblings().removeClass('active');	
		}
	}
}

var mobile = function() {
	if($(document).width() < 575) {
		$('.nav > span.title').hide();
	}
	else {
		$('.nav > span.title').show();
	}
}

$(document).ready(html);
$(document).ready(nav);
$(document).ready(tabs);
$(document).ready(redirect);
$(document).ready(mobile);
$(window).resize(mobile);