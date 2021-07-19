$(document).ready(function () {
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
    $(".toggle").toggleClass("rotate");
    $("#navigation").toggleClass("d-block");
  });
});

// carousel
$(".slider").slick();
$(".work-slider").slick({
  centerMode: true,
  slidesToShow: 3,
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
