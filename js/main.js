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
    $("#toggle_menu").toggleClass("menu-close");
    $(".toggle").toggleClass("rotate");

    $(".menu-overlay").animate(
      {
        left: "200%",
      },
      1500,
      function () {
        $(".menu-overlay").css({ left: "-200%" });
      }
    );
    setTimeout(function () {
      $("#navigation").toggleClass("d-nav");
    }, 500);

    if ($("#navigation").hasClass("d-nav")) {
      $(
        ".banner-section .slider .slick-prev, .banner-section .slider .slick-next"
      ).css({ zIndex: 1 });
    } else {
      $(
        ".banner-section .slider .slick-prev, .banner-section .slider .slick-next"
      ).css({ zIndex: 0 });
    }
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

  $(".select-menu-title").click(function () {
    $(".select-menu-options").toggleClass("open");
    $(".section-category .dropdown-arrow").toggleClass("rotate-180");
  });

  $(".select-menu-options li").click(function () {
    switch (this.id) {
      case "category_1":
        $(".category-tab-content").css("display", "none");
        $("#category_content_1").css("display", "block");
        break;

      case "category_2":
        $(".category-tab-content").css("display", "none");
        $("#category_content_2").css("display", "block");
        break;

      case "category_3":
        $(".category-tab-content").css("display", "none");
        $("#category_content_3").css("display", "block");
        break;

      case "category_4":
        $(".category-tab-content").css("display", "none");
        $("#category_content_4").css("display", "block");
        break;
      default:
        console.log("Unknown category");
    }
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
  $(function () {
    AOS.init();
  });

  if (document.readyState == "complete") {
    AOS.refresh();
  }

  // $(".scroll-team").on("scroll", onScroll);
  // $(".scroll-portfolio").on("scroll", onScroll2);

  //smoothscroll
  $('.tab-link a[href^="#"]').on("click", function (e) {
    // e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $(".scroll-team", ".portfolio-list")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        0,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });

  // function onScroll(event) {
  //   var scrollPos = $(".team-section").scrollTop() + 400;
  //   $(".tab-link a").each(function () {
  //     var currLink = $(this);
  //     var refElement = $(currLink.attr("href"));
  //     if (
  //       refElement.position().top <= scrollPos &&
  //       refElement.position().top + refElement.height() > scrollPos
  //     ) {
  //       $(".tab-link a").removeClass("active");
  //       currLink.addClass("active");
  //     } else {
  //       currLink.removeClass("active");
  //     }
  //   });
  // }

  // function onScroll2(event) {
  //   var scrollPos = $(".scroll-portfolio").scrollTop() + 400;
  //   console.log(scrollPos);
  //   $(".navigate-portfolio .tab-link a").each(function () {
  //     var currLink = $(this);
  //     var refElement = $(currLink.attr("href"));
  //     if (
  //       refElement.position().top <= scrollPos &&
  //       refElement.position().top + refElement.height() > scrollPos
  //     ) {
  //       $(".tab-link a").removeClass("active");
  //       currLink.addClass("active");
  //     } else {
  //       currLink.removeClass("active");
  //     }
  //   });
  // }

  var mY = 0;
  $(".magnify").mousemove(function (e) {
    // moving upward
    if (e.pageY < mY) {
      $(this).css({
        "margin-top": "-20px",
        "margin-left": "20px",
      });
      $(".pointer").css({
        display: "block",
        top: e.pageY - 25,
        left: e.pageX - 25,
        transform: "scale(1.5)",
      });

      // moving downward
    } else if (e.pageY > mY) {
      $(this).css({
        "margin-top": "20px",
        "margin-left": "-20px",
      });
      $(".pointer").css({
        display: "block",
        top: e.pageY - 25,
        left: e.pageX - 25,
      });
    } else {
    }

    // set new mY after doing test above
    mY = e.pageY;
  });

  $(".magnify").mouseleave(function () {
    $(this).css({ "margin-top": "0px", "margin-right": "0px" });
    // $(".pointer").css({ display: "none" });
  });

  $(window).scroll(function (event) {
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= 10) {
      $("header").addClass("nav-fixed");
    } else {
      $("header").removeClass("nav-fixed");
    }
  });

  $(".navigate-left").click(function () {
    var currentLeftMargin = $(".navigation-links ul").css("margin-left");
    var screenWidth = $(window).width();
    var screen15 = screenWidth - (screenWidth * 13.5) / 100;
    if (currentLeftMargin >= 0 + "px") {
      return false;
    } else {
      $(".navigation-links ul").css("margin-left", function (index, curValue) {
        var newMarginLeft = parseInt(curValue, 10) + screen15 + "px";
        curValue = newMarginLeft;
        console.log("New current value:" + curValue);
        return newMarginLeft;
      });

      $(".team-holder section:first-of-type").css(
        "margin-left",
        function (index, curValue) {
          var teamMarginLeft = parseInt(curValue, 10) + screenWidth + "px";
          curValue = teamMarginLeft;
          console.log("New current value:" + curValue);
          return teamMarginLeft;
        }
      );
    }
  });

  $(".navigate-right").click(function () {
    var currentLeftMargin = $(".navigation-links ul").css("margin-left");
    var screenWidth = $(window).width();
    var screen15 = screenWidth - (screenWidth * 13.5) / 100;
    if (currentLeftMargin > -1500 + "px" || currentLeftMargin == 0 + "px") {
      $(".navigation-links ul").css("margin-left", function (index, curValue) {
        console.log("Current value:" + curValue);
        var newMarginLeft = parseInt(curValue, 10) - screen15 + "px";
        curValue = newMarginLeft;
        console.log("New current value:" + curValue);
        return newMarginLeft;
      });

      $(".team-holder section:first-of-type").css(
        "margin-left",
        function (index, curValue) {
          var teamMarginLeft = parseInt(curValue, 10) - screenWidth + "px";
          curValue = teamMarginLeft;
          console.log("New current value:" + curValue);
          return teamMarginLeft;
        }
      );
    }
  });

  // about us scroll for mobile

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= 500) {
      $(".team-section .navigation-row").css({ opacity: 1 });
    } else {
      $(".team-section .navigation-row").css({ opacity: 0 });
    }

    // console.log($("#leadership").position().top);
    if ($(".scroll-team #leadership").offset().top - scrollPos <= 10) {
      $(".tab-link a").removeClass("active");
      $(".tab-link a#leadership_link").addClass("active");
    }

    if ($(".scroll-team #account_management").offset().top - scrollPos <= 10) {
      $(".tab-link a").removeClass("active");
      $(".tab-link a#account_management_link").addClass("active");
    }

    if ($(".scroll-team #design").offset().top - scrollPos <= 10) {
      $(".tab-link a").removeClass("active");
      $(".tab-link a#design_link").addClass("active");
    }

    if ($(".scroll-team #analytics").offset().top - scrollPos <= 10) {
      $(".tab-link a").removeClass("active");
      $(".tab-link a#analytics_link").addClass("active");
    }

    if ($(".scroll-team #technology").offset().top - scrollPos <= 10) {
      $(".tab-link a").removeClass("active");
      $(".tab-link a#technology_link").addClass("active");
    }
  });

  // alert($(".scroll-team #leadership").offset().top);

  // Project slider in landing/services page

  $(".brands .brand-links li").on("click", function () {
    $(".brands .brand-links li").removeClass("active");
    $(this).addClass("active");

    var linkId = this.id;

    var brandListItem = [];
    $(".brands .brand-list li").each(function () {
      brandListItem.push($(this));
    });

    for (var i = 0; i < brandListItem.length; i++) {
      if (brandListItem[i].attr("data-brand-name") !== linkId) {
        brandListItem[i].removeClass("active");
      } else {
        brandListItem[i].addClass("active");
      }
    }
  });

  /** dropdown btn */
  $(".dropdown-btn").on("click", function () {
    $(".dropdown-list").toggleClass("active");
  });

  $(".dropdown-list li").on("click", function () {
    $(".dropdown-list li").removeClass("active");
    $(this).addClass("active");
    var activeListItem = $(this);
    console.log(activeListItem);
    var listName = $(this).find("a").text();
    $(".dropdown-btn").text(listName);
    $(".dropdown-list").removeClass("active");
    var sectionList = $(".scroll-team section");
    $(sectionList).each(function () {
      if ($(this).attr("data-dropdown") == $(activeListItem).attr("id")) {
        $(".scroll-team section").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});
