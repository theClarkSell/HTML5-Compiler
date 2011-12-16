# Lab 2 - JavaScript APIs

---
## Module 1 - Geolocation

### I. Geolocation and Mapping
[Note: This demo uses the Microsoft Bing maps control, but you are welcome to use the Google Maps control if you prefer. The relevant JavaScript for Geolocation should be identical for both.]

1. Go to [sdfds]() to obtain a key for the BingMaps control

2. Open map.html and enter your key

3. Now, add a geolocation call

4. The API call returns a coords object with the users lat, long and other infromation. Let's display this information to the user, and also place their current location on a map. 

5. Refresh the page and click "Accept" to give your browser permission to use your location.

6. One of the great features of Geolocation is that the browser will typically adapt its mechanism for determining your position based on the most-reliable information. On mobile devices, this means that the browser takes GPS location data into account. If you have a mobile device emulator (iPhone via XCode or the Windows Phone Emulator in Visual Studio), open this page in the built-in browser. Try modifying the GPS-reported location in the emulator (supported with both iOS and WP7 emulators) and refresh the page to see the mapped location change.

### II. Graceful Degredation

1. Because geolocation is opt-in, not all of your users will with to use it. What more, users with an older browser won't have the feature available, so you'll want to consider degrading the experience in a way that still makes this feature useful. As such, we'll add some code that will allow the user to manually enter their address, and then use that information to place a pushpin on the map. First, let's add some logic that handles any error that might occur, such as the user declining to share their location automatically:

2. Now, let's flesh out the fallback function

3. Refresh the page, and click "Decline" when you are asked to share your information (you may need to close the window and re-open it). Enter your address by hand and click enter.

### ***[Extra Credit]*** Check out the Modernizr [Shims and Polyfils list]() for a geolocation shim, and add it to the page.

---
## Module 2 - Canvas

### I. Basic Lines and Shapes

1. Open sales.html and add a canvas element to the page.

2. Open style.css and take note of the css style for the canvas element.

3. Add JS to the bottom of the page to get the canvas element and select the 2d drawing content.

4. Draw the y axis on the screen

5. Draw the x axis and the line caps

6. Add the salesData object to hold our categories and sales figures.

6. Draw the bars on the graph

### II. Working with Text

1. Add code to label the x-axis

2. Add code to label the y-axis

3. Add code to label the bar chart

### III. Working with Colors and Gradients

1. Create an array or colors and set the fillStyle

2. Refresh the page

3. Add a create gradient function

4. Call this function in place of the existing fillStyle line.

5. Refresh the page.

### IV. Adding Images

1. Remove the fillStyle and fillRect code, and add the following code to create an image and set it's onload.

2. set the image src to the correct image path.

### **[Extra Credit]** Use the [Explorer Canvas](
3. Draw the x axis on the screen

4. Draw the y axis and the line caps) and [Canvas Text](http://code.google.com/p/canvas-text/) libraries to polyfill canvas support for older browsers. See this [MSDN Magazine Article]() for more information.

---
## Module 3 - Web Sockets


---
## Module 4 - Web Storage

### I. Local Storage

1. Open the order.html page and add the following to the script block at the bottom of the page:

2. Refresh the page and enter some data in the fields and click "Save for later"

3. Open up the developer tools in your browser and inspect the local storage. Some browsers have a visual inspector, but all browsers allow you to open the console tab and type `window.localStorage` to see the contents of the object. Do so and make sure that your data has been saved.

4. Refresh the page. The fields are blank, so lets use the information in local storage to re-populate these when the user returns to the page:

5. Now refresh the page. You saved data should now be in the form. To verify that localStorage is persistent, close the browser, re-open and return to this page.

### II. Session Storage

1. Where Local Storage is persistent, Session Storage only lasts for the user's current session. Let's see how this works by adding a Session variable that displays to the user the time the order was places. Add the following to the page:

2. Refresh the page, and take note of the timestamp on the form. Open another tab and navigate to the same page. Notice that the timestamp is exactly the same. Now, close both tabs and re-open the page. Since a new session has been initiated, the timestamp should now be different.

### ***[Extra Credit]*** Use a polyfilling solution to add Web Storage support for older browsers.

1. Open IE and F12

2. Change the browser to IE8 and notice how the form fields are no longer filled in.

3. Add a reference to the local storage polyfill using Modernizr

4. Refresh the page and notice that things work.

---
## Module 5 - Drag and Drop


___

# Resources

1. [Integrating Geolocation into Web Applications](http://msdn.microsoft.com/en-gb/magazine/hh580735.aspx)
2. [Using HTML5 Canvas for Data Visualization]()
3. [Explorer Canvas]()
4. 