$(document).ready(function(){
	console.log("this works")
	
	$(".second-project").on("mouseover", function() {
		var width = $(this).width();
		// console.log("the width of the 2nd project div is " + width + "px");
		var tooltip = $(this).children(".tooltip");
		tooltip.css("width", width);
	});

	setTimeout(function() {

		$(".name-and-title").hide().fadeIn(6000);

	}, 700);
				
});






	



