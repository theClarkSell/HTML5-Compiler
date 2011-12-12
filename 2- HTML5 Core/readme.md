 Lab 1 - HTML5 Core
## Module 1 - Semantic Markup

### I. From XHTML to HTML5
1. In the 2- HTML5 Core/labs/markup/begin folder, open index.html

2. Replace the Existing (XHTML) on the page with the HTML5 doctype by removing the following:

	`PUBLIC -//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"`

	The end result should be `<!DOCTYPE html>`
	
3. In the `<head>` section, change the `<meta>` tag to read `<meta charset="utf-8" />`

4. Open the page in any browser. It works! Not an earth-shattering change, but its nice to know that we get to eliminate some unneeded cruft in our markup.
  
### II. Semantic HTML5
1. In the  "2- HTML5 Core/labs/markup/begin" folder, open the blog.html page. Take note of the structure and liberal use of `<div>` elements.

2. In the css folder, open "style.css." Notice that the page is being styled using the IDs and classes names of `<div>` elements on our page.

3. Change the `<div id="header">` element to `<header>`. 

3. Surround the `<h1>` and `<h2>` header elements in an `<hgroup>` element. This element doesn't affect the look of your page, but it does effect the way that the browser's outlining algorithm interprets your page. This can be useful in situations where you have a title and subtitle in your "header," but you want these treated as one logical element in the document outline. Check out the links at the bottom of this page for more information about the `<hgroup>` and document outlines.

4. Change the `<div id="nav">` element to `<nav>`, and the `<div id="footer">` element to `<footer>`.

5. Open the page in a browser, and notice that a few of the elements we just changed are unstyled. Open style.css and change the CSS selector references that point to element ID's (using the '#' symbol) by removing those symbols. 	

	`#header -> header`

	`#nav -> nav`

	`#footer -> footer`

6. Change both of the `<div class="article">` elements to `<article>`. Open style.css and change the CSS selector reference that read ".article" to "article," without the dot (.).
**Questions to ponder:** Why aren't we changing `<div id="blog">`? Is there an [HTML5 sectioning element](http://www.w3.org/TR/html5/sections.html#sections) that you think might work in its place? Why or why not? Why do you think the W3C chose not to specifically define a sectioning element (like `<main>` for the primary or main content of a page)?

7. Change the `<h3>` tags in the article tag to `<h1>`, and talk about sectioning elements allowing you to use headers without affecting the outlining algorithm of the document.

8. Add a `<header>` tag in place of each `<div class="header">` and a `<footer>` tag in place of each `<div class="footer">` for the articles on the page. Sectioning elements--like `<article>` `<section>` and the like--can have their own `<header>` and `<footer>` elements, in addition to those on the page itself. 

9. Open style.css and change the styles for `.main-head,`, `.article`, `.article-head` and `.footer` styles to match the changes you made in step #8. Don't be afraid to ask for help if you get stuck. Once you're done, refresh the page and make sure that things still look the same as before.

10. Add a `<time>` element around the date in the footer of each article. Set the pubdate and datetime properties similar to the example below.
**Question to ponder:** The `<time>` element doesn't change the look and feel of our page, so what value do you think it might have (the cryptic UTC datetime value is a hint about the "intended audience" for this element)? 

	`<time datetime="2011-05-18T08:15:16.001-05:00" pubdate>May 18, 2011</time>`

11. Now, let's change the markup for the sidebar section of the page. Find the element `<div id="aside">` and change it to `<aside>`. Then change the `<div id="nav">` to `<nav>` and `<div id="section">` to `<section>`.

12. Now, go back to style.css and change the references to "`#aside`" to "aside."

13. Open the page in your browser again, and notice that everything looks exactly as it did before. 
**Questions to ponder:** Why are these new tags considered "better" than simply using divs with IDs or classes? Why are they referred to as "semantic" elements?   

14. Surround every occurrence of the text "HTML5" with the `<mark>` tag and run the page in the browser. Notice how the browser styles the test automatically. 
**Questions to ponder:** What possible use cases for the `<mark>` tag can you think of? 

### **[EXTRA CREDIT]** Use a Polyfill for an older browser (In this example, we'll use IE9 to simulate IE8 behavior)
1. Open the page with Internet Explorer 9 (if you haven't already), and hit the F12 key (or use the menu) to open the developer tools.

2. Click on the "Browser Mode" menu item to the right of the menu bar. You should see options similar to the image below. Select "Internet Explorer 8," or "Internet Explorer 7" and watch how the page changes.
![Changing the Browser Mode in IE9's F12 Developer Tools](https://github.com/csell5/HTML5-Compiler/raw/master/2-%20HTML5%20Core/labs/assets/ie9BrowserMode.png "IE9 Browser Tools")

3. In the `<head>` of your page, add the following `<script>` tag to reference Modernizr:
`<script src="../../../../lib/js/modernizr-2.0.6.js" type="text/javascript" charset="utf-8"></script>`

4. Refresh the page, and notice that, even though you're still viewing the page as an IE8 user would, things are styled correctly. **Question to ponder:** what does Modernizr do to make this work? (Hint: Check out Modernizr.com)

---
## Module 2 - Audio and Video

### I. Audio
1. Open the "2 - HTML5 Core/labs/video_and_audio/begin/audio.html" page.

2. Add an audio tag to point to one of the music files in the  "media/" folder.
````
<audio id="audio" src="../media/Nirvana-In Bloom.mp3" controls autoplay></audio>
````

3. Now open the page in the browser. If you are using Safari, Chrome or IE9, the song should play automatically, and you should see an audio player on the page. If you are using, FireFox or Opera, the song won't play because the MP3 file type isn't supported. Change the extension in #2 to ".wav" and reload the page.

4. Because a single audio file format is not supported across all browsers, we'll need to provide multple types on our page, and we can do so with the `<source>` element. Remove the "src" property from your `<audio>` tag and add the following elements between the open and close `<audio>` tags
````
<source src="../media/Nirvana-In Bloom.mp3" />
<source src="../media/Nirvana-In Bloom.wav" />
````

5. Now lets add some JavaScript to manipulate the volume of the playing song. First, add a `<script>` tag to audio.html. Note that the HTML5 spec no long requires the `type` attribute.

6. Now insert the following code to manipulate the volume, and display the result. 
		````
		(function($) {
		var audio = document.querySelector('audio');
		var vol = document.querySelector('#vol');

		vol.innerText = Math.round(audio.volume*10);
				
		$('#turnUp').click(function () {
			var aVol = audio.volume;

         if (audio.muted) {
	   		audio.muted = false;
				vol.innerText = 1;
				return;
	 		}

         if (aVol+.1 < 10) {
	   		audio.volume = aVol + .1;
				vol.innerText = Math.round(audio.volume*10);
			}
		});

		$('#turnDown').click(function () {
			var aVol = audio.volume;

	   	if (aVol - .1 > 0) {
	   		audio.volume = aVol - .1;            
				vol.innerText = Math.round(audio.volume*10);
			} else {
	   		audio.muted = true;
				vol.innerText = 0
	  		}
		})
		})(jQuery);
   	````

7. Now run the page and click the buttons to turn the volume up and down.

### II. Video
1. Open the "2 - HTML5 Core/labs/video_and_audio/begin/video.html" page.

2. Add the following `<video>` tag inside the body of the page:
````
<video src="../media/video.webm" poster="../media/big-buck-bunny_poster.jpg"
		controls loop preload=auto playbackRate="1" width="800">
</video>
````
**Note**: WebM is supported by Chrome and IE9 (with a plugin). Use .mp4 with IE9+ and Safari, and .ogg for Firefox of Opera.

3. Open the file in a browser that supports the format you chose. Click the play button and take note of the controls offered by your browser of choice (they're not the same for all browsers).

4. Now open the page in another browser that doesn't support your chosen format. Notice that the video doesn't play.

5. To support multiple browsers, we're going to need to add some additional `<src>` tags for formatting. Remove the `src` attribute from the video element and add the following between the open and closing `<video>` tags:
````
<source src="../media/video.mp4" type="video/mp4" /> 
<source src="../media/video.webm" type="video/webm" />
<source src="../media/video.ogg" type="video/ogg">
````

6. Now let's add some simple JavaScript to manipulate the video. Specifically, let's add a `<script>` block with the following code to play and pause the video when the user clicks anywhere on the Video surface (as opposed to only when they click the button):
	````
   	var rate = 1;
		var v = document.querySelector('video');

		v.addEventListener('click', function() {
			if (v.paused) {
   	   	v.play();
         	v.playbackRate = rate++;
      	} else {
        		v.pause();
      	}
		});
	````

### **[EXTRA CREDIT]** Add support for non-HTML5 Browsers (examples assume using IE9 for IE8 targeting)
1. Open the page with Internet Explorer 9 (if you haven't already), and hit the F12 key (or use the menu) to open the developer tools.

2. Click on the "Browser Mode" menu item to the right of the menu bar. You should see options similar to the image below. Select "Internet Explorer 8," or "Internet Explorer 7" and notice that the video will no longer work.
![Changing the Browser Mode in IE9's F12 Developer Tools](https://github.com/csell5/HTML5-Compiler/raw/master/2-%20HTML5%20Core/labs/assets/ie9BrowserMode.png "IE9 Browser Tools")

3. In the last example, we used Modernizr to detect support for an HTML5 feature. We can use Modernizr for video, but its also possible to use a built-in compatability feature of the `<video>` and `<audio>` tags to handle those cases where the Media in the borwser is not supported.

4. If Media isn't supported by the user's browser, the video or audio elements will not be rendered, and the browser will instead render anything inside the `<video>` and `</video>` tags, be it text or another HTML element. We can use this feature to add a Flash or Silverlight `<object>` tag that will render the video using those technologies as a fallback. If the browser does support `<video>,` the Flash or Silverlight video will never load

5. Add the following `<object>` tag to the `<video>` element, after the `<src>` elements:
````
<object type="application/x-shockwave-flash" data="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf" width="640" height="360">
	<param name="movie" value="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf" />
	<param name="allowFullScreen" value="true" />
	<param name="wmode" value="transparent" />
	<param name="flashVars" value="config={'playlist':['http%3A%2F%2Fsandbox.thewikies.com%2Fvfe-generator%2Fimages%2Fbig-buck-bunny_poster.jpg',{'url':'http%3A%2F%2Fclips.vorwaerts-gmbh.de%2Fbig_buck_bunny.mp4','autoPlay':false}]}" />
	<img alt="Big Buck Bunny" src="http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg" width="640" height="360" title="No video playback capabilities, please download the video below" />
</object>
````

6. Now refresh the page in IE8. Right-click on the view, and notice that the Flash context menu shows up. Congrats, you now have a robust HTML5 Video solution that supports all browsers!

---
## Module 3 - HTML5 Forms

### I. New Input Types
1. Open order.html

2. Change the some of the input fields
	a. Email input to type="email"
	b. Change Web Site to type="url"
	c. Change Phone number to type="tel"
	d. Change Delivery date to date
	e. Change quantity to type="num"

3. View these in the browser and try to enter some dummy data. Trigger some validations

4. Observe the Date field in various browsers (Opera, Chrome, IE and Safari, for instance)

### **[EXTRA CREDIT]** Add a jquery UI Date Picker using Modernizr
1. Add references to Modernizr and jQuery UI to the page

2. Use Modernizr to check for date support, and call datepicker() on the date elements, if not supported.

### II. Placeholder Text
1. Add Placeholder fields to the form

2. Open the page in the browser and observe the results

### **[EXTRA CREDIT]** Add a Placeholder Text Polyfill
1. Now open the page in an unsupporting browser (IE9)

2. Use Mike Taylor's Placeholder Polyfill, along with Modernizr.

### III. Validation
1. Add the required attribute to the name field

2. Open the page and try to submit the form with no Name

3. Specify the pattern and title for the telephone field

4. Open the page and try to submit with an invalid phone number

5. Note that the email and url fields have built-in patterns

# Resources
1. [The HTML5 Doctype](http://www.w3.org/TR/html5/syntax.html#the-doctype)
2. [New HTML5 Elements](http://www.w3.org/TR/html5/elements.html#elements)
3. [The `<hgroup>` Element](http://www.w3.org/TR/html5/sections.html#the-hgroup-element)
4. [The `<time>` Element](http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element)
5. [Modernizr](http://modernizr.com)