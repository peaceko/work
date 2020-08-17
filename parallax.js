
$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.button-a').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.button-b').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#button-b').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.button-c').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#button-c').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.button-d').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#button-d').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	$('a.button-e').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#button-e').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	$('a.button-f').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#button-f').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
		$('a#button-f-v').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#button-f').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	$('a.button-g').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#button-g').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });

 
	

	
	
	
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.1))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#button-b').offset().top - (($('#button-c').offset().top - $('#button-b').offset().top) / 2);
	var section3Top =  $('#button-c').offset().top - (($('#button-d').offset().top - $('#button-c').offset().top) / 2);
	var section4Top =  $('#button-d').offset().top - (($('#button-e').offset().top - $('#button-d').offset().top) / 2);
	var section5Top =  $('#button-e').offset().top - (($('#button-f').offset().top - $('#button-e').offset().top) / 2);
	var section6Top =  $('#button-f').offset().top - (($('#button-g').offset().top - $('#button-f').offset().top) / 2);
	var section7Top =  $('#button-g').offset().top - (($(document).height() - $('#button-g').offset().top) / 2);
	;
	
	$('nav#primary a').removeClass('active');
	$('nav#primary .button-a-s').removeClass('button-ac');
	$('nav#primary .button-b-s').removeClass('button-bc');
	$('nav#primary .button-h-s').removeClass('button-hc');
	$('nav#primary .button-b-v2').removeClass('button-hc');
	$('nav#primary .button-f-s').removeClass('button-hc');
	$('nav#primary .button-f').removeClass('button-hc');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.button-a').addClass('button-ac');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.button-b').addClass('button-bc');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.button-b-v').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.button-c').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.button-d').addClass('active');	
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.button-e').addClass('active');	
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.button-f').addClass('button-hc');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.button-f-v').addClass('active');		
	
	} else if ($(document).scrollTop() >= section7Top){
		$('nav#primary a.button-g').addClass('active');
		
	
	}
	
}
