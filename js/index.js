$(function() {

	// silide

	var ww = $(window).width();
	if (ww<=1200) {ww=1200}
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

	// expert

	$(".expert-imgs>li").click(function() {
		var num = $(this).css("left");
		var num1 = $(this).index();
		for ( i=0; i <= 2; i++ ){
				var left0 = $(".expert-imgs>li").eq(i).css("left")
				if( left0 == "0px") current = i;
			}
		if( num == "980px" ) {
			$(".expert-imgs>li").eq(num1).animate({left:"0px", top:"0", width:"950px", height:"594px", opacity:"1"}, 1000);

			$(".expert-imgs>li").eq(current).animate({left:"980px", width:"90%", height:"90%", opacity:"0.5", top:"30px"}, 1000);
		}
		else if( num == "-885px") {
			$(".expert-imgs>li").eq(num1).animate({left:"0px", top:"0", width:"950px", height:"594px", opacity:"1"}, 1000);

			$(".expert-imgs>li").eq(current).animate({left:"-885px", width:"90%", height:"90%", opacity:"0.5", top:"30px"}, 1000);
		}

	});

	// qna

	$(".qnas>ul").not(":eq(0)").css("left","950px");

	var current = 0;
	var qnaSlide = 2;

	function qna() {
		$(".qnas>ul").not(":eq("+current+")").css("left","950px");

		current = current == qnaSlide ? 0 : current += 1;

		$(".qnas>ul").eq(current-1).animate({left:"-950px"},1000);
		$(".qnas>ul").eq(current).animate({left:"0px"},1000, function() {
			$(".qnas>ul").not(":eq("+current+")").css("left","950px");
		});
	}
	setInterval(qna, 3000);


});
