# 2012 CodeMash HTML5 Precompiler
Contributors: Brandon Satrom, Clark Sell

Tags: HTML5, JavaScript, XHR, XMLHttpRequest

- - -
## Abstract

In this lab we're going to work through incorporating feature detection into your applicaitons or site. Feature detection allows us to deliver a similar experience to all users regardless of browser versions or capabilities.

- - -
## What will you learn?

In this lab you will learn how to incporate the basics of feature detection and polyfilling into your site or application. We will attempt to answer the following questions:

* How to add Modernizr?
* How to test for a browsers capability?
* How to polyfill?

- - - 
## Prerequisites

* IE - we will be using the F12 development tools to force the browser into older document modes

- - - 
### Step #1

1. Open IE9 and run default.htm

Everything should run as expected. You should see a top down list of numbered items as well as a rounded corner figure.

2. Hit *F12* to open the developer tools in IE9
3. Change the *browser mode* to *IE8*

Now the page will just be one line of text loosing the structure and sytle we saw in step 1. This occurs because older browsers do not understand the new HTML5 DOM elements.

- - -
### Step #2

You're faith should not be lost. The first thing we should do is add a library called Modernizr.

1. Open *default.htm*
2. Add a script reference to the Modernizr package found in the scripts folder.

>		<script src="/scripts/modernizr.dev-all.js" type="text/javascript"></script>

3. Return to IE. 
4. If the browser mode is still set to IE8 refresh the page otherwise change it back to IE8

Now your page will display the figure correctly but the style is still off.

5. Add a reference to a css reset sytlesheet. You will find a reset stylesheet already included in the style folder.

>		<link href="css/html5reset.css" rel="stylesheet" />

Now things will look the same across both versions. With both Modernizr and some proper styling we have now achieved feature parity across both new and old browsers without degrading the overall user experience.

** But wait, there are no rounded corners! **

- - -
### Step #3

As we already know HTML5 isn't just one spec but rather many which move independently of each other, feature detection becomes important. Even the latest "modern browsers" don't support it all and each doesn't support it the same. 

The answer? Polyfilling.

Paul Irish defined a polyfill as "A shim that mimics a future API, providing fallback functionality to older browsers." You can also look at that another way and say: "A shim that mimics a current API, providing feature functionality to older browsers".

Since rounded corners is a very well defined thing and we just broke it, let's use a polyfill to fix it. We have already introduced Modernizr, but let's use Moderinizr this time to ask the browser if it in fact supports something. We do this by running a "test". If that test fails we can load a polyfill and once that script is loaded we can then do something with what we loaded. 

1. Let's check to see if the browswer supports rounded corners. 
2. If not, load a polyfill called jquery.corner 
3. Once loaded, lets then round the corners

>		<script type="text/javascript">
>			Modernizr.load({
>				test: Modernizr.borderradius,
>				nope: 'scripts/jquery.corner.js',
>				callback: function () {
>				    $('.roundedCornersAreCool').corner();
>                   $('#myFigure').corner();
>				}
>			});
>		</script>

Refresh our page and we should now see our rounded corners.

- - -
## Resources

* Modernizr: http://Modernizr.com
* The All-In-One Entirely-Not-Alphabetical No-Bullshit Guide to HTML5 Fallbacks: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills
* yepnope.js: http://yepnopejs.com/
* The Developer’s Guide To Writing Cross-Browser JavaScript Polyfills: http://addyosmani.com/blog/writing-polyfills/
* HTML5Doctor: http://html5doctor.com
