$(function() {

	// apartment
	// imgs
	
	function apartment_imgs_next() {
	$(".apartment-imgs").animate({left:"-440px"}, 800, function() {
		$(".apartment-imgs>li:first").appendTo(".apartment-imgs");
		$(".apartment-imgs").css("left","0px");
	});
	};
	
	var clear_apartment = setInterval(apartment_imgs_next, 3000);
	
	// bullet
	
	var start = 0;
	var end = 3;
	
	function apartment_bullet() {
		start = start == end ? 0 : start+=1;
		
		$(".apartment-bullets>li").eq(start).addClass("hover");
		$(".apartment-bullets>li").not(":eq("+start+")").removeClass("hover");
	}
	var apartment_bullet_clear = setInterval(apartment_bullet, 3000);
	
	// next
	
	$(".apartment-next").click(function() {
		clearInterval(clear_apartment);
		apartment_imgs_next()
		
		clearInterval(apartment_bullet_clear);
		apartment_bullet();
		
		return false;
	});
	
	// prev
	
	$(".apartment-prev").click( function() {
		clearInterval(clear_apartment);
		$(".apartment-imgs>li:last").prependTo(".apartment-imgs");
		$(".apartment-imgs").css("left","-440px");
		$(".apartment-imgs").animate({left:"0px"}, 800);
		
		clearInterval(apartment_bullet_clear);
		var end = 0;
		start = start == end ? 3 : start-=1;
		$(".apartment-bullets>li").eq(start).addClass("hover");
		$(".apartment-bullets>li").not(":eq("+start+")").removeClass("hover");
	});
	
	
	
	// house
	// imgs
	
	function house_imgs_next() {
	$(".house-imgs").animate({left:"-440px"}, 800, function() {
		$(".house-imgs>li:first").appendTo(".house-imgs");
		$(".house-imgs").css("left","0px");
	});
	};
	
	var clear_house = setInterval(house_imgs_next, 3000);
	
	// bullet
	
	var one = 0;
	var two = 3;
	
	function house_bullet() {
		one = one == two ? 0 : one+=1;
		
		$(".house-bullets>li").eq(one).addClass("hover");
		$(".house-bullets>li").not(":eq("+one+")").removeClass("hover");
	}
	var house_bullet_clear = setInterval(house_bullet, 3000);
	
	//next
	
	$(".house-next").click(function() {
		clearInterval(clear_house);
		house_imgs_next();
		
		clearInterval(house_bullet_clear);
		house_bullet();
		return false;
	});
	
	//prev
	
	$(".house-prev").click( function() {
		clearInterval(clear_house);
		$(".house-imgs>li:last").prependTo(".house-imgs");
		$(".house-imgs").css("left","-440px");
		$(".house-imgs").animate({left:"0px"}, 800);
		
		clearInterval(house_bullet_clear);
		var two = 0;
		one = one == two ? 3 : one-=1;
		$(".house-bullets>li").eq(one).addClass("hover");
		$(".house-bullets>li").not(":eq("+one+")").removeClass("hover");
	});
	
	
	
	// store
	// imgs
	
	function store_imgs_next() {
	$(".store-imgs").animate({left:"-440px"}, 800, function() {
		$(".store-imgs>li:first").appendTo(".store-imgs");
		$(".store-imgs").css("left","0px");
	});
	};
	
	var clear_store = setInterval(store_imgs_next, 3000);
	
	// bullet
	
	var store1 = 0;
	var store2 = 3;
	
	function store_bullet() {
		store1 = store1 == store2 ? 0 : store1+=1;
		
		$(".store-bullets>li").eq(store1).addClass("hover");
		$(".store-bullets>li").not(":eq("+store1+")").removeClass("hover");
	}
	var store_bullet_clear = setInterval(store_bullet, 3000);
	
	//next
	
	$(".store-next").click(function() {
		clearInterval(clear_store);
		store_imgs_next();
		
		clearInterval(store_bullet_clear);
		store_bullet();
		return false;
	});
	
	//prev
	
	$(".store-prev").click( function() {
		clearInterval(clear_store);
		$(".store-imgs>li:last").prependTo(".store-imgs");
		$(".store-imgs").css("left","-440px");
		$(".store-imgs").animate({left:"0px"}, 800);
		
		clearInterval(store_bullet_clear);
		var store2 = 0;
		store1 = store1 == store2 ? 3 : store1-=1;
		$(".store-bullets>li").eq(store1).addClass("hover");
		$(".store-bullets>li").not(":eq("+store1+")").removeClass("hover");
	});
	
	// office
	// imgs
	
	function office_imgs_next() {
	$(".office-imgs").animate({left:"-440px"}, 800, function() {
		$(".office-imgs>li:first").appendTo(".office-imgs");
		$(".office-imgs").css("left","0px");
	});
	};
	
	var clear_office = setInterval(office_imgs_next, 3000);
	
	// bullet
	
	var office1 = 0;
	var office2 = 3;
	
	function office_bullet() {
		office1 = office1 == office2 ? 0 : office1+=1;
		
		$(".office-bullets>li").eq(office1).addClass("hover");
		$(".office-bullets>li").not(":eq("+office1+")").removeClass("hover");
	}
	var office_bullet_clear = setInterval(office_bullet, 3000);
	
	//next
	
	$(".office-next").click(function() {
		clearInterval(clear_office);
		office_imgs_next();
		
		clearInterval(office_bullet_clear);
		office_bullet();
		return false;
	});
	
	//prev
	
	$(".office-prev").click( function() {
		clearInterval(clear_office);
		$(".office-imgs>li:last").prependTo(".office-imgs");
		$(".office-imgs").css("left","-440px");
		$(".office-imgs").animate({left:"0px"}, 800);
		
		clearInterval(office_bullet_clear);
		var office2 = 0;
		office1 = office1 == office2 ? 3 : office1-=1;
		$(".office-bullets>li").eq(office1).addClass("hover");
		$(".office-bullets>li").not(":eq("+office1+")").removeClass("hover");
	});
});