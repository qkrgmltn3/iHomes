$(function() {
	
	$(".sm-img1>li").click(function() {
		var src = $(".img", this).attr("src");
		$(".lg-img1").attr("src", src);
	});
	
	$(".sm-img2>li").click(function() {
		var src = $(".img", this).attr("src");
		$(".lg-img2").attr("src", src);
	});
	
	$(".sm-img3>li").click(function() {
		var src = $(".img", this).attr("src");
		$(".lg-img3").attr("src", src);
	});
	
	$(".sm-img4>li").click(function() {
		var src = $(".img", this).attr("src");
		$(".lg-img4").attr("src", src);
	});
	
	$(".sm-img5>li").click(function() {
		var src = $(".img", this).attr("src");
		$(".lg-img5").attr("src", src);
	});
	
	$(".sm-img6>li").click(function() {
		var src = $(".img", this).attr("src");
		$(".lg-img6").attr("src", src);
	});
});