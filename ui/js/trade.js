$(function() {

  // menu

  $(".homes, .homes-sub").hide();

  $(".homes-button").click(function() {
    $(".homes-sub").slideUp();
    $(".homes").slideDown();
  });

  $(".homes-sub-button").click(function() {
    $(".homes").slideUp();
    $(".homes-sub").slideDown();
  });

  $(".homes-close-button").click(function() {
    $(".homes, .homes-sub").slideUp();
  });

  $(window).scroll(function() {

		var scrollTopval = $(this).scrollTop();
		if(scrollTopval >= 100) {

			$(".homes, .homes-sub").stop().slideUp();
		}
	});

  // items
  
   var multi= 0;
  
  function trade_next() {
	multi++;
	if(multi>11) {
		return false;
	}
	 else {
		$(".trade-items").animate({left: -270*multi+"px"}, 1000);
	 }
  }

	$(".trade-next").click(trade_next);
  
  function trade_prev() {
	multi--;
	// alert(multi)
	if(multi<0) {
		return false;
	}
	 else {
		var ww = $(".trade-items").css("left")
		// alert(ww)
		var ww1 = parseInt(ww) + 270
		// alert(ww1)
		$(".trade-items").animate({left:ww1 +"px"}, 1000);
	 }
  }

	$(".trade-prev").click(trade_prev);
  
  
  
  
});
