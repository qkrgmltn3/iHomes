$(function() {

	$(".bg2, .bg3").hide();
	
	$(window).scroll(function() {
		
		var scrollTopval = $(this).scrollTop();
		// alert(scrollTopval);
		if(scrollTopval >= 300) {
			$(".bg2").fadeIn("slow");
		}
		if(scrollTopval >= 1000) {
			$(".bg3").fadeIn("slow");
		}
	});

});