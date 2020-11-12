
// $("button")on("click", function(){

	$(".main-head").fadeOut(1000).fadeIn(1000);
	

	$(".intro-desc").animate({
		height:400,
		width:500, 
		opacity:0.5
	}, 3000 );

// });

$("#intro.p").hover( function(){

$(this).fadeOut(100);
$(this).fadeIn(500);
});