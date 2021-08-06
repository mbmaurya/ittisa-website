$(document).ready(function () {
  // fadeout pre-loading-screen on complete page load
  $(".pre-loading-screen").fadeOut(3000);
  // function to slide grid letters towards with respect to the scroll position
  function SlideGridLetters() {
    $(".grid-letters").css({
      marginRight: (scrollY / (screen.height * 1)) * -100 + "%",
    });
  }

  $(window).on("scroll", SlideGridLetters);

  $("#toggle_menu").click(function () {
    $("#toggle_menu > p").text(
      $("#toggle_menu > p").text() == "Menu" ? "Close" : "Menu"
    );
    $("#toggle_menu").toggleClass("menu-close")
    $(".toggle").toggleClass("rotate");
    $("#navigation").toggleClass("d-block");

  });


// carousel
$(".slider").slick();
$(".work-slider").slick({
  centerMode: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});


  // accordion
  var acc = $(".accordion-btn");

  acc.each(function (i) {
    $(this).on("click", function () {
      $(this).toggleClass("accordion-active");
      const panel = $(this).next();
      if ($(this).hasClass("accordion-active")) {
        panel.css({ "max-height": "fit-content" });
      } else {
        panel.css({ "max-height": "0" });
      }
    });
  });

  // Initialize animation on scroll
  AOS.init();
});



// Team Tab


$(document).ready(function () {
    $('.scroll-team').on("scroll", onScroll);
    
    //smoothscroll
    $('.tab-link a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('.scroll-team').stop().animate({
            'scrollTop': $target.offset().top
        }, 0, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.tab-link a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.tab-link a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}