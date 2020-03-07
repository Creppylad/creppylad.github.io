$(document).ready(function() {

	$('.nav-btn').click(function() {
	  
		if($('.navoverlay').css("margin-left") == "-300px") 
		{
			$('#navbarheader').animate({"margin-top": '-70px'}, 500);
			$('.navoverlay').animate({"margin-left": '0px'}, 250);
			
			$('#darken').addClass("effecton");
			$('#darken').removeClass("effectoff")
		}
		else {
			$('.navoverlay').animate({"margin-left": '-300px'}, 200);
		}
	});
  
	$('.nav-btn-close').click(function() {

		if($('.navoverlay').css("margin-left") == "-300px") 
		{
			$('.navoverlay').animate({"margin-left": '0px'}, 200);
			
		}
		else {
			$('#navbarheader').animate({"margin-top": '0px'}, 500);
			$('.navoverlay').animate({"margin-left": '-300px'}, 200);;
			$('#darken').addClass("effectoff");
			$('#darken').removeClass("effecton")
		}
	});
});