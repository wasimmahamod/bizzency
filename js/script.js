$(function(){
  "use strict";

  var htmlBody = $('html, body');
    var windo = $(window);

      //fixed menu
      var bc2top = $(".back-to-top");
      var $sticky = $(".menu");
    
    $(".search").on('click' , function(){
        $(".search-box").toggle();
       $("input[type='search']").focus();
    });

	
	$('.searh').on('click',function(){
		$('#myOverlay').fadeIn();
		
	});
	
	$('.closebtn').on('click',function(){
		$('#myOverlay').fadeOut();
		
  });
  


	

 //animation scroll js

 $('.menu ul li a').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          htmlBody.animate({
              scrollTop: target.offset().top - 150
          }, 1000);
          return false;
      }
  }
});


$(window).on('scroll' , function(){
  var $scrolling = $(this).scrollTop();
 
  if($scrolling > 130){
    $sticky.addClass("nav-bg");
  }
  else{
    $sticky.removeClass("nav-bg");
  }
});

	// this is for back to top
	bc2top.on('click', function () {
		htmlBody.animate({
			scrollTop: 0
		}, 500);
	});

      //venobox js
      
        $('.venobox').venobox(); 
   

    //progressbar js
    $('#jq').LineProgressbar({
        percentage:90,
        radius: '3px',
        height: '10px',
        fillBackgroundColor: '#2a4896'
        });
        $('#html').LineProgressbar({
        percentage:85,
        radius: '3px',
        height: '10px',
        fillBackgroundColor: '#5d3b15'
        });
        $('#css').LineProgressbar({
        percentage:75,
        radius: '3px',
        height: '10px',
        fillBackgroundColor: '#344a1f'
        });
        $('#cs').LineProgressbar({
            percentage:80,
            radius: '3px',
            height: '10px',
            fillBackgroundColor: '#392960'
            });

        //protfolio js
        $('.responsive').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            prevArrow:'<i class="fas fa-chevron-left prv"></i>',
            nextArrow:'<i class="fas fa-chevron-right nxt"></i>',
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });


          //service js
          $('.service-slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

          //testimonial js
          $('.testi-slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow:'<i class="fas fa-chevron-left pri"></i>',
            nextArrow:'<i class="fas fa-chevron-right ne"></i>',
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

          //blog js
          $('.blog-slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:'<i class="fas fa-chevron-left pr"></i>',
            nextArrow:'<i class="fas fa-chevron-right nt"></i>',
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

          //counter js
		  if($.fn.counterUp){
			  $('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		  }
			  
          

        //right-side service-slider js
        $('.right-service-slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
            autoplay: true,
            autoplaySpeed: 1500,
        }); 


        //blog-sibar js
        $('.multiple-items').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow:'<a href="#" class="prre"><i class="fas fa-angle-double-left"></i>Previous Post</a>',
          nextArrow:'<a href="#" class="nxxt">Next Post<i class="fas fa-angle-double-right"></i></a>',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

        //pagination search js
        $(".srch").on('click' , function(){
          $(".search-box").toggle();
         $("input[type='search']").focus();
      });


      $(".sch").on('click' , function(){
        $(".serch-box").toggle();
       $("input[type='search']").focus();
    });


});