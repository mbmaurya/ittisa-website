$(document).ready(function () {
  // function to slide grid letters towards with respect to the scroll position
  function SlideGridLetters() {
    $(".grid-letters").css({ marginRight: -scrollY });
  }

  $(window).on("scroll", SlideGridLetters);
});
