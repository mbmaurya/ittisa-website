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

// Vanilla JS
// function openTab (evt, name) {
//   var i, tabContent, tabLinks
//   tabContent = document.getElementsByClassName("tab-content")
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none"
//   }
//   tabLinks = document.getElementsByClassName("tab-link")
//   for (i = 0; i < tabLinks.length; i++) {
//     tabLinks[i].className = tabLinks[i].className.replace(" active-link", "")
//   }
//   document.getElementById(name).style.display = "block"
//   evt.currentTarget.className += " active"
// }

// jquery
function openTab (evt, name) {
  var i, tabContent, tabLinks
  tabContent = $(".tab-content")
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none"
  }
  tabLinks = $(".tab-link")
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active-link", "")
  }
  $("#"+name).css({"display": "block"})
  evt.currentTarget.className += " active-link"
}