$(document).ready(function(){
	console.log("this works");

	$(".name-and-title").hide();

	setTimeout(function() {
		$(".name-and-title").fadeIn(3000);
	}, 700);
	
	var $window = $(window);

	function checkWidth() {
		var windowSize = $window.width();
		if(windowSize < 600) {
			$(".tooltip").css("display", "none");
		}
	}

	var projects = document.getElementsByClassName("project");
	console.log(projects);

	
	checkWidth();

	$window.resize(checkWidth);		
});





	



