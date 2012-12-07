# Lab 2 - CSS3

---
## Module 1 - Effects

### I. Border Radius

1. Open "3- CSS3\labs\effects\begin\photos.html"
	
2. Open "css/style.css" and add the following to the `img` selector:
	
		-moz-border-radius: 7px 7px 7px 7px;
 		-webkit-border-radius: 7px 7px 7px 7px;
 		border-radius: 7px 7px 7px 7px;	

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

1. Open style.css and add the following to the `h1` selector (see if you remember those vendor prefixes, and add them yourself):

	`text-shadow: 5px 5px 5px #bbb;`

2. Refresh the page, and notice the shadow effect added to the text.

3. It possible to add multiple shadow effects to text, by delimiting each effect with a comma. Let's add four separate effects to our header with the following:

	`text-shadow: 0 -2px 3px #fff, 0 -4px 3px #aaa, 0 -6px 6px #666, 0 -8px 9px #000;`

4. Now refresh the page to view the different effect this creates.

5. Spend a few moments tweaking the CSS property values and noting the change to each element in the browser. If you have time, take a look at the [text-shadow tutorial on CSS3.info](http://www.css3.info/preview/text-shadow/) for information on each component piece of this style.

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

5. Before refreshing your browser, turn on Network monitoring in the "Network" tab of your browser's developer tools.

6. Now, refresh the page and make sure the new font shows up. View the Network tab of your browser and note how the browser loaded the font file (.woff, .oft, etc.) behind the scenes for you.

7. You'll notice that our @font-face declaration includes multiple formats. Try loading the page in multiple browsers to see which browsers use which formats.

***Question to consider:*** If you were to serve fonts from your server to users through the browser, what information might your server need to have about fonts to enable this capability?

### **[Extra Credit]** Modify the page to use one or more fonts from  [Google's Web Fonts service](http://www.google.com/webfonts). For extra, extra credit, explore multiple ways of leveraging Google's fonts in the page.  

---
## Module 3 - Media Queries

1. First, check out [mediaqeri.es](http://mediaqueri.es) to get an idea of the power of this CSS3 module. This lab will present a very basic case so that you gain a grounded understanding of Media Queries.

2. Open the "3- CSS3\labs\media-queries\begin\photos.html" file.

3. Open css/desktop.css and add the following @media declaration to the bottom of the page (we do this in case we need to override any styles declared above):

	`@media screen and (max-width:1024px) {	}`

4. The @media declaration allows us to specify rules that the browser will evaluate at runtime. In this case, The rules are `screen` (as opposed to `print`) and a maximum screen width of 1024px, similar to what one would find on a tablet or slate device. If both rules evaluate to true, all styles inside of this block of css will be applied. For starters, let's define some styles that change the size of our images and container elements, as well as move our menus around.

		@media screen and (max-width:1024px) {
			body {
				min-width: 480px;
				max-width: 800px;
			}
	
			#banner {
				height: 110px;
				background: #eaeaea;
			}
	
			#menu li {
				display: block;
				margin-top: 3px;
				margin-bottom: 3px;
			}
	
			#menu li.tags a,
			#menu li.galleries a,
			#menu li.account a {
				background: none;	
			}
	
			#menu li.login {
				display: none;
			}
	
			img {
				width: 500px;
				height: 375px;
				align: center;
			}
	
			ul.thumbnails li {
				width: 515px;
			    height: 390px;
			    line-height: 200px;
			}
		}

5. Refresh the page in the browser. If your window is larger than 1024px, you probably noticed nothing different. You can see the change by resizing the browser window until the images stack up and the top menu moves into a stacked view as well. You can also view the page on a slate or tablet emulator.

6. When we design for mobile experiences, it's important to think about user interaction as well as the look and feel of a site. Because the primary interaction on phones and slates is touch, many of our mouse-based interactions won't directly translate. On our photo gallery page, we've used CSS to create a nice overlay effect with the name of each animal when the use hovers over the picture with a mouse. Since the hover event won't trigger on a mobile until the user clicks an image, we can use our Media Queries style to change the experience for our mobile users, and display the overlay by default. Add the following at the end of the @media set of styles:

		ul.thumbnails li span.image-overlay {
			display:block;
			position: absolute;
			top: 0;
			left: 0;
			line-height: normal;
			width: 515px;
			padding: 5px;
		}
	
		ul.thumbnails li {
		    background: #f3f6f7;
		    border-color: #dbe2e5;

		    /*CSS3 properties*/
		    border-radius: 7px;
		    -moz-border-radius: 7px;
		    -webkit-border-radius: 7px;

		    -moz-box-shadow: 0px 0px 20px 5px #A9A9A9;
		    -webkit-box-shadow: 0px 0px 20px 5px #A9A9A9;
			box-shadow: 0px 0px 20px 5px #A9A9A9;
		}

7. Refresh the page to view the result. Resize the window back to a larger size and notice how the style reverts back to default.

8. Now, make the browser window even smaller, or view the page with an iPhone, Android or Windows Phone emulator. You'll notice that the images are too large for mobile phones. We can fix this by adding another `@media` ruleset just below our first set:

		@media screen and (max-width:480px) {
			body {
				min-width: 120px;
				max-width: 320px;
			}
	
			h1 {
				font-size: 1.5em;
			}
	
			img {
				width: 250px;
				height: 187.5px;
			}
	
			ul.thumbnails li {
				width: 265px;
	  		   height: 200px;
			   line-height: 200px;
			}
	
			ul.thumbnails li span.image-overlay {
		  	  width: 265px;
			}
		}

9. Now refresh the page again, and things should look just right for a smaller screen. Notice that, for this set of rules, we were able to keep many of the same rules defined in the first `@media` set, while only overriding those related to the size of content on the page.

10. We have one more (non-CSS) step to take to deliver a truly mobile experience. If you viewed the photo page in a mobile emulator, you probably noticed a "zoomed out" effect on the screen. To fix this, we need only add a `meta` tag to `photos.html`:

	`<meta name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>`

Now, refresh the page and bask in the awesome mobile-ness of it all! 

### **[Extra Credit]** It's also possible to apply media queries on `<link>` includes by using the `media` property. Using the empty desktop.css and mobile.css files in the css folder, move the existing styles and apply these style sheets using only the `stylesheet` references on the photos.html page. Check out [this tutorial](http://webdesignerwall.com/tutorials/css3-media-queries) for more information.

---
## Module 4 - Transformations

1. Open the "3- CSS3\labs\transformations\begin\photos.html" file.

2. Open "css/desktop.css" and create a style declaration that rotates the images by 25 degrees to the left:
	
		img {
			-moz-transform: rotate(-25deg); /* Firefox */ 
			-ms-transform: rotate(-25deg); /* Internet Explorer */ 
			-o-transform: rotate(-25deg); /* Opera */ 
			-webkit-transform: rotate(-25deg); /* WebKit */
		}

3. Refresh the page. Now, comment out or remove that style, and add a style that translates the photos 40 pixels to the right, and 20 pixels down:

		-moz-transform: translate(40px, 20px);
		-ms-transform: translate(40px, 20px); 
		-o-transform: translate(40px, 20px); 
		-webkit-transform: translate(40px, 20px);

	Refresh the page, and hover over an image to display the overlay and reveal how far the image has moved relative to its original position.

4. Comment out the translate style, and create a style declaration that skews the photos 10 degrees along the x-axis, and 5 degrees along the y-axis:

		-moz-transform: skew(10deg, 5deg);
		-ms-transform: skew(10deg, 5deg); 
		-o-transform: skew(10deg, 5deg); 
		-webkit-transform: skew(10deg, 5deg);

5. Refresh the page to view the result. Now, comment out that style and create a style declaration that scales the photos down to 75% of their original size:

		-moz-transform: scale(.75, .75);
		-ms-transform: scale(.75, .75); 
		-o-transform: scale(.75, .75); 
		-webkit-transform: scale(.75, .75);

6. Refresh the page and view the result. Now, let's combine multiple transformations to create a ribbon effect in the top-left corner of the page. First, open photos.html and uncomment the `<h2>` element with the text "CSS3!" just under the `<h1>` on the page.

7. Then, open desktop.css and find the first `h2` selector. Add the following transforms:

		-moz-transform: rotate(-40deg) scale(0.75) translate(-38%, -950%);
		-ms-transform: rotate(-40deg) scale(0.75) translate(-38%, -950%);
		-o-transform: rotate(-40deg) scale(0.75) translate(-38%, -950%);
		-webkit-transform: rotate(-40deg) scale(0.75) translate(-38%, -950%);
	
8. Refresh the page. You should see a Ribbon with the text "CSS3!" in the upper right corner of the page.

### **[Extra Credit]** add a webkit-only (Chrome and Safari) box-reflection effect to images on the page.

1. Open desktop.css, and add the following to the first `img` selector:

	`-webkit-box-reflect: below;`

2. Refresh the page. To change the reflection to look more "web 2.0," let's add a gradient:

	`-webkit-box-reflect: below 0 -webkit-gradient(linear,50% 0,50% 100%,from(transparent),to(white));`

3. Refresh the page again.

---
## Module 5. Transitions and Animations

1. Open the "3- CSS3\labs\transitions_and_animation\begin\photos.html" file.

2. Now open "css/style.css." In order to create animations in CSS3, we must first specify a transition for a set of elements. We want to perform some CSS acrobatics on our images, so add the following to the `img` selector:

		-webkit-transition: all 2s;
		-moz-transition: all 2s;
		-o-transition: all 2s;
		-ms-transition: all 2s;  

	Here, we're specifying that we want to animate all of the modified properties of an element. If we want to modify only a single property (like width, for instance) we can specify that in place of `all`. The "`2s`" string is the transition duration, in this case, two seconds.

3. Of course, transitions by themselves are useless. To leverage their power, we need to specify both a trigger for the transition, as well as one or more properties that should change in the transition. Our trigger, in this case, will be when the user hovers over an image, and we can use the `:hover` pseudo class to define the elements to animate:

		img:hover {
			-webkit-transform: scale(2);
			-moz-transform: scale(2);
			-o-transform: scale(2);
			-ms-transform: scale(2);
	
			z-index: 1000;
		}

	Here, we're combining a CSS3 transformation with our transition to effectively animate the process of scaling (by 2) a hovered image. (and the z-index ensures that the hovered image floats to the top)

3. Now that we've added our transition, let's view it in action. Refresh the page, and hover over an image.

4. This is a nice effect, but you no-doubt notice that its not particularly smooth. To add some smoothness, we can use a transition timing function. The available options are `ease`, `linear`, `ease-in`, `ease-out`, and `ease-in-out`. We'll use `ease-in-out` and add it to the end of each transition declaration. Add the following to the 'img' selection (note, this should be the 'img' selector, not the 'img:hover' selector:

		-webkit-transition: all 2s ease-in-out;
		-moz-transition: all 2s ease-in-out;
		-o-transition: all 2s ease-in-out;
		-ms-transition: all 2s ease-in-out;

5. Refesh the page and hover over an image to see the effect of the timing function.

6. The final transition property we'll add is the transition delay, which, as it sounds allows us to specify a period of time to wait before firing the transition. Since we don't want our images to begin to scale unless a user remains over the image, we'll add a delay of 250 milliseconds as the last property on our transition declarations:

		-webkit-transition: all 2s ease-in-out 250ms;
		-moz-transition: all 2s ease-in-out 250ms;
		-o-transition: all 2s ease-in-out 250ms;
		-ms-transition: all 2s ease-in-out 250ms;

7. Refresh the page and hover, one last time to see the delay in (in-)action.

### **[Extra Credit]** Do some research online about CSS Animation Keyframes and modify this sample to utilize that featre.

---
# Resources

1. [mediaqueri.es](http://mediaqueri.es)
2. [Bulletproof Font-Face](http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/)
[Google Web Fonts](http://www.google.com/webfonts)
3. [FontSquirrel.com](http://www.fontsquirrel.com/fontface/generator)
4. [The Book of CSS3](http://thebookofcss3.com/)
5. [CSS3.info](http://css3.info)
6. [CSSPie](http://css3pie.com/)