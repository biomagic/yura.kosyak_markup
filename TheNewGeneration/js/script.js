$(document).ready(function() {

	$(".categories__li:first").toggleClass("open");

	$(".categories__li").on('click', function(event) {
		event.preventDefault();
		if ($(this).find(".submenu").css("visibility") == "hidden") {
			$(".categories__li").removeClass("open").find(".submenu").css("visibility", "hidden");
			$(this).toggleClass("open").find(".submenu").css("visibility", "visible");
		} else {
			$(".categories__li").removeClass("open");
			$(this).find(".submenu").css("visibility", "hidden");
		}		
	});
})
