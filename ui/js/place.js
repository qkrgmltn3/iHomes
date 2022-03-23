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

  //items

  function item() {
    $(".livingroom-items").animate({left: "-87px"}, 1000, function() {
      $(".livingroom-items>li:first").appendTo(".livingroom-items");
      $(".livingroom-items").css("left", "0");
    });

  }
  setInterval(item, 2000);

  function item2() {
    $(".livingroom-items2").animate({left: "-87px"}, 1000, function() {
      $(".livingroom-items2>li:first").appendTo(".livingroom-items2");
      $(".livingroom-items2").css("left", "0");
    });

  }
  setInterval(item2, 2000);

  function item3() {
    $(".livingroom-items3").animate({left: "-87px"}, 1000, function() {
      $(".livingroom-items3>li:first").appendTo(".livingroom-items3");
      $(".livingroom-items3").css("left", "0");
    });

  }
  setInterval(item3, 2000);

  // content-next

  var ww = $(window).width();

  $(".livingroom").not(":eq(0)").css("left", ww+"px");

  var now=0;
  var slide=2;

  function livingrooom_next() {
    $(".livingroom").not(":eq("+now+")").css("left", ww+"px");
    now = now == slide ? 0 : now+=1;
    $(".livingroom").eq(now-1).animate({left: -ww+"px"}, 1000);
    $(".livingroom").eq(now).animate({left: "0px"}, 1000);
  }

  function livingrooom_prev() {
    slide = 0
    $(".livingroom").not(":eq("+now+")").css("left", -ww+"px");
    now = now == slide ? 2 : now-=1;
    if(now == 2) {
      $(".livingroom").eq(0).animate({left: ww+"px"}, 1000);
    }

    else {
      $(".livingroom").eq(now+1).animate({left: ww+"px"}, 1000);
    }

      $(".livingroom").eq(now).animate({left: "0px"}, 1000, function() {
        $(".livingroom").not(":eq("+now+")").css("left", -ww+"px");
      });
  }

  $(".livingroom-next").click(livingrooom_next);
  $(".livingroom-prev").click(livingrooom_prev);

});
