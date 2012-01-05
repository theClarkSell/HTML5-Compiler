# 2012 CodeMash HTML5 Precompiler
Contributors: Brandon Satrom, Clark Sell

Tags: HTML5, JavaScript, Drag and Drop

- - -
## Abstract

In this lab we're going to work through building a simple web page utilizing HTML5 Drag and Drop

- - -
## What will you learn?

In this lab you will learn the basics for creating drag able content and consuming it.

* How to enable draggable content
* How and when to use the built in drag and drop events
* How to use the DataTransfer object
* Dragging out of the browser
* Drag Effects

- - - 
## Getting Started

For purposes of this lab we're going to write everything in three different files.

		./default.html

this is the default markup page we will use for Drag and Drop.

		./scripts/default.js

this is our JavaScript file where all of our event handlers and other functions will be placed.

		./style/style.css

this is our style elements

- - - 
### Step #1, Draggable

To kick things off lets just run *default.html*. Right away take one of the images on the left of the you can actually already drag it. This is because anything with an anchor tag is actually draggable by default.

**Make it draggable**

1. We can make any content draggable by just adding an attribute to our DOM element

		draggable="true"

2. Add the draggable attribute to the following:

* each `li` ( three total )
* the `div` element containing the shield

3. Now when you return to the browser, you can also drag around each `<li>` as well as the HTML5 Shield.

### Step #2, Event Basics 

With our elements now draggable we need to setup our events to orchestrate dragging and dropping.

In this step we are going to create our basic event structure 

1. Open `./scripts/default.js`
2. Take note of the fact there are already a number of shell functions of which line up to the exposed events from Drag and Drop.

* dragstart
* dragenter
* dragover
* dragleave
* dragdrop
* dragend

3. With our functions in place we need to align our events to each of the DOM elements we expect to have an event. For this we will use the new DOM Query Selector and just select all elements which are draggable.

The CSS3 Query Selector would look like:

		*[draggable=true]

Using it in JavaScript would look like this:

		var listItems = document.querySelectorAll('*[draggable=true]');

4. The `listItems` collection contains all of our elements we need to add the event listeners. Now add wire up those events:

		[].forEach.call(listItems, function(item) {
			item.addEventListener('dragstart', handleDragStart, false);
			item.addEventListener('dragenter', handleDragEnter, false);
			item.addEventListener('dragover', handleDragOver, false);
			item.addEventListener('dragleave', handleDragLeave, false);
			item.addEventListener('drop', handleDrop, false);
			item.addEventListener('dragend', handleDragEnd, false);
		});

5. Each event handler already contained a `console.log('in here');`. This was added so you could watch the events fire in the console Window of the a browser. Return to your browser, open the console window and start to drag things around. You should see message start to appear as those events are fired.

Hover over the a drop target and notice how the 'drag over' event continues to get fired? Remember this point for later.

### Step #3, dragstart

As it sounds 'dragstart' is the first event that will get fired when we start to drag something. When the user starts to drag our element we want to do three things:

* set an opacity such that the user has a visual queue things are changing
* set our desired effect
* setup some data that will travel along when the object moves.

1. To set the opacity we are going to take our argument passed in from the event and set it opacity:

		e.target.style.opacity = '0.4';

2. To set the effect we are going to set a property on the dataTransfer object:

		e.dataTransfer.effectAllowed = 'move';

3. Now we will setup some data of which will transfer along with the move. In our case we are going to send along the element ID of the thing being moved so we can query and hide it later. ( this is just for purposes of a demo )

		e.dataTransfer.setData('Text', this.id);

### Step #3, dragenter

As it sounds `dragenter` is the event that fires right when your mouse cursor passes into the draggable element.

For purposes of this, what we want to do is add a new css class to the element we entered. This css class will show the user that it's a valid target to drop over.

		e.target.classList.add('over');

Now we need to add that class to our `./style/style.css`.

		.over {
			border: 6px dashed red;	
		}

**note** The `dragenter` event is correct event to do things like adding css classes to an element, rather than something like `dragover`. This is because `dragenter` will only fire once where `dragover` will continue to fire. Doing so will force the browser to only re-render the change once rather than over and over.

### Step #3, Since on on the subject of CSS

In the last set we introduced some new style, let's take the opportunity to change a few other things. As we already know any element can be draggable, but some elements already have some default behavior. Let's use a CSS3 selector and select all draggable elements and set the user select to none.

1. Open `./style/style.css`
2. Add the following CSS:

		[draggable] {
  			-moz-user-select: none;
  			-webkit-user-select: none;
  			user-select: none;
		}

3. Now lets select all `draggable` elements set to `true`, and set default cursor to `move`.

		*[draggable=true] {
  			cursor: move;
		}

4. Some elements are draggable by default. Here lets query for anchor tags and change it's cursor.

		[draggable] a {
			cursor: move;
		}

**note** we are doing some CSS3 things here for the purposes of learning. There might be a better way to structure your CSS such that your not querying the same thing different times.

### Step #3, dragover
### Step #3, dragleave
### Step #3, drop
### Step #3, dragend




---
## Extra Credit

One of the great features you can enable with Drag and Drop is the ability to do things like interact with the desktop. If you have ever seen something like SkyDrive.com you can add files just by dragging files into the browser window. 


		data-downloadurl="
	        application/octet-stream
	        :html5.png
	        :[path]"

where `[path]` is the path of the image. Example:

		file:// … /HTML5-Compiler/4%20-%20JavaScript%20API/Labs/Drag_and_Drop/end/images/HTML5_Black.png

		http://localhost:8080/images/html5_Black.png

References:

* http://www.html5rocks.com/en/tutorials/file/dndfiles/#toc-selecting-files-dnd

- - -
## Resources

* W3C Drag and Drop Spec: http://dev.w3.org/html5/spec/Overview.html#dnd
* whatwg: http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#dnd
* MDN: https://developer.mozilla.org/En/DragDrop/Drag_Operations
* HTML5 Doctor Demo: http://html5doctor.com/native-drag-and-drop/
* Demo: http://html5demos.com/drag
 

