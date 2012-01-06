# 2012 CodeMash HTML5 Precompiler
Contributors: Brandon Satrom, Clark Sell

Tags: HTML5, JavaScript, DOM Query Selectors

This contains all of the source and presentations used for the 2012 CodeMash HTML5 precompiler.

---
## Abstract

In this lab we will work through a few common scenarios to query and interact with the DOM.

---
## Prerequisites

* fingers
* computer

---
## What will you learn?

In this lab you will learn the basics for using DOM query selectors.

* How to query for an element
* How to query for multiple elements
* How to query using CSS3 selectors
* How to bind events
* How to interact with elements

---
## The Lab

This lab consists of three files.

		./default.htm
		./style/style.css
		./scripts/default.js

The markup has already been completed and all of our work will take place within the default.js.

---
### Step #1, check out the landscape

With all three files open, take a quick look the markup as well as some of the simple styling. The elements have simple ID's that we will use to do some of our selecting.

---
### Step #2, select something

If you have ever done any web development chances are it didn't take too long before you needed to bind a control to some event. 

Let's first start by selecting our input element. Let's grab that element by it's ID and set it to an object. For this we will just 

        var inputElement = document.getElementById('inputElement');

With that selected we could now bind that element to an function.

        inputElement.addEventListener('change', handleInputElementChanged, false);

Where that function just prints a simple message on the screen 

        var messageElement = document.getElementById('messages');

        function handleInputElementChanged(evt) {
            console.log('handleInputElementChanged Called');

            messageElement.textContent = 'handleInputElementChanged Called';
        };

---
### Step #3, but wait that wasn't a query selector

We did nothing more than grab an element by it's `id`. Let's replace the original query ( the following line ):

        var inputElement = document.getElementById('inputElement');

to now query the DOM and return us the first `input` element it finds.

        var inputElement = document.querySelector('input');

Return to the browser and try things out. Things should continue to work as they did before.

---
### Step #4, give it all to me

If there is `querySelector` there must be `querySelectorAll` right? Yep.

This time let's assign a click handler to our awesome button. 

        document.getElementById('buttonElement').addEventListener('click', handleButtonClick, false);

And add a new function called `handleButtonClick`.

        function handleButtonClick(evt) {
            console.log('handleButtonClick Called');
        };
  
In this function, query for all `li` and add the .border css class to them.

        var items = document.querySelectorAll('li');
        
        [].forEach.call(items, function(item) {
            item.classList.add('addBorder');
        });

---
### Step #5, why not add another event handler?

CSS3 Selectors are pretty powerful. One of the great things about our DOM Query Selectors is we can leverage CSS3 Selectors.

Let's add another event handler to the same button we did in the previous step.

        document.getElementById('buttonElement').addEventListener('click', handleButtonClick2, false);

Now lets implement that function:

        function handleButtonClick2(evt) {
            console.log('in handleButtonClick2');
        };

Like before, we are going to call the querySelectorAll function but this time we're going to use a more complicated selector. 

In HTML5 we have the ability to add custom attributes to our elements called `data-`. If you look in our markup our anchor tags all have an attribute called `data-something`. Let's query for all `data-something` that will equal `true`.

        var anchorItems = document.querySelectorAll('*[data-something=true]');

With that array of elements we can now just iterate through them and display the id's in the `messageElement`.

        [].forEach.call(anchorItems, function(item) {

            var p = document.createElement('p');
            p.textContent = item.id;

            messageElement.appendChild(p);        
        });

---
### Extra Credit

Now that we know the basics of selecting things in the DOM try using your favorite CSS3 Pseudo Selector and see what you can come up with. There is a great walk through here:
 
http://www.456bereastreet.com/archive/200601/css_3_selectors_explained/

---
## Resources

* W3C XHR Spec: http://www.w3.org/TR/selectors-api/
* CSS3 Selectors Spec: http://www.w3.org/TR/selectors/
* CSS3 Selectors Explained: http://www.456bereastreet.com/archive/200601/css_3_selectors_explained/
