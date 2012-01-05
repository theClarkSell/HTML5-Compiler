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

* ./default.html

this is the default markup page we will use for Drag and Drop.

* ./scripts/default.js

this is our JavaScript file where all of our event handlers and other functions will be placed.

* ./style/style.css

this is our style elements

- - - 
### Step #1

To kick things off lets just run *default.html*. Out of the gas you might notice if you take one of the images on the left of the you can actually already drag it. This is because anything with an anchor tag is actually draggable by default.

** Making it draggable **

1. We can make any content draggable by just adding an attribute to our DOM element
>	draggable="true"
2. Add that draggable attribute to the following:
* each li ( three total )
* the div element containing the shield
3. 


### Step #2



---
### Extra Credit

One of the great features you can enable with Drag and Drop is the ability to do things like interact with the desktop. If you have ever seen something like SkyDrive.com you can add files just by dragging files into the browser window. 

http://www.html5rocks.com/en/tutorials/file/dndfiles/#toc-selecting-files-dnd

- - -
## Resources

* W3C Drag and Drop Spec: http://dev.w3.org/html5/spec/Overview.html#dnd
* whatwg: http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#dnd
* MDN: https://developer.mozilla.org/En/DragDrop/Drag_Operations
* HTML5 Doctor Demo: http://html5doctor.com/native-drag-and-drop/
* Demo: http://html5demos.com/drag
 

