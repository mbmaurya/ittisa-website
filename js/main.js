$(document).ready(function () {
  // function to slide grid letters towards with respect to the scroll position
  function SlideGridLetters() {
    $(".grid-letters").css({ marginRight: -(scrollY) });
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

$(".slider").slick()
$(".work-slider").slick({
  centerMode: true,
  slidesToShow: 3
})