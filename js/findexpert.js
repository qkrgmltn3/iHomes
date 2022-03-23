$(function() {

  $(".popup-cover").hide();

  $(".paint").click(function() {
    $(".popup-cover").fadeIn();
  });

  $(".popup-close").click(function() {
    $(".popup-cover").fadeOut();
  });

  $(".popup-next").click(function() {
    $(".popup-imgs").animate({left:"-715px"}, 1000, function() {
      $(".popup-imgs>li:first").appendTo(".popup-imgs");
      $(".popup-imgs").css("left", "0px");
    });
  });

    $(".popup-prev").click(function() {
      $(".popup-imgs>li:last").prependTo(".popup-imgs");
      $(".popup-imgs").css("left", "-715px");
      $(".popup-imgs").animate({left:"0px"}, 1000);
    });
})
