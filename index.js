$(document).ready(function(){
	console.log("this works")

		$(".name-and-title").hide().fadeIn(5000);

		$(".second-project").on("mouseover", function() {

			var width = $(this).width();

			console.log("the width of the 2nd project div is " + width + "px");

			var tooltip = $(this).children(".tooltip");

			console.log(tooltip);

			tooltip.css("width", width);

		})

	
});




	



