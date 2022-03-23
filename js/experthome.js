$(function() {
	
	$(".fade").hide();
	
	$(".mouseover").mouseover(function() {
		$(".fade", this).stop().fadeIn();
	});
	
	$(".mouseover").mouseout(function() {
		$(".fade", this).stop().fadeOut();
	});
	
});