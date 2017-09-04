// toggle class scroll 
$(window).scroll(function() {
    if($(this).scrollTop() > 50)
    {
        $('.navbar-trans').addClass('afterscroll');
    } else
    {
        $('.navbar-trans').removeClass('afterscroll');
    }  

});

//===card-flipper=====
//document.querySelector(".card-flip").toggle("flip");

$(document).ready(function(){
	$("#testimonial-slider").owlCarousel({
		items:3,
		itemsDesktop:[1199,2],
		itemsDesktopSmall:[979,2],
		itemsTablet:[768,2],
		itemsMobile:[600,1],
		pagination:true,
		navigation:false,
		navigationText:["",""],
		slideSpeed:1000,
		autoPlay:true,
		
		
		loop:true,
		margin:10,
		autoplayTimeout:1000,
		autoplayHoverPause:true
	});
});