# Lab 2 - CSS3

---
## Module 1 - Effects

### I. Border Radius

1. Open "3- CSS3\labs\effects\begin\photos.html"
	
2. Open "css/style.css" and add the following to the `img` selector:
	
	`-moz-border-radius: 7px 7px 7px 7px;
 	-webkit-border-radius: 7px 7px 7px 7px;
 	border-radius: 7px 7px 7px 7px;`	

3. Refresh the page
	
4. Now change modify the `img` selector to create an alternative box effect:

	`-moz-border-radius: 50px 0px 50px 7px;
   -webkit-border-radius: 50px 0px 50px 0px;
	border-radius: 50px 0px 50px 0px;`
	
### **[EXTRA CREDIT]** Add a Polyfill that creates border-radius effects for older browsers (Assumes the use of IE9 to target IE8 for testing):

1. Open the page with Internet Explorer 9 (if you haven't already), and hit the F12 key (or use the menu) to open the developer tools.

2. Click on the "Browser Mode" menu item to the right of the menu bar. You should see options similar to the image below. Select "Internet Explorer 8," or "Internet Explorer 7" and watch how your beautiful rounded corners disappear.

	![Changing the Browser Mode in IE9's F12 Developer Tools](https://github.com/csell5/HTML5-Compiler/raw/master/2-%20HTML5%20Core/labs/assets/ie9BrowserMode.png "IE9 Browser Tools")

3. To get those rounded corners back, we can use Modernizr and a Polyfilling library called [PIE.js](http://css3pie.com/). Start by adding the following to the `<script>` block at the bottom of photos.html:

		Modernizr.load({
			test: Modernizr.borderradius,
			nope: '../js/PIE.js',
			callback: function() {
			}
		});

4. The snippet above will test the Modernizr.borderradius property and, if the browser doesn't support border-radius, will load the PIE.js library we've already included in the js folder for this module. Once PIE has loaded, we need to tell the plugin which elements need some style-assistance. In side of the `Modernizr.load` callback property, add the following:

		$('img').each(function() {
			PIE.attach(this);
		});

5. Now refresh the page, and notice that your rounded corners are back. If you have the time, or you're looking for extra-extra credit, why not try adding PIE to the CSS3 properties we're using when a user hovers over an image (you'll notice that this is still not working).

### II. Drop Shadow

1. Open style.css and add the following to the `img` selector:

	`-moz-box-shadow: 0px 0px 10px #006400;
   -webkit-box-shadow: 0px 0px 10px #006400;
	box-shadow: 0px 0px 10px 1px #006400;`

2. Refresh the page, and notice the shadow effect added around all of the images.

3. Now lets add a similar effect to the overlay box that appears when you hover over an image. Find the selector `ul.thumbnails li:hover.` (Note: `hover` is a CSS pseudo-selector that allows us to apply styles to a set of elements only when an event is triggered, which creates an animation effect. But more on that later. Add the following css to the styles in that selector:
	
	`-moz-box-shadow: 0px 0px 20px 5px #A9A9A9;
   -webkit-box-shadow: 0px 0px 20px 5px #A9A9A9;
	box-shadow: 0px 0px 20px 5px #A9A9A9;`
    
4. Refresh the page, and hover over a couple of images to view the effect. Notice the difference in the effect between the images and the hover overlay.

5. Spend a few moments tweaking the CSS property values and noting the change to each element in the browser. If you have time, take a look at the [box-shadow tutorial on CSS3.info](http://www.css3.info/preview/box-shadow/) for information on each component piece of this style.

### III. Text Shadow

1. Open style.css and add the following to the `h1` selector:

	`text-shadow: 5px 5px 5px #bbb;`

2. Refresh the page, and notice the shadow effect added to the text.

3. It possible to add multple shadow effects to text, by delimiting each effect with a comma. Let's add four seperate effects to our header with the following:

	`text-shadow: 0 -2px 3px #fff, 0 -4px 3px #aaa, 0 -6px 6px #666, 0 -8px 9px #000;`

4. Now refresh the page to view the different effect this creates.

5. Spend a few moments tweaking the CSS property values and noting the change to each element in the browser. If you have time, take a look at the [text-shadow tutorial on CSS3.info](http://www.css3.info/preview/text-shadow/) for informaiton on each component piece of this style.

---
## Module 2 - Web Fonts

1. Open the "3- CSS3\labs\font-face\begin\photos.html" file. This file will be similar to the result of Module 1.

2. Open "css/style.css" and create a @font-face declaration at the top of the page:

	`@font-face {
    	font-family: 'SpicyRiceRegular';
    	src: url('../../fonts/spicyrice-regular-webfont.eot');
    	src: url('../../fonts/spicyrice-regular-webfont.eot?#iefix') format('embedded-opentype'),
     	     url('../../fonts/spicyrice-regular-webfont.woff') format('woff'),
  	         url('../../fonts/spicyrice-regular-webfont.ttf') format('truetype'),
 	         url('../../fonts/spicyrice-regular-webfont.svg#SpicyRiceRegular') format('svg');
    	font-weight: normal;
    	font-style: normal;
}`

3. Modify the body style declaration to use this new font family. In the `body` selector, change the `font-family` style to the following:

	`font-family: "SpicyRiceRegular", Tahoma, Verdana, Arial, Sans-Serif;`

4. Then, change the `font-family` style for the `#banner` selector to the following:

	`font-family: "SpicyRiceRegular";`

4. Before refreshing your browser, turn on Network monitoring in the "Network" tab of your browser's developer tools.

5. Now, refresh the page and make sure the new font shows up. View the Network tab of your browser and note how the browser loaded the font file (.woff, .oft, etc.) behind the scenes for you.

6. You'll notice that our @font-face declaration includes multople formats. Try loading the page in multiple browsers to see which browsers use which formats.

***Question to consider:*** If you were to serve fonts from your server to users through the browser, what information might your server need to have about fonts to enable this capability?

### **[Extra Credit]** Modify the page to use one or more fonts from  [Google's Web Fonts service](http://www.google.com/webfonts). For extra, extra credit, explore multiple ways of leveraging Google's fonts in the page.  

---
## Module 3 - Media Queries

1. First, check out [mediaqeri.es](http://mediaqueri.es) to get an idea of the power of this CSS3 module. This lab will present a very basic case so that you have get a grounded understanding of Media Queries.

2. Open the "3- CSS3\labs\media-queries\begin\photos.html" file.

3. Open css/desktop.css and add the following @media declaration to the page: (for 600px max-width)

4. Change this to use device-width, and explain the difference.

5. Now, remove this declaration, and instead add the conditional check to the `<link>` tag for each stylesheet (mobile and desktop) with (min-device-width: 480px)

### **[Extra Credit]** Add a conditional comment that includes the correct stylesheet for older versions of IE.

1. Open IE9
2. Hit F12 and change the verson to IE8. Notice that the page is now styled with the mobile stylesheet.
3. Add the following conditional comment:

	<!—[if lt IE 9]>
		<link href="desktop.css" rel="stylesheet" media="screen"> 	<![endif]—>

4. Refresh the page.

---
## Module 4 - Transformations

### I. 2D Transformations

1. Open the "3- CSS3\labs\transformations\begin\photos.html" file.

2. Open "css/style.css" and create a style declaration that rotates the first photo (uses a CSS3 pseudo-selector)

3. Now create a style declaration that translates the second photo.

4. Create a style declaration that skews the third photo

5. Create a style declaration that scales the fourth photo up

6. Combine multiple transformations to create a ribbon effect in the top-left corner of the page.

### **[Extra Credit]** add a webkit-only (Chrome and Safari) box-reflection effect to images on the page.

### II. 3D Transformations
1. Add the transform-style property.

2. Create a style that rotates the fifth photo on the page.

3. Create a style that translates the sixth photo on the page.

---
## Module 5. Transitions and Animations

1. Open the "3- CSS3\labs\transitions_and_animation\begin\photos.html" file.

2. Open "css/style.css" and create a style declaration that scales and tranlates each photo when I hover over them with my mouse.

3. View this in the browser and hover.

4. Modify the transition-duration and add a transition-timing-function

5. Add a transition-delay

### **[Extra Credit]** Do some research online about CSS Animation Keyframes and modify this sample to utilize that featre.

---
# Resources

1. mediaqueri.es
2. [Bulletproof Font-Face](http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/)
[Google Web Fonts](http://www.google.com/webfonts)
3. [FontSquirrel.com](http://www.fontsquirrel.com/fontface/generator)
4. The Book of CSS3
5. CSS3.info
6. [CSSPie](http://css3pie.com/)