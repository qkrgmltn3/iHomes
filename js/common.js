$(function() {

	//menu

	// $(".menu, .sub-bg").hide();

	$(".menu-icon").click(function() {
		$(".search-cover").stop().slideUp();
		$(".menu, .sub-bg").animate({left:"0px"}, 1000);
	});

	$(".menu-close").click(function() {
		$(".menu, .sub-bg").animate({left:"-300px"}, 1000);
	});

	$(".menu>li").mouseover(function() {
		$(".ad", this).addClass("add");
	});

	$(".menu>li").mouseout(function() {
		$(".ad", this).removeClass("add");
	});
	// search

	$(".search-cover").hide();

	$(".search-icon").click(function() {
		$(".menu, .sub-bg").animate({left:"-300px"}, 1000);
		$(".search-cover").stop().slideDown();
	});

	$(".search-close").click(function() {
		$(".search-cover").stop().slideUp();
	});

	$(window).scroll(function() {

		var scrollTopval = $(this).scrollTop();
		if(scrollTopval >= 300) {
			// $(".menu, .sub-bg").animate({left:"-300px"}, 1000);
			$(".search-cover").stop().slideUp();
		}
	});

});
