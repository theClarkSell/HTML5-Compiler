# Lab 1 - HTML5 Core
## Module 1 - Semantic Markup

1. From XHTML to HTML5
	1. Open an HTML file in a folder (will already have XHTML elements defined)
	2. Replace the Existing XHTML doctype with the HTML5 doctype
	3. Replace the default meta charset line with the HTML5 line
	4. Open the page in a browser. Notice how it works
2. Semantic HTML5
	1. Open the blog.html page, and notice the structure
	2. Change the div with the id header to <header>
	3. Surround the Title and subtitle header elements in an `<hgroup>` element
	4. change the div with an id of "nav" to `<nav>`
	5. Change the div with an id of "footer" to `<footer>`
	6. Change both divs with class="article" to `<article>`
	7. Change the `<h3>` tags in the article tag to `<h1>`, and talk about sectioning elements allowing you to use headers without affecting the outlining algorithm of the document.
	8. Add `<header>` and `<footer>` tags to each article
	9. Add a `<timestamp>` element around the pubdate of each article
	10. Run the page, and notice that the entire page is unstyled
	11. Change the styles in style.css, moving away from div and class references to actual markup. Add the finished code to the doc for reference
	12. After fixing, re-run the page again
[EXTRA CREDIT] Use a Polyfill for an older browser (example assumes you are running IE9 in order to simlulate an IE8 experience)
	1. Open the page with IE, and hit F12 to open the developer tools
	2. Change the document mode to IE8 and refresh the page
	3. Now add a reference to Modernizr and refesh the page

## Module 2 - Audio and Video

1. Audio
	1. Open the audio.html page
	2. Add an audio tag to point to one of the music files in the  music/ folder
	3. Open the file in your browser
	4. Now open it in a browser that doesn't support the audio format you chose.
	5. Add a supported format to the markup
	6. Add some JavaScript to Pause/Play audio no matter where you click on the player.
[EXTRA CREDIT] Audio and the FileAPI
	1. If you have some time, add some code that will read the ID3 tags and display the artist information underneath the player. 
2. Video
	1. Open the video.html file
	2. Add an video tag to point to the video file
	3. Open the file in a browser that supports the format you chose.
	4. Now open it in a browser that doesn't support that format.
	5. Add some additional `<src>` tags for formatting
[EXTRA CREDIT] Test with an older browser (examples assume IE9 for IE8 targeting)
	1. Open the page in IE9 and open the dev tools (F12)
	2. Change the browser to IE8 and notice that video no longer works.
	3. Change the markup to fallback to Silverlight
	4. Add some JavaScript to speed up or slow down the video when a button is clicked.

## Module 3 - HTML5 Forms

1. New Input Types
	1. Open order.html
	2. Change the some of the input fields
		a. Email input to type="email"
		b. Change Web Site to type="url"
		c. Change Phone number to type="tel"
		d. Change Delivery date to date
		e. Change quantity to type="num"
	3. View these in the browser and try to enter some dummy data. Trigger some validations
	4. Observe the Date field in various browsers (Opera, Chrome, IE and Safari, for instance)
[EXTRA CREDIT] Add a jquery UI Date Picker using Modernizr
	1. Add references to Modernizr and jQuery UI to the page
	2. Use Modernizr to check for date support, and call datepicker() on the date elements, if not supported.
2. Placeholder Text
	1. Add Placeholder fields to the form
	2. Open the page in the browser and observe the results
[EXTRA CREDIT]
	1. Now open the page in an unsupporting browser (IE9)
	2. Use Mike Taylor's Placeholder Polyfill, along with Modernizr.
3. Validation
	1. Add the required attribute to the name field
	2. Open the page and try to submit the form with no Name
	3. Specify the pattern and title for the telephone field
	4. Open the page and try to submit with an invalid phone number
	5. Note that the email and url fields have built-in patterns
