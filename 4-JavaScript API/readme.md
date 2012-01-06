# Lab 3 - JavaScript APIs

---
## Module 1 - Geolocation

### I. Geolocation and Mapping
[Note: This demo uses the Microsoft Bing maps control, but you are welcome to use the Google Maps control if you prefer. The relevant JavaScript for Geolocation should be identical for both.]

1. Go to [The Bing Maps Portal](https://www.bingmapsportal.com) to obtain a key for the BingMaps control. See [this article](http://msdn.microsoft.com/en-us/library/ff428642.aspx) for more information.

2. Open "4- JavaScript API/labs/geolocation/begin/map.html" and run the page. You should see nothing but an empty box with a border at this point. Inspect both the map.html file and css/style.css to inspect the existing styles and elements on the page.

3. Open js/geolocation.js and enter the following, replacing the text "your_key_here" with the key you obtained in step 1:

		var _creds = "your_key_here";
		var mapDiv = document.getElementById("map");
		var _map = new Microsoft.Maps.Map(mapDiv, { credentials: _creds });

4. Now, create a locate function:

		function locate() {
    		navigator.geolocation.getCurrentPosition(function (position) {
      			var coordinates = position.coords;
        		
				setDetails(position);
			}, errorHandler);
		}

5. Add an empty function named `errorHandler` (we'll flesh this out later):

		function errorHandler(e) {}

6. Add the `setDetails` function, which will display the users lat and long information on the screen:

		function setDetails(position) {
			$('#lat').text('Latitude: ' + position.coords.latitude);
			$('#long').text('Longitude: ' + position.coords.longitude);
			$('#accuracy').text('Accuracy: ' + position.coords.accuracy + ' Meters');
			$('#geoDetails').fadeIn('slow');
		}

7. Now, and add a call to locate just below the method:

		locate();

	Refresh the page and be sure to give the browser permission to use your location.

8. The API call returns a coords object with the users lat, long and other information. By itself, this information isn't very interesting, so let's use this information to place a pushpin on  a map. Start by adding the following function:

		function placeLocationOnMap(latitude, longitude) {
    		var location = new Microsoft.Maps.Location(latitude, longitude);
    		_map.setView({ zoom: 12, center: location });

    		// Add a pushpin to the map representing the current location
    		var pin = new Microsoft.Maps.Pushpin(location);
    		_map.entities.push(pin);
		}

9. Now, add the following just above the `setDetails(position);` line from step #4:

		placeLocationOnMap(coordinates.latitude, coordinates.longitude);

10. Refresh the page and click "Accept" (if prompted) to give your browser permission to use your location. You should now see the map control centered on a location (reasonably) near you. 

11. One of the great features of Geolocation is that the browser will typically adapt its mechanism for determining your position based on the most-reliable information. On mobile devices, this means that the browser takes GPS location data into account. If you have a mobile device emulator (iPhone via XCode or the Windows Phone Emulator in Visual Studio), open this page in the built-in browser. Try modifying the GPS-reported location in the emulator (supported with both iOS and WP7 emulators) and refresh the page to see the mapped location change.

### II. Graceful Degradation

1. Because geolocation is opt-in, not all of your users will with to use it. What's more, users with an older browser won't have the feature available, so you'll want to consider degrading the experience in a way that still makes this feature useful. As such, we'll add some code that will allow the user to manually enter their address, and then use that information to place a pushpin on the map. First, let's add some logic that handles any error that might occur, such as the user declining to share their location automatically. Replace the empty `errorHandler` function with the following:

		function errorHandler(e) {
	    	if (e.code === 1) { // PERMISSION_DENIED
	    	    displayError('Please enter your location in the form below');
	   	 } else if (e.code === 2) { //POSITION_UNAVAILABLE
	   	     displayError('Cannot find your location. Make sure your network connection is active and refresh the page to try again.');
	  		} else if (e.code === 3) { //TIMEOUT
	      	  displayError('Cannot find your location. Refresh the page to try again, or provide you address in the form below.');
	    	}
	
			showFallback();
		}

2. Add the `displayError()` function:

		function displayError(msg) {
			$('#error').text(msg);
		}

2. Now, let's flesh out the `showFallback()` function:

		function showFallback() {
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
		}

3. Refresh the page, and click "Decline" when you are asked to share your information (you may need to close the window and re-open it) or modify privacy setting in your browser to clear any exceptions for this site. Enter a location (like 'Taj Mahal' or 'Mount Rushmore') by hand and click enter.

### ***[Extra Credit]*** Check out the Modernizr [Shims and Polyfils list](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills) for a geolocation shim, and add it to the page.

---
## Module 2 - Canvas

### I. Basic Lines and Shapes

1. Open "4- JavaScript API/labs/canvas/begin/sales.html" and add a canvas element to the page:

		<canvas id="chart" width="600" height="450"></canvas>

2. Open style.css and take note of the css style for the canvas element. Open sales.html in the browser.

3. Now, open `js/chart.js` and add some initial code to define some common variables, get the canvas element and select the 2d drawing content:

		var _canvas, _ctx;
	
		window.onload = function() {
			var baseY, baseX, chartWidth, salesData;
         	baseY = 375, baseX = 110, chartWidth = 475;
        
			_canvas = document.getElementById('chart'); 
			_ctx = _canvas.getContext("2d");
		};

	The `getContext` function is a special function that the Canvas API uses to retrieve an object we can use to manipulate a canvas. Currently "2d" is the only value accepted as the parameter to this function, though "3d" contexts are in the works among various vendors (WebGL, for instance).

4. Now lets add a `drawAxes` function and draw the y-axis on the canvas:

		function drawAxes(baseX, baseY, chartWidth) {
	   		var leftY, rightX;
        	leftY = 5;
        	rightX = baseX + chartWidth;

        	//Draw Y Axis
        	_ctx.moveTo(baseX, leftY);
        	_ctx.lineTo(baseX, baseY);

	      //Draw Arrow for Y Axis
  	  		_ctx.moveTo(baseX, leftY);
   	   		_ctx.lineTo(baseX + 5, leftY + 5);
      		_ctx.moveTo(baseX, leftY);
			_ctx.lineTo(baseX - 5, leftY + 5);

        	//Define Style and stroke lines
        	_ctx.strokeStyle = "#000";
        	_ctx.stroke();
    	}

5. Insert a call to `drawAxes` just after the call to `_canvas.getContext('2d'):

		drawAxes(baseX, baseY, chartWidth);

6. Refresh the page. You should see a straight black arrow on the left of the canvas.

7. To draw the x-axis, insert the following into `drawAxes` before the `_ctx.strokeStyle` line:

		//Draw X Axis
        _ctx.moveTo(baseX, baseY);
        _ctx.lineTo(rightX, baseY);

        //Draw Arrow for X Axis
        _ctx.moveTo(rightX, baseY);
        _ctx.lineTo(rightX - 5, baseY + 5);
        _ctx.moveTo(rightX, baseY);
        _ctx.lineTo(rightX - 5, baseY - 5);

8. Now lets add the bars to our graph. We'll start by defining a salesData object to hold our categories and sales figures. Insert the following just before the line `_canvas = document.getElementById('chart')`:

		salesData = [{
            category: "Basketballs",
            sales: 150
        }, {
            category: "Baseballs",
            sales: 125
        }, {
            category: "Footballs",
            sales: 300
        }];

	This is a simple Array of sales categories and figures. Typically the kind of information we'd obtain from a database or service, but you can use your imagination, here.

9. To draw the bars on the chart, start by creating a `drawBars` function:

		function drawBars(salesData, baseX, baseY) {
	    	var i, length, colors, xPos, barWidth, category, sales;
        	length = salesData.length;
        	barWidth = 80;
        	xPos = baseX + 30;

        	for (i = 0; i < length; i++) {
         		category = salesData[i].category;
            	sales = salesData[i].sales;

            	_ctx.fillRect(xPos, baseY - sales-1, barWidth, sales);
            
            	xPos += 125;
        	}        
    	}

	The relevant piece of this function is `_ctx.fillRect`, which creates a rectangle on the canvas at a given x (xPos) and y (baseY - sales-1) position, and with a specified width (barWidth) and height (sales).

10. Now add the following just after the call to `drawAxes`:

		drawBars(salesData, baseX, baseY);

11. Refresh the page to see your beautiful canvas chart! 

### II. Working with Text

1. Now that we have a basic chart, let's label our axes and the individual bars. Start by adding a function called `labelAxes`:

		function labelAxes() {
       		var height, heightOffset, widthOffset;
        	height = _ctx.canvas.height;
        	heightOffset = height/2;
        	widthOffset = _ctx.canvas.width/2;

        	_ctx.font = "bold 18px sans-serif";
        	_ctx.fillText("Units Sold", 10, heightOffset);
         	_ctx.fillText("(in 100s)", 17, heightOffset + 17);
        	_ctx.fillText("Product", widthOffset, height - 20);
      	}

	Adding text to a canvas is as simple as calling the `fillText` function with the text and the x and y coordinates on which to place the text. The `font` property is also available, and accepts anything you can use for a CSS `font` style.

2. Add a call to `labelAxes()` just after the call to `drawBars`:

		labelAxes();

3. Refresh the page to see your labels.
4. Now let's label the bars. Start by creating a `labelBar` function:

		function labelBar(category, xPos, baseY) {
			_ctx.fillStyle = "#000";
			_ctx.font = "14px sans-serif";
	    	_ctx.fillText(category, xPos - (category.length/2 - 10), baseY + 20);
		}

	Similar to step #2, we call `fillText`, this time using the category name from our data object for the label.

5. To call `labelBar`, add the following just before the last line of the `for` loop in the `drawBars` function:

		labelBar(category, xPos, baseY);

6. Refresh the page.

### III. Working with Colors and Gradients

1. The last steps of this module will explore some different options for adding color and images to a canvas. We'll start by replacing the black bars on our graph with some peppy colors. Start by adding the following colors array to the `drawBars` function, just before the `for` loop:

		colors = ["#e34c26", "#0092bf", "rgba(240, 101, 41, 0.90)"];

2. To use these elements, we can add the following inside of the `for` loop, just before the call to `_ctx.fillRect`:

		_ctx.fillStyle = colors[i % length];

3. Refresh the page to see the new colors.

4. It's also possible to use both linear and radial gradients in shapes on a canvas, so let's replace these basic colors with a fancy gradient. Start by adding `createGradient` function:

		function createGradient(x, y, width, color) {
      		var gradient;

        	gradient = _ctx.createLinearGradient(x, y, x+width, y);
        	gradient.addColorStop(0, color);
        	gradient.addColorStop(1, "#efe3e3");

        	return gradient;
    	}

	This simple function accepts some information about where the shape will be rendered on the screen and a primary color and, using that information, calls the `createLinearGradient` function to obtain a gradient object. We then add two color stops (the first with our primary color and the second with a shade of grey) before returning the gradient object.

5. Now that we have a gradient function we can use it by adding a call to `fillStyle` in the `drawBars` function, just before the call to `_ctx.fillRect`:

		_ctx.fillStyle = createGradient(xPos, baseY - sales-1, barWidth, colors[i % length]);

6. Refresh the page to see the gradient in action.

### IV. Adding Images

1. For the final enhancement to our bar chart, we'll replace the rectangular bars with images. Start by commenting out or removing the call to `drawBars` at the top of the `chart.js` file.

2. Now let's add a `drawImages` function:

		function drawImages(salesData, baseX, baseY) {
	    	var i, length, xPos, barWidth;
        	length = salesData.length;
        	barWidth = 80;
        	xPos = baseX + 30;

        	for (i = 0; i < length; i++) {
        		var sales, category, img;
            	category = salesData[i].category;
            	sales = salesData[i].sales;                
            	img = new Image();
         	}
    	}

	Similar to our `drawBars` function, this function will loop through the collection of categories. in this case, however, we're defining a new DOM Image element to be added to our Canvas.

3. Set the source of each `img` element by adding the following just before the end of the `for` loop:

		img.src = "../assets/" + category + ".jpg";

	This line will load each image into an in-memory element.

4. Once each image is loaded, we can use it on our canvas. To make sure we don't attempt to access the image until after it's been fully loaded, we'll add the following to the image `onload` event, just before our call to `img.src`:

		img.onload = (function(height, base, currentImage, currentCategory) {
       		return function() {
         		var yPos;
            	yPos = base - height - 1;
				
				_ctx.drawImage(currentImage, 30, 30, barWidth, height, xPos, yPos, barWidth, height);
            	labelBar(currentCategory, xPos, baseY);

            	xPos += 125;            
          	}
       	})(sales, baseY, img, category);

	There's some JavaScript closure trickery here that we need to ensure that the onload event obtains the correct values for sales, baseY, img and category when it fires. Beyond that, the relevant piece of information is the call to `drawImage`, which takes a DOM Image element and performs a manipulation or translation of the image before rendering it to the screen. `drawImage` has several overloads, with the one above being the most complex as it both crops and resizes the image to match the dimensions of our bars before drawing them to the screen. See the resources below for more information about the `drawImage` function.

5. Now let's add a call to 	`drawImages` just before the call to `labelAxes`:

		drawImages(salesData, baseX, baseY);

6. Refresh the page and revel in your canvas expertise!

### **[Extra Credit]** Use the [Explorer Canvas](http://code.google.com/p/explorercanvas/) and [Canvas Text](http://code.google.com/p/canvas-text/) libraries to polyfill canvas support for older browsers. See this [MSDN Magazine Article]() for more information.

---
## Module 3 - Web Sockets


---
## Module 4 - Web Storage

### I. Local Storage

1. Open "4- JavaScript API/labs/web_storage/begin/order.html" in a browser. This page should look similar to the page from the forms module in Lab #1.

2. Open js/storage.js and add the following function, which should fire when the user clicks the "Save for Later" button:

		$('#saveForLater').click(function () {}); 

3. Accessing local storage is as simple as calling `window.localStorage`. Items can be access like `window.localStorage["name"]` or as an expando, `window.localStorage.name`. Add the following inside the function from step #2 to save the order information to the localStorage object:

		window.localStorage.name = $('#orderName').val();
		window.localStorage.email = $('#orderEmail').val();
		window.localStorage.webSite = $('#orderWebsite').val();
		window.localStorage.phone = $('#orderTelephone').val();
		window.localStorage.delivery = $('#deliveryDate').val();
		window.localStorage.address = $('#orderShipping').val();
		window.localStorage.quantity = $('#orderQty').val();
		$('#saveForLater').val('Saved!');

4. Refresh the page and enter some data in the fields and click "Save for later"

5. Open up the developer tools in your browser and inspect the local storage. Some browsers have a visual inspector, but all browsers allow you to open the console tab and type `window.localStorage` to see the contents of the object. Do so and make sure that your data has been saved.

6. Refresh the page. The fields are blank, so lets use the information in local storage to re-populate these when the user returns to the page. Place the following outside of the `$('#saveForLater')` function in step #2:
	
		$('#orderName').val(window.localStorage.name);
		$('#orderEmail').val(window.localStorage.email);
		$('#orderWebsite').val(window.localStorage.webSite);
		$('#orderTelephone').val(window.localStorage.phone);
		$('#deliveryDate').val(window.localStorage.delivery);
		$('#orderShipping').val(window.localStorage.address);
		$('#orderQty').val(window.localStorage.quantity);

5. Now refresh the page. You saved data should now be in the form. To verify that localStorage is persistent, close the browser, re-open and return to this page.

### II. Session Storage

1. Where Local Storage is persistent, Session Storage only lasts for the user's current session (for instance, in a single tab). Let's see how this works by adding a Session variable that displays to the user the time the order was initiated. Add the following to the end of js/storage.js:

		if (!window.sessionStorage.orderStamp) {
			window.sessionStorage.orderStamp = formatDate(new Date());
		}
		$('#time').text("Order initiated on: " + window.sessionStorage.orderStamp);

	Note that `sessionStorage` is accessed similarly to local storage, and its properties can also be accessed in expando fashion.

2. Refresh the page, and take note of the timestamp on the form. Refresh the page several times, and notice that the timestamp does not change.

3. Now, open another tab and navigate to the same page. Notice that the timestamp is different than the original tab, but also stays the same when the page is refreshed several times.

### ***[Extra Credit]*** Check out the Modernizr [Polyfills and shims page](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills) for a Web Storage polyfill, and add it to the page.
---
## Module 5 - Drag and Drop


___

# Resources

1. [Integrating Geolocation into Web Applications](http://msdn.microsoft.com/en-gb/magazine/hh580735.aspx)
2. [Using HTML5 Canvas for Data Visualization]()
3. [Canvas Chapter from Dive Into HTML5](http://diveintohtml5.info/canvas.html) 
4. [Explorer Canvas](http://code.google.com/p/explorercanvas/)
5. [Canvas Text](http://code.google.com/p/canvas-text/)