$(document).ready(function(){
	console.log("this works")
	
	var $window = $(window);

	function checkWidth() {
		var windowSize = $window.width();
		if(windowSize < 600) {
			$(".tooltip").css("display", "none");
		}
	}

	var projects = document.getElementsByClassName("project");
	console.log(projects);

	setTimeout(function() {
		$(".name-and-title").hide().fadeIn(3000);
	}, 700);
	
	checkWidth();

	$window.resize(checkWidth);		
});





	



