/*------------------------------------------------------------------
Project:    Balance Single Page Theme
Author:     Frank John
Version:    1.0
-------------------------------------------------------------------*/



/*============================================== /*
		Loader
/*============================================== */

$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})



/*============================================== /*
		Navigation Bar
/*============================================== */

/* Auto close navbar on click (mobile menu) */

$(".navbar-nav > li > a").click(function() {
    $(".navbar-collapse").collapse('hide');
});


/* Change navbar class on scroll */

$(".wrapper").waypoint(function() {
    $(".navbar").toggleClass("js-navbar-top");
    $(".navbar.js-toggleClass").toggleClass("navbar-default navbar-inverse");
    return false;
}, { offset: "-20px" });


/* Change navbar class on collapse/uncollapse in its top position */

$('.wrapper .navbar-collapse').on('show.bs.collapse', function () {
    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});

$('.wrapper .navbar-collapse').on('hide.bs.collapse', function () {
    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});

/**
 * Smooth scroll to anchor
 */

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 20) // 20px offset for navbar menu
                }, 1000);
                return false;
            }
        }
    });
});


/*==============================================/*
		 Video popup, Gallery
/*==============================================*/

$('.video-popup').magnificPopup({
    type: 'iframe',
  });

//For video Section
$('.video-pop-up').magnificPopup({
    type: 'iframe',
  });




/* ==============================================
        Owl Carousel
=============================================== */

		 $("#carousel-our-clients").owlCarousel({
     stopOnHover: true,
        navigation: false,
				pagination:false,
        paginationSpeed: 1000,
        goToFirstSpeed: 3500,
	slideSpeed : 800,
        autoPlay: 3000,
        items : 5,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [979,3],
		itemsTablet :	[768,3],
		itemsMobile :	[479,2],

    });	
		

/* ====================================================================== */
/*	//Parallax using Stellar
/* ====================================================================== */	

  $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
        scrollProperty: 'scroll',
        parallaxElements: false,
        horizontalOffset: 0,
        verticalOffset: 0
      });
			
			

/* ==============================================
        Facts and figures Counters
=============================================== */
		
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/* ==============================================
  A JQuery plugin for fluid width video embeds
=============================================== */

   $('body').fitVids();

/* ==============================================
Resize Function For Full width image text column
=============================================== */
var resizeBackground = function() {

			$( ' .two-cols-description-image > img' ).each(function( i, el ) {

				var $el       = $( el ),
					$section  = $el.parent(),
					min_w     = 350,
					el_w      = el.tagName == 'VIDEO' ? el.videoWidth : el.naturalWidth,
					el_h      = el.tagName == 'VIDEO' ? el.videoHeight : el.naturalHeight,
					section_w = $section.outerWidth(),
					section_h = $section.outerHeight(),
					scale_w   = section_w / el_w,
					scale_h   = section_h / el_h,
					scale     = scale_w > scale_h ? scale_w : scale_h,
					new_el_w, new_el_h, offet_top, offet_left;

				if ( scale * el_w < min_w ) {
					scale = min_w / el_w;
				}

				new_el_w = scale * el_w;
				new_el_h = scale * el_h;
				offet_left = ( new_el_w - section_w ) / 2 * -1;
				offet_top  = ( new_el_h - section_h ) / 2 * -1;

				$el.css( 'width', new_el_w );
				$el.css( 'height', new_el_h );
				$el.css( 'marginTop', offet_top );
				$el.css( 'marginLeft', offet_left );
			});

		};

		$(document).ready(function() {
			resizeBackground();
		});
		
        $(window).load(function() {
           resizeBackground();
        });
        
        $( window ).resize(function() {
          resizeBackground();
       });
        
        /* ---------------------------------------------- /*
        * FULL SCREEN DIVS
        /* ---------------------------------------------- */
        
       $(document).ready(function() {
			$(".fl_scrn").css("width", $(window).width());
           $(".fl_scrn").css("height", $(window).height());
		});
        
         $( window ).resize(function() {
          $(".fl_scrn").css("width", $(window).width());
           $(".fl_scrn").css("height", $(window).height());
       });
 		/* ---------------------------------------------- /*
		 * WOW ANIMATION
		/* ---------------------------------------------- */        
          new WOW().init();
		/* ---------------------------------------------- /*
		 * Scroll top
		/* ---------------------------------------------- */

		$(window).scroll(function() {
			if ($(this).scrollTop() > 300) {
				$('.scroll-up').addClass('scroll-top-show');
			} else {
				$('.scroll-up').removeClass('scroll-top-show');
			}
		});

		$('a[href="#totop"]').on('click', function() {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});