$(document).ready(function(){
	const CLICK = 'click';
	let navbar = $('#navbar');
	let navButton = $('#nav-button');
	let navUlList = $('#navbar .inline-list');
	let navLis = navUlList.children();
	let isInPcMode = true;
	$(window).resize(respondToMediaQuery);
	respondToMediaQuery();

	function respondToMediaQuery(){
		if(navButton.css('display') === 'none'){
			navUlList.addClass('u-pull-right');
			navLis.removeClass('responsive-li');
			navUlList.addClass('inline-list');
			navUlList.css('display', 'inline-block');//override inline styling by slide toggle.
			isInPcMode = true;
		}else{			
			navUlList.removeClass('u-pull-right');
			navLis.addClass('responsive-li');
			navUlList.addClass('inline-list-responsive');
			isInPcMode = false;
		}
	}
	navButton.on(CLICK, function(){
		navUlList.slideToggle(500);
	});
});
