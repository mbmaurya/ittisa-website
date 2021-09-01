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

  // Toggles menu and changes its text
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
      $("body").toggleClass("stop-scroll");
    }, 500);

    // prevents elements of pages from overlapping the menu
    if ($("#navigation").hasClass("d-nav")) {
      $(
        ".banner-section .slider .slick-prev, .banner-section .slider .slick-next"
      ).css({ zIndex: 1 });
      $(".navigation-row-mobile").css({ zIndex: 1 });
      $(".navigate-portfolio").css({ zIndex: 1 });
    } else {
      $(
        ".banner-section .slider .slick-prev, .banner-section .slider .slick-next"
      ).css({ zIndex: 0 });
      $(".navigation-row-mobile").css({ zIndex: 0 });
      $(".navigate-portfolio").css({ zIndex: 0 });
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

  // Category selector for blog page
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

  // accordion on homepage
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

  // referesh aos plugin for recent changes
  if (document.readyState == "complete") {
    AOS.refresh();
  }

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

  // sticks menu bar on top
  $(window).scroll(function (event) {
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= 10) {
      $("header").addClass("nav-fixed");
    } else {
      $("header").removeClass("nav-fixed");
    }
  });

  // about us scroll for mobile
  var currentURL = $(location).attr("href");

  if (currentURL.includes("about-us.html")) {
    var navForMobile = $(".navigation-row-mobile");
    var navForMobileOffset = navForMobile.offset().top;

    var teamHolder = $(".team-holder");
    var teamHolderOffset = teamHolder.offset().top;
  }
  if (currentURL.includes("portfolio.html")) {
    var navForMobile = $(".navigation-row-mobile");
    var navForMobileOffset = navForMobile.offset().top;
    var scrollPortfolio = $(".scroll-portfolio");
    var scrollPortfolioOffset = scrollPortfolio.offset().top;
  }

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= 500) {
      $(".team-section .navigation-row").css({ opacity: 1 });
      $(".portfolio-list .navigate-portfolio").css({ opacity: 1 });
    } else {
      $(".team-section .navigation-row").css({ opacity: 0 });
      $(".portfolio-list .navigate-portfolio").css({ opacity: 0 });
    }

    if (currentURL.includes("about-us.html")) {
      if (scrollPos > teamHolderOffset + $(".team-holder").height()) {
        console.log("You crossed");
      }

      var navForMobilePosition = navForMobileOffset - scrollPos;

      if (
        navForMobilePosition < 20 &&
        navForMobileOffset != 0 &&
        scrollPos < teamHolderOffset + $(".team-holder").height()
      ) {
        $(".navigation-row-mobile").addClass("sticky");
      } else {
        $(".navigation-row-mobile").removeClass("sticky");
      }

      // console.log($("#leadership").position().top);
      if ($(".scroll-team #leadership").offset().top - scrollPos <= 10) {
        $(".tab-link a").removeClass("active");
        $(".tab-link a#leadership_link").addClass("active");
      }

      if (
        $(".scroll-team #account_management").offset().top - scrollPos <=
        10
      ) {
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
    }
    /** */

    // checks URL of current page
    if (currentURL.includes("portfolio.html")) {
      if (scrollPos <= 10) {
        console.log(scrollPos);
        $(".tab-link a").removeClass("active");
        $(".tab-link a#all_link").addClass("active");
      }

      if ($("#digital").offset().top - scrollPos <= 10) {
        $(".tab-link a").removeClass("active");
        $(".tab-link a#digital_link").addClass("active");
      }

      if ($("#uiux").offset().top - scrollPos <= 10) {
        $(".tab-link a").removeClass("active");
        $(".tab-link a#uiux_link").addClass("active");
      }

      if ($("#branding").offset().top - scrollPos <= 10) {
        $(".tab-link a").removeClass("active");
        $(".tab-link a#branding_link").addClass("active");
      }

      if ($("#videos").offset().top - scrollPos <= 10) {
        $(".tab-link a").removeClass("active");
        $(".tab-link a#videos_link").addClass("active");
      }

      // var navForMobile = $(".navigation-row-mobile").offset().top;
      var teamHolderHeight = $(".scroll-portfolio").height();
      if (scrollPos > scrollPortfolioOffset + teamHolderHeight) {
        console.log("You crossed");
      }

      var navForMobilePosition = navForMobileOffset - scrollPos;

      if (
        navForMobilePosition < 0 &&
        navForMobileOffset != 0 &&
        scrollPos < scrollPortfolioOffset + teamHolderHeight
      ) {
        $(".navigation-row-mobile").addClass("sticky");
      } else {
        $(".navigation-row-mobile").removeClass("sticky");
      }
    }
  });

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

  // dropdown for scrolling team and portfolio list on mobile
  $(".dropdown-list li").on("click", function () {
    $(".dropdown-list li").removeClass("active");
    $(this).addClass("active");
    var activeListItem = $(this);
    console.log(activeListItem);
    var listName = $(this).find("a").text();
    $(".dropdown-btn").text(listName);
    $(".dropdown-list").removeClass("active");
    var sectionList = $("#dropdown_section section");
    $(sectionList).each(function () {
      if ($(this).attr("data-dropdown") == $(activeListItem).attr("id")) {
        $("#dropdown_section section").removeClass("active");
        $(this).addClass("active");
      }
    });
  });

  // dropdown in menu
  $("#dropdown_link").on("click", function () {
    $("#dropdown_link_content").toggleClass("active");
    $("#dropdown_link").toggleClass("white-to-yellow");
    $("#dropdown_link > span").toggleClass("rotate180");
  });

  $(".portfolio-inner-slider").slick({
    arrows: false,
    dots: true,
  });
});
