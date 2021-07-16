# Website for Ittisa

URL: https://ittisa.com/

# CSS

Path: css/

1. normalize.css
   Use to override default styles applied by the browsers
   https://necolas.github.io/normalize.css/

2. main.css
   Custom styles for overall website

# Grid Structure

There are 7 grids behind the content which marks as a boundary for element above it. It also helps title of specific section to flow through it. All the webpage content should be placed inside the main container for grid structure to take effect.

## Grid letters

These are alphabets representing title of the section that is currently in view and slides towards right when the page is scroll down and towards left when the page is scrolled up

Grid letters are span elements which holds these content and has different rows for different titles of the section.

To add new title, add another row in each grid and fill it with each letters of the new tilte. In main.css file, you need to add negative left margin of (x + 40)vw where x is the negative left margin of the previous row in the grid.


## carousel

For carousel, using Slick slider plugin
link --> https://kenwheeler.github.io/slick/