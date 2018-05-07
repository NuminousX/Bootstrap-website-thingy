/*==========================================================
							SKILLS
==========================================================*/
$(function() {

	// initiates the WOW.js library
              new WOW().init();
        

});
/*==========================================================
							WORK
==========================================================*/
$(function(){
$("#work").magnificPopup({
delegate: 'a', // child items selector, by clicking on it popup will open
type: 'image',
  gallery:{
    enabled:true
  }
// other options

});
});
/*==========================================================
							TEAM
==========================================================*/
$(function(){
  $("#team-members").owlCarousel({
  	items: 3,
   	autoplay: true,
  	smartSpeed: 700,
  	loop: true,
  	autoplayHoverPause: true,
  });
});
/*==========================================================
							Testimonials
==========================================================*/
$(function(){
  $("#customers-testimonials").owlCarousel({
  	items: 1,
  	autoplay: true,
  	smartSpeed: 700,
  	loop: true,
  	autoplayHoverPause: true,
  });
});




/* SCROLLMAGIC */ 

// $(document).ready(function(){
// 	//Init ScrollMagic
// 	const controller = new ScrollMagic.Controller();
// 	// building a scene
// 	const ourScene = new ScrollMagic.Scene({
// 		triggerElement: '.content-title'
		

// 	})
// 	.setClassToggle('.content-title','fade-in') // add class fade in on scroll
// 	.addIndicators({}) // requires plugin
// 	.addTo(controller);

// });