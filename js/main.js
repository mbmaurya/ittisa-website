$(document).ready(function () {
  function check_if_in_view() {
    $(".grid-letters").css({ marginRight: -(scrollY / 4) });
  }
  $(window).on("scroll", check_if_in_view);
});
