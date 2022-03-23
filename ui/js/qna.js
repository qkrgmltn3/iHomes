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

  // tap

  $(".tap").hide();

	$(".qna>li").click(function() {
		$(".tap").slideUp();
    $(".tap", this).slideDown();
	});

});
