# Lab 2 - CSS3

---
## Module 1 - Effects

### I. Border Radius

1. Open "3- CSS3\labs\effects\begin\photos.html"
	
2. Open "css/style.css" and add the following to the .photoBox selector:
	
3. Refresh the page
	
4. Now change the property of .photoBox to create a alternative box effect:
	
### **[EXTRA CREDIT]** Add a Polyfill that creates border-radius effects for older browsers (Assumes the use of IE9 to target IE8 for testing):

1. Open the page with Internet Explorer 9 (if you haven't already), and hit the F12 key (or use the menu) to open the developer tools.

2. Click on the "Browser Mode" menu item to the right of the menu bar. You should see options similar to the image below. Select "Internet Explorer 8," or "Internet Explorer 7" and watch how your beautiful rounded corners disappear.

	![Changing the Browser Mode in IE9's F12 Developer Tools](https://github.com/csell5/HTML5-Compiler/raw/master/2-%20HTML5%20Core/labs/assets/ie9BrowserMode.png "IE9 Browser Tools")

3. Use Modernizr to detect support for border-radius

4. Load CSSPie and round those corners

### II. Drop Shadow

1. Open style.css and add the following to the .photoBox selector

2. Run the page, and notice the shadow effect added around all of the images.

3. Now add the inset, blur, spread and color properties to change the shadow up.

4. Rerun the page and note the difference.

5. Spend a few moments tweaking the CSS property values and noting the change to each element in the browser.

### III. Text Shadow

1. Open style.css and add the following to the .title selector:

2. Run the page, and notice the shadow effect added to the text

3. Now add multiple shadows with the following:

4. Refresh the page and note the difference.

5. Spend a few moments tweaking the CSS property values and noting the change to each element in the browser.

### **[Extra Credit]** Use a polyfill to add text-shadow support in older browsers. (https://github.com/heygrady/textshadow)

1. Open IE9 and hit F12

2. Change to IE8

3. Use Modernizr to check for text-shadow support and conditionally load a polyfill if not supported.

4. In the callback, add the text-shadow effect.

5. Run the page and verify the result.

---
## Module 2 - Web Fonts

1. Open the "3- CSS3\labs\font-face\begin\photos.html" file.

2. Open "css/style.css" and create a @font-face declaration on the page:

3. Modify the body style declaration to use this new font family. 

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
6. CSSPie