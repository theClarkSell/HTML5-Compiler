# Lab 1 - HTML5 Core
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

2. In the css folder, open "style.css." Notice that the page is beying styled using the IDs and classes names of `<div>` elements on our page.

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

14. Surround every occruence of the text "HTML5" with the `<mark>` tag and run the page in the browser. Notice how the browser styles the test automatically. 
**Questions to ponder:** What possible use cases for the `<mark>` tag can you think of? 

### **[EXTRA CREDIT]** Use a Polyfill for an older browser (In this example, we'll use IE9 to simulate IE8 behavior)
1. Open the page with IE, and hit F12 to open the developer tools

2. Change the document mode to IE8 and refresh the page

3. Now add a reference to Modernizr and refesh the page

---
## Module 2 - Audio and Video

### I. Audio
1. Open the audio.html page

2. Add an audio tag to point to one of the music files in the  music/ folder

3. Open the file in your browser

4. Now open it in a browser that doesn't support the audio format you chose.

5. Add a supported format to the markup

6. Add some JavaScript to Pause/Play audio no matter where you click on the player.

### **[EXTRA CREDIT] Audio and the FileAPI**
1. If you have some time, add some code that will read the ID3 tags and display the artist information underneath the player.  

### II. Video
1. Open the video.html file

2. Add an video tag to point to the video file

3. Open the file in a browser that supports the format you chose.

4. Now open it in a browser that doesn't support that format.

5. Add some additional `<src>` tags for formatting

### **[EXTRA CREDIT]** Test with an older browser (examples assume IE9 for IE8 targeting)
1. Open the page in IE9 and open the dev tools (F12)

2. Change the browser to IE8 and notice that video no longer works.

3. Change the markup to fallback to Silverlight

4. Add some JavaScript to speed up or slow down the video when a button is clicked.

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

# Reources
1. [The HTML5 Doctype](http://www.w3.org/TR/html5/syntax.html#the-doctype)
2. [New HTML5 Elements](http://www.w3.org/TR/html5/elements.html#elements)
3. [The <hgroup> Element](http://www.w3.org/TR/html5/sections.html#the-hgroup-element)
4. [time]: http://time "The <time> Element"