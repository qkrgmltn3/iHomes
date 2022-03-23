$(function() {

  var ww = $(window).width();

	$(".slide>div").css("width",ww+"px");

	$(".slide>div").not(":eq(0)").css("left", ww+"px");

	var now = 0;
	var slideImg = 2;

	function rightSide() {
		$(".slide>div").not(":eq("+now+")").css("left",ww+"px");
		now = now == slideImg ? 0 : now+= 1;
		$(".slide>div").eq(now-1).animate({left:-ww+"px"},1000);
		$(".slide>div").eq(now).animate({left:"0px"},1000,function() {
			$(".slide>div").not(":eq("+now+")").css("left",ww+"px")
		});
	}

  function leftSide() {
    var slideImage = 0;
    $(".slide>div").not(":eq("+now+")").css("left",-ww+"px");
		now = now == slideImage ? 2 : now-= 1;
		if( now == 2 ) {
			$(".slide>div").eq(0).animate({left:ww+"px"}, 1000);
		}
		else {
			$(".slide>div").eq(now+1).animate({left:ww+"px"}, 1000);
		}

		$(".slide>div").eq(now).animate({left:"0px"}, 1000, function() {
			$(".slide>div").not(":eq("+now+")").css("left",-ww+"px");
		});
	};

  $(".next").click(rightSide);
  $(".prev").click(leftSide);

});
