;(function () {

	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};



	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};


	var screenHeight = function() {

		if ( $(window).width() > 768 && !isMobile.any() ) {
			$('.js-dt, .js-dtc').css('min-height', $(window).height());
		} else {
			$('.js-dt, .js-dtc').css('min-height', '');
		}
		$(window).resize(function(){
			if ( $(window).width() > 768 && !isMobile.any() ) {
				$('.js-dt, .js-dtc').css('min-height', $(window).height());
			} else {
				$('.js-dt, .js-dtc').css('min-height', '');
			}
		});

	};

	var countDown = function() {

		// var d = new Date(new Date().getTime() + 800 * 120 * 120 * 2000);
		// simplyCountdown('.simply-countdown-one', {
		// 	year: d.getFullYear(),
		// 	month: d.getMonth() - 7,
		// 	day: d.getDate()
		// });


		var end = new Date('11/29/2016 11:00 AM');
		var now = new Date(new Date().getTime())
		var difference = end.getDate() - now.getDate()

		simplyCountdown('.simply-countdown-one', {
			year: end.getFullYear(),
			month: end.getMonth() + 1,
			day: now.getDate() + difference + 1
		});
	};


	var cycleText = function() {
		var divs = $('div[id^="heading-"]').hide(),
		i = 0;

		(function cycle() {

		    divs.eq(i).fadeIn(400)
		              .delay(1300)
		              .fadeOut(400, cycle);

		    i = ++i % divs.length;

		})();
	}



	$(function(){
		contentWayPoint();
		loaderPage();
		screenHeight();
		countDown();
		cycleText();
	});



}());
