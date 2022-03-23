$(function() {

  var ww = $(window).width();
  $(".header-cover>nav").hide();
  $(".header-cover>nav").css("left", ww+"px")

  $(".menu-icon").click(function() {
    $(".header-cover>nav").show();
    $(".header-cover>nav").animate({left:"0"}, 1000);
  });

  $(".close-button").click(function() {
    $(".header-cover>nav").animate({left: ww+"px"}, 1000, function() {
      $(".header-cover>nav").hide();
    });
  })
})
