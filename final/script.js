$(document).ready(function() {

   $(".mySlides:nth-of-type(1)").css("display", "block");
   $(".dot:nth-of-type(1)").addClass('active');
   $(".social-li:first").css("margin-left", "0");
   $(".social-li").not(".social-li:first").css("margin-left", "5px");
   $(".social-li").not(".social-li:first").css("margin-right", "5px");

   var didScroll;
   var lastScrollTop = 0;
   var delta = 5;
   var navbarHeight = $('#headerNav').outerHeight();
   var endSpanAnim = true;

   //Changing the nav bar to show after width adjustment

   function displayNav() {
      if ($('.dropdown-content').css('display') == 'none' && ($(window).width()) > 800) {
         $('.dropdown-content').css('display', 'inline');
         console.log("hello");
      } else {
         $('.dropdown-content').css('display', 'none');
      }
   };


   $(window).resize(displayNav);


   $(window).scroll(function() {
      didScroll = true; //didScroll keeps track of scrolling

      //Start of responsive jQuery scroll effects
      if ($(document).scrollTop() > 0 && endSpanAnim === true) {
         $("#span-header").addClass("animated fadeOut");
         setTimeout(function() {
            var newText = $("#span-header").text().replace("iscover", "ispicio");
            $("#span-header").text(newText);
            $("#span-header").removeClass("fadeOut").addClass("fadeIn");
         }, 700);
         endSpanAnim = false;
      };

      if ($(document).scrollTop() > 200) {
         $("#about-me-section h1").addClass("about-header-animation").removeClass("makeInvisible");
      }

      if ($(document).scrollTop() > 350) {
         $(".info-para").addClass("animated fadeInRight");
         $(".picture-visible").addClass("animated fadeInLeft");
      };

      if ($(document).scrollTop() > 1100) {
         $("#skills h1").addClass("skills-header-animation").removeClass("makeInvisible");
      };

      if ($(document).scrollTop() > 1500) {
         $(".skill-animation").each(function(index) {
            var $this = $(this);
            setTimeout( function(index) {
               if ($this.index() === 0) {
                  $($this).addClass("animated fadeInLeft").removeClass("makeInvisible");
               };
               if ($this.index() === 1) {
                  $($this).addClass("animated fadeInUp").removeClass("makeInvisible");
               };
               if ($this.index() == 2) {
                  $($this).addClass("animated fadeInRight").removeClass("makeInvisible");
               };


            }, 300*index);
         });
      };
      if ($(document).scrollTop() > 2150) {
         $("#education h1").addClass("education-header-animation").removeClass("makeInvisible");
      };
      if ($(document).scrollTop() > 3000) {
         $(".site-example-header").addClass("siteEx-header-animation").removeClass("makeInvisible");
         $(".example-col").each(function(index) {
            var $this = $(this);
            setTimeout( function() {
               $($this).addClass("animated fadeInRightBig").removeClass("makeInvisible");
            }, 500*index);
         });
      };
      if ($(document).scrollTop() > 3525) {
         $("#articles h1").addClass("article-header-animation").removeClass("makeInvisible");
      };
      if ($(document).scrollTop() > 3575) {
         $("#article-container div").each(function(index) {
            var $this = $(this);
            setTimeout( function() {
               $($this).addClass("animated fadeInUp").removeClass("makeInvisible");
            }, 500*index);
         });
      };
   });

   //Hiding header nav on scroll
   setInterval (function() {
      if (didScroll) { //If the user has scrolled
         hasScrolled(); //Invoke the hasScrolled() function
         //didScroll = false
      }
   }, 200); //Repeat function every 200ms

   function hasScrolled() {
      var st = $(this).scrollTop(); //Checks current scroll position
      //Makes sure the header doesn't reappear when not scrolling
      if(Math.abs(lastScrollTop - st) <= delta) {
         return;
      }

      //st > lastScrollTop checks to see if you are scrolling back up
      //st > navbarHeight makes sure the header nav stays hidden after your done scrolling
      if (st > lastScrollTop && st > navbarHeight){
         $('#headerNav').slideUp(500);
      } else {
         if(st + $(window).height() < $(document).height()) {
            $('#headerNav').slideDown(500);
         };
      };
      lastScrollTop = st;
   }
})




//This is for the education slide show
var slideIndex = 1; //Shows which slide should show

function plusSlides(n) {
  showSlides(slideIndex += n); //Adds one to the slide index then initiates the function
}

function currentSlide(n) {
  showSlides(slideIndex = n); //Sets slide to n then initiates the function
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); //array of mySlides
  var dots = document.getElementsByClassName("dot"); //array of dots
  if (n > slides.length) {slideIndex = 1} //If index of slides is too high return back to one
  if (n < 1) {slideIndex = slides.length} //If you backtrack from the first slide, it goes to the last one
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; //Resets them all to hidden
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", ""); //Turns off active dots
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; //Adds the active class to the selected dot
}

function navButtonClick() {
   if ($(".dropdown-content").css("display") == 'none') {
      $(".dropdown-content").css("display", "inline");
      $(".topnav").addClass("switch-nav");
   } else {
      $(".dropdown-content").css("display", "none");
      $(".topnav").removeClass("switch-nav");
   }
}
