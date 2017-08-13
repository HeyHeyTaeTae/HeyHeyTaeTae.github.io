$(document).ready(function(){
	console.log("this works")
	
	$(".first-project").on("mouseover", function() {
		var width = $(this).width();
		// console.log("the width of the 2nd project div is " + width + "px");
		var tooltip = $(this).children(".tooltip");
		tooltip.css("width", width);
	});

	$(".second-project").on("mouseover", function() {
		var width = $(this).width();
		// console.log("the width of the 2nd project div is " + width + "px");
		var tooltip = $(this).children(".tooltip");
		tooltip.css("width", width);
	});

	$(".third-project").on("mouseover", function() {
		var width = $(this).width();
		// console.log("the width of the 2nd project div is " + width + "px");
		var tooltip = $(this).children(".tooltip");
		tooltip.css("width", width);
	});

	setTimeout(function() {

		$(".name-and-title").hide().fadeIn(3000);

	}, 700);
				
});






	



