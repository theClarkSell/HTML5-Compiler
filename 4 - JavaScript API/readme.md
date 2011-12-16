# Lab 3 - JavaScript APIs

---
## Module 1 - Geolocation

### I. Geolocation and Mapping
[Note: This demo uses the Microsoft Bing maps control, but you are welcome to use the Google Maps control if you prefer. The relevant JavaScript for Geolocation should be identical for both.]

1. Go to [The Bing Maps Portal](https://www.bingmapsportal.com) to obtain a key for the BingMaps control. See [this article](http://msdn.microsoft.com/en-us/library/ff428642.aspx) for more information.

2. Open "4- JavaScript API/labs/geolocation/begin/map.html" and run the page. You should see nothing but an empty box with a border at this point. Inspect both the map.html file and css/style.css to inspect the existing styles and elements on the page.

3. Open js/geolocation.js and enter the following, replacing the text "your_key_here" with the key you obtained in step 1:

		`var _creds = "your_key_here";
		var mapDiv = document.getElementById("map");
		var _map = new Microsoft.Maps.Map(mapDiv, { credentials: _creds });`

4. Now, create a locate function:

		`function locate() {
    		navigator.geolocation.getCurrentPosition(function (position) {
      		var coordinates = position.coords;
        		
				setDetails(position);
			}, errorHandler);
		}`

5. Add an empty function named `errorHandler` (we'll flesh this out later):

		`function errorHandler(e) {}`

6. Add the `setDetails` function, which will display the users lat and long information on the screen:

		`function setDetails(position) {
			$('#lat').text('Latitude: ' + position.coords.latitude);
			$('#long').text('Longitude: ' + position.coords.longitude);
			$('#accuracy').text('Accuracy: ' + position.coords.accuracy + ' Meters');
			$('#geoDetails').fadeIn('slow');
		}`

7. Now, and add a call to locate just below the method:

		`locate();`

Refresh the page and be sure to give the browser permission to use your location.

8. The API call returns a coords object with the users lat, long and other infromation. By itself, this information isn't very interesting, so let's use this information to place a pushpin on  a map. Start by adding the following function:

		`function placeLocationOnMap(latitude, longitude) {
    		var location = new Microsoft.Maps.Location(latitude, longitude);
    		// Add a pushpin to the map representing the current location
    		var pin = new Microsoft.Maps.Pushpin(location);
    		_map.entities.push(pin);
		}`

9. Now, add the following just above the `setDetails(position);` line from step #4:

	`placeLocationOnMap(coordinates.latitude, coordinates.longitude);`

10. Refresh the page and click "Accept" (if prompted) to give your browser permission to use your location. You should now see the map control centered on a location (reasonably) near you. 

11. One of the great features of Geolocation is that the browser will typically adapt its mechanism for determining your position based on the most-reliable information. On mobile devices, this means that the browser takes GPS location data into account. If you have a mobile device emulator (iPhone via XCode or the Windows Phone Emulator in Visual Studio), open this page in the built-in browser. Try modifying the GPS-reported location in the emulator (supported with both iOS and WP7 emulators) and refresh the page to see the mapped location change.

### II. Graceful Degredation

1. Because geolocation is opt-in, not all of your users will with to use it. What's more, users with an older browser won't have the feature available, so you'll want to consider degrading the experience in a way that still makes this feature useful. As such, we'll add some code that will allow the user to manually enter their address, and then use that information to place a pushpin on the map. First, let's add some logic that handles any error that might occur, such as the user declining to share their location automatically. Replace the empty `errorHandler` function with the following:

		`function errorHandler(e) {
	    	if (e.code === 1) { // PERMISSION_DENIED
	    	    displayError('Please enter your location in the form below');
	   	 } else if (e.code === 2) { //POSITION_UNAVAILABLE
	   	     displayError('Cannot find your location. Make sure your network connection is active and refresh the page to try again.');
	  		} else if (e.code === 3) { //TIMEOUT
	      	  displayError('Cannot find your location. Refresh the page to try again, or provide you address in the form below.');
	    	}
	
			showFallback();
		}`

2. Add the `displayError()` function:

		`function displayError(msg) {
			$('#error').text(msg);
		}`

2. Now, let's flesh out the `showFallback()` function:

		`function showFallback() {
			$('#details').show();
			$('#geoDetails').hide();

			$('#findMe').click(function () {
				$('#error').text('');
				var address = $('#address').val();

				$.getJSON('http://dev.virtualearth.net/REST/v1/Locations?query=' + address + '&key=' + _creds + '&jsonp=?', function (result) {
					if (result.resourceSets[0].estimatedTotal > 0) {
						var loc = result.resourceSets[0].resources[0].point.coordinates;
						placeLocationOnMap(loc[0], loc[1]);
					} else {
						displayError("sorry that address cannot be found");
					}
				});
			});
		}`

3. Refresh the page, and click "Decline" when you are asked to share your information (you may need to close the window and re-open it) or modify privacy setting in your browser to clear any exepcetions for this site. Enter a location (like 'Taj Mahal' or 'Mount Rushmore') by hand and click enter.

### ***[Extra Credit]*** Check out the Modernizr [Shims and Polyfils list](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills) for a geolocation shim, and add it to the page.

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