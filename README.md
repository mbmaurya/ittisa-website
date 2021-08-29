# Website for Ittisa

URL: https://ittisa.com/
Demo: https://ittisa-website-090721.firebaseapp.com/index.html

# CSS

Path: css/

1. normalize.css
   Use to override default styles applied by the browsers
   https://necolas.github.io/normalize.css/

2. about.css
   Contains styles for about us page

3. animation.css
   Defines animation for elements

4. blog-inner-page.css
   Contains styles for inner blog pages

5. blog-landing-page.css
   Contains styles for blog home/landing page

6. colors.css
   Defines color variables

7. common.css
   Contains styles for shared elements

8. components.css
   Contains styels for shared components

9. contact.css
   Contains styles for contact page

10. footer.css
    Contains styles for footer

11. header.css
    Contains styles for header and menu

12. index.css
    Contains styles for index/homepage

13. portfolio.css
    Contains styles for portfolio page

14. pre-loading-screen.css
    Contains styles for pre loader

15. main.css
    Aggregates all the css files

Note: Follow the hierarchy while importing the individual files as defined in main.css. Compress all the css into one file for production.

# Grid Structure

There are 7 grids behind the content which marks as a boundary for element above it. It also helps title of specific section to flow through it. All the webpage content should be placed inside the main container for grid structure to take effect. For mobile devices, screen is divided into 6 grids.

Special care should be taken while using col-_, col-sm-_, and col-md-\* due to the difference between the number of grids on mobile and desktop

## Grid letters

These are alphabets representing title of the section that is currently in view and slides towards right when the page is scroll down and towards left when the page is scrolled up

Grid letters are span elements which holds these content and has different rows for different titles of the section.

To add new title, add another row in each grid and fill it with each letters of the new tilte. In main.css file, you need to add negative left margin of (x + 40)vw where x is the negative left margin of the previous row in the grid.

# carousel

For carousel, using Slick slider plugin
link --> https://kenwheeler.github.io/slick/

# Grid Letters

function SlideGridLetters() {
$(".grid-letters").css({
marginRight: (scrollY / (screen.height X 1)) X (-100) + "%",
});
}

The above function checks for an Html element with a class name ".grid-letters" and applies negative margin towards right in percentage by dividing the current position of the scroll and height of the viewport.

The letters pass their grids when the scroll position is equal to the height of the viewport. To increase or decrease the speed, multiply screen.height with the desired number.

# JS

1.  Pre loading screen:
    $(".pre-loading-screen").fadeOut(3000);
    Runs pre loader screen while the page is loading and keeps running for 3s after the page is loaded.

2.  Sliding grid letters
    function SlideGridLetters() {
    $(".grid-letters").css({
    marginRight: (scrollY / (screen.height _ 1)) _ -100 + "%",
    });
    }
    Function is called on scroll which shifts the grid letters towards right or left

3.  Menu
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

    Toggles the menu onclick, changes it's text, adds animaiton to hamburger icon and starts the animation to reveal menu list

Note: For more information and list of scripts, please check main.js file
