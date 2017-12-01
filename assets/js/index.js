$(document).ready(function(){
	const CLICK = 'click';
	let navbar = $('#navbar');
	let navButton = $('#nav-button');
	let navUlList = $('#navbar .inline-list');
	let navLis = navUlList.children();
	let logo = $('#logo');
	let aboutUsTag = $('.about-us-card');
	let isInPcMode = true;
	$(window).resize(respondToMediaQuery);
	respondToMediaQuery();
	navButton.on(CLICK, function(){
		navUlList.slideToggle(500);
	});
	aboutUsTag.hover(function(){
		$(this).children('i').css('color', 'white');//problem due to specificity, so added style directly.
	}, function(){
		$(this).children('i').css('color','#549933');
	});
	navLis.each(function(){
		let currentLi =  $(this);
		let target = $(currentLi.children('a').attr('href'));
		console.log("Tarfet: "+target.offset().top);

		currentLi.on(CLICK, function(){
			$('html,body').animate({
				'scrollTop': target.offset().top - 60
			}, 650);
		});

	});


	function respondToMediaQuery(){
		if(navButton.css('display') === 'none'){
			navUlList.addClass('u-pull-right');
			navLis.removeClass('mobile-li');
			navUlList.addClass('inline-list');
			navUlList.removeClass('inline-list-responsive');
			navUlList.css('display', 'inline-block');//override inline styling by slide toggle.
			isInPcMode = true;
			changeNavUlContents(false);
		}else{			
			navUlList.removeClass('u-pull-right');
			navLis.addClass('mobile-li');
			navLis.removeClass('inline-list')
			navUlList.addClass('inline-list-responsive');
			isInPcMode = false;
			changeNavUlContents(true);
		}
	}	
	function changeNavUlContents(toContainer){
		navUlList.detach();
		if(toContainer){			
			navUlList.appendTo(navbar);
		}else{
			navUlList.insertAfter(logo);
		}
	}
});
