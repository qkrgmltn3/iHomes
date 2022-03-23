$(function() {
	
	$(".homes-hover").hide();
	
	$(".contents>section").mouseover(function() {
		$(".homes-hover", this).stop().fadeIn(500);
	});
	
	$(".contents>section").mouseout(function() {
		$(".homes-hover", this).stop().fadeOut(500);
	});

});