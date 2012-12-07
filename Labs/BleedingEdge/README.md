# Bleeding Edge of HTML5 - Demo Script

## EcmaScript

Modules and Classes have yet to be implemented in any of the browsers, but a number of ES6 Features have landed in the Nightly Versions of Firefox.

We'll take a look at default & rest parameters, and the new for..of syntax.

### Default Parameters

Let's take a look at Default Parameters first. 

1. Open FirefoxNightly and verify that your version (Listed in About) is 16 or higher.
2. Open The FireBug console, then switch to multi-line mode (arrow icon in the lower-right).
3. Enter the following into the console window, then click run

		function f(a = 0, b = a*a) { 
  			return [a, b]; 
		}

		console.log(f(2, 16)); // Returns [2, 16]
		console.log(f(2)); // Returns [2, 4]

Notice that, in the first example, the values we pass in are preserved. In the second log, the value of `a*a` is provided for the missing `b` parameter.

### Rest Parameters

Rest parameters are part of the "`arguments` killing" features of ES6, along with default parameters. Rest parameters allow you to assign an indeterminate number of parameter values in a first-class array.

Defining a rest parameters object is simple, we just use an ellipsis (`…`) immediately followed by the name of the variable. In the function itself, this object will be a first-class array (as opposed to the array-like-but-not-exactly `arguments` object. 

1. Add the following in the console window:

		function f(a, b, ...others) {
  			return others.concat(a, b);
		}
		
		console.log(f(1, 2, 3, 4, 5)); // Returns [3, 4, 5, 1, 2]; 

Finally, let's look at for..of.

### [for..of](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for...of) 

The `for..of` syntax is designed to allow you to iterate over ONLY iteratable objects in a collection, as opposed to all property values on an object. To show you what I mean, let's run through a quick example.

1. First, let's take a look at the existing for..in syntax. Type the following in the console window

		var arr = [ 3, 5, 7 ];
 		
		for (var i in arr) {
   			console.log(i);
		}
 
	Run the sample. Everything looks ok, but let's modify the sample to include a new, custom property:

		var arr = [ 3, 5, 7 ];
		arr.foo = "hello";
 
		for (var i in arr) {
   			console.log(i);
		}
 
	Now, you'll notice that the "foo" property is output, in addition to our array values.

2. Let's try using for..in now:

		for (var i of arr) {
   			console.log(i);
		}

	When you run this code, you'll notice that only the array values are being output. Nice!

## CSS

### CSS Regions

**Note: CSS Regions are currently only supported in Chrome Canary**

1. Open up Chrome Canary and enter "chrome://flags" (or about:flags)  in the address bar.
2. Find the "Enable experimental WebKit features" entry and click "enable." This turns on a number of developmental WebKit features, including Regions, CSS Variables and Shadow DOM.
3. Restart WebKit to apply these changes.
4. Navigate to [http://inserthtml.com/demo/css-regions/](http://inserthtml.com/demo/css-regions/) and open up the Chrome dev tools.
5. Look at the original content in two paragraphs and notice the CSS rules applied to these as well as the empty "region" divs below, in particular the `-webkit-flow-into` and `-webkit-flow-from` properties.
6. Now, resize the screen slowly, and watch as the text flows from one region to another.

### CSS Filter Effects

**Note: CSS Filters are supported in Chrome stable**

1. Open up the demo source and navigate to the filter_effects/photos.html. Note the photo gallery and the series of buttons below the gallery for applying filter effects.
2. Navigate to filter_effects/css/desktop.css file and add the following CSS to apply filters to the images:

		img.grayscale {
   		 	-webkit-filter: grayscale(100%);
   		 	-moz-filter: grayscale(100%);
   		 	-o-filter: grayscale(100%);
   		 	-ms-filter: grayscale(100%);
    		filter: grayscale(100%);
			}

		img.sepia {
  		    -webkit-filter: sepia(100%);
    		-moz-filter: sepia(100%);
   		 	-o-filter: sepia(100%);
   		 	-ms-filter: sepia(100%);
    		filter: sepia(100%);
		}

		img.hue {
 		   -webkit-filter: hue-rotate(50deg);
 		   -moz-filter: hue-rotate(50deg);
 		   -o-filter: hue-rotate(50deg);
 		   -ms-filter: hue-rotate(50deg);
 		   filter: hue-rotate(50deg);
		}

		img.blur {
 	 	  -webkit-filter: blur(2px);
 	 	  -moz-filter: blur(2px);
 		  -o-filter: blur(2px);
 		  -ms-filter: blur(2px);
 	  	  filter: blur(2px);
		}

		img.invert {
 	  	  -webkit-filter: invert(100%);
 	   	  -moz-filter: invert(100%);
 	   	  -o-filter: invert(100%);
 	   	  -ms-filter: invert(100%);
 	   	  filter: invert(100%);
		}

3. Now, let's add an event handler to apply the effects when each button is clicked. Add the following to filter_effects/js/photos.js:

		$('button').on('click', function() {
			var images = $('#page img');

			images.removeClass(idList.join(" "));
			images.addClass(this.id);
		});

4. Now, refresh the page and click each button to apply a filter effect.

### Custom Filters

**Note: CSS Custom Filters (formerly Shaders) are currently only supported in Chrome Canary**

1. Open up Chrome Canary and enter "chrome://flags" (or about:flags) in the address bar.
2. Find the "Enable CSS Shaders" and "GPU Accelerated SVG Filters" entries and click "enable." 
3. Restart WebKit to apply these changes.
4. Navigate to the "custom_filters/photos.html" page to view another version of the Animals Photo Gallery. This time, instead of applying the filters via button clicks, we're going to add a custom "crumple" filter to each image on hover.
5. Open "custom_filters/css/desktop.css" and add the following to the `ul.thumbnails li ing` rule:

		 -webkit-filter: custom(url(../shaders/crumple.vs) 
            mix(url(../shaders/crumple.fs) 
				multiply source-atop), 
                50 50 border-box, 
                transform perspective(1000) scale(1) 
  		        rotateX(0deg) rotateY(0deg) 
                rotateZ(0deg), amount 1, strength 0.4, lightIntensity 1);

6. Open up the `crumple.vs` and `crumple.fs` roles in the shaders folder. CSS Shaders are written with GLSL, a C-like syntax also used to create WebGL shaders. 
7. Now, refresh the page and hover over one of the images. That's a CSS Custom Filter!

You might have noticed when you hovered over an image that the hover overlay text and box were included in the crumple effect. Interestingly, CSS Custom Filters can be applied to any DOM element, not just image. Let's apply a 'disolve' effect to the H1 for our page.

1. Head back to custom_filters/css/desktop.css and add the following under the `h1` rule:

		h1:hover {
   			-webkit-filter: custom(url(../shaders/dissolve.vs) 
        			mix(url(../shaders/dissolve.fs) multiply source-atop), 
        			50 50 border-box, transform perspective(1000) scale(1) rotateX(0deg) 
        			rotateY(0deg) rotateZ(0deg), amount 0.33);
		}

2. Refresh the page and hover over the Page Title. 
3. You can also use the "Force Element State" in the Chrome Dev tools to enable the ":hover" state and inspect the applied CSS rules, including our shader.

To play around more with custom CSS Filters, head over to Adobe's CSS Filter Lab at [http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/](http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/).

## JavaScript APIs

### getUserMedia

1. To try out getUserMedia, you'll need Chrome or Firefox. 
2. Open 'webrtc/index.html' and add a video element to the page:

		<video id="gumVideo" controls></video>

3. Add the getUserMedia Code

		navigator.getUserMedia = navigator.getUserMedia || 	
							     navigator.webkitGetUserMedia ||
    						 	 navigator.mozGetUserMedia || navigator.msGetUserMedia;
		window.URL = window.URL || window.webkitURL;

		navigator.getUserMedia({video: true}, 	function(localMediaStream) { 
	  		var video = document.querySelector("video");
	  
	  		video.autoplay = true;
	  		video.src = window.URL.createObjectURL(localMediaStream);
	  
		}, function(error) {
	  		console.log(error);
		});

4. Open the page in the browser and click "Allow" when the camera permissions window pops up.

Now, let's take a look at WebRTC. 

1. Open up a new tab and navigate to [apprtc.appspot.com](https://apprtc.appspot.com).
2. Now, open up another window and navigate to the URL provided on the screen. This example is using getUserMedia and Web Sockets to enable asynchronous, realtime communication in the browser. Awesome!

### WebGL

1. WebGL is supported in both Chrome and Firefox, so open up either and navigate to 'webgl/index.html.'
2. Open the same page in an editor and notice that we have a reference to [Three.js](http://threejs.com), which will handle all of the WebGL complexity for us.
3. Now, open index.js and start by adding an init function:

		function init() {
  	  		camera = new THREE.PerspectiveCamera( 75, 
				window.innerWidth / window.innerHeight, 1, 10000 );
	  		camera.position.z = 1000;
	  
	  		scene = new THREE.Scene();
	  
	 		geometry = new THREE.CubeGeometry( 200, 200, 200 );
	  		material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
	  
	  		mesh = new THREE.Mesh( geometry, material );
	  		scene.add( mesh );
	  
	  		renderer = new THREE.CanvasRenderer();
	  		renderer.setSize( window.innerWidth, window.innerHeight );
	  
	  		document.body.appendChild( renderer.domElement );  
		}

4. Now create the animate function:

		function animate() {
	  		requestAnimationFrame( animate );
	  
			mesh.rotation.x += 0.01;
	  		mesh.rotation.y += 0.02;
	  
			renderer.render( scene, camera );
		}

5. Finally, created the click handler and call init():

		$('#animate').on('click', function() {
			animate();
		});

		init();

### JavaScript Speech API

**Note: the JS SPeech API is currently only supported in Chrome Canary**

1. Open up Chrome Canary and enter "chrome://flags" (or about:flags)  in the address bar.
2. Find the "Speech JavaScript API" entry and click "enable." 
3. Restart WebKit to apply these changes.
4. Navigate to 'speech/index.html'
5. Open 'speech/index.js' in a text editor and add a speech recognition object:

		var recognition = new webkitSpeechRecognition();
    recognition.maxAlternatives = 5;
		
6. Next, add a callback for then the SpeechRecognition object receives results from the browser:

		recognition.onresult = function(event) { // SpeechRecognitionEvent
      		if (event.result.length > 0) { // SpeechRecognitionResult
        		var q = document.querySelector('#query'),
            		result = event.result[0];

        		if (result.confidence > .5) {
            		q.value = event.result[0].transcript; // SpeechRecognitionAlternative
        		} else {
            		q.value = "SPEAK CLEARLY!"
        		}
      		}
    	};

7. Now, let's add a button handler to accept the search:

			var button = document.querySelector('#speak');
    		button.onclick = function() {
    			recognition.start();
    		};

8. Refresh the page and open up the dev tools before clicking the "speak" button.
9. Put a breakpoint on the first line of the `onresult` event
10. Click the 'Speak' button and say something.
11. When you hit your breakpoint, inspect the returned objects, including the `SpeechRecognitionResult` array, which shows the results (in the form of `SpeechRecognitionAlternative` objects), the `transcript` and `confidence` for each alternative.


## HTML & The DOM

### Responsive Images

**Note: To test out the `<picture>` element, you'll need a custom build of Chromium from [github.com/yoavweiss/RespImg-WebCore/downloads](https://github.com/yoavweiss/RespImg-WebCore/downloads).**

1. Open the custom Chromium build required to play with the responsive images demos.
2. Navigate to [demos.responsiveimages.org](http://demos.responsiveimages.org)
3. Click the "Demo: Basic Implementation" link to check out a simple example of using the `<picture>` element.
4. To see this feature in action, open the Network tab in the Dev Tools and look at which images are loaded based on the size of of your browser window.

### Shadow DOM / Web Components

Let's start be looking at how browsers already use the Shadow DOM Today.

1. Open up the dev tools in any version of Chrome and click on the settings gear in the lower-right corner.
2. Select the "Show Shadow DOM" option and close the settings window.
3. Navigate to "shadow-dom/slider.html" and inspect the slider element  in the Dev tools. notice that you can expand the `<input>` element and, when you do a `#shadow-root` appears. For the slider, Chrome is actually compositing several divs and styling those to look like a slider with a draggable button. The Shadow DOM allows Chrome to present these to you as a single element, as well as to only expose the styles they want to expose.
4. For a more complex example of browser Shadow DOM usage, check out 'shadow-dom/video.html' to see the Shadow DOM for an HTML5 Video element.

The Shadow DOM specification is designed to give developers access to the same functionality that browsers use today, and in Chrome Canary, we can take an early look at what's possible.

1. Head to "chrome://flags" (or "about:flags") and enable "Enable experimental WebKit features" entry and click "enable." This turns on a number of developmental WebKit features, including Regions, CSS Variables and Shadow DOM.
2. Restart WebKit to apply these changes.
3. In a text editor, open 'shadow-com/byod.html' and add the following div to host our Shadow DOM Root:
	
		<div id="host"></div>

4. Next, let's add some JavaScript to the bottom of the page to activate our DOM and add another element to it:

			<script type="text/javascript">
				var host = document.querySelector('#host'),
				root = new WebKitShadowRoot(host),
	    		para = document.createElement('p');

	    		para.textContent = "I've stepped into the shadows...";

	    		// (be09) add the applyAuthorStyle attribute to apply our css
	    		root.appendChild(para);
			</script>

5. Now, refresh the page, and you'll notice that our p text is showing up on the page. Now inspect the element with the Chrome Dev Tools. If you have the "Show Shadow DOM" feature disabled, you won't see this paragraph in the tree. If you do, it will show up, but under a `#shadow-root` element similar to what we saw with the slider and video elements.

One of the biggest advantages of the Shadow DOM for developers is encapsulation of CSS styles. By default, CSS styles I apply to my page won't take effect on my Shadow DOM children. Let's take a look.

1. First, let's add some styles for the `<p>` elements on our pages:

		<style type="text/css" media="screen">
			p {
				font-size: 48px;
				color: blue;
			}
		</style>

2. Now, let's add a `<p>` outside of our Shadow Root:

		<p>I'm outside the Shadows...</p>

3. If you refresh the page, you'll notice that our styles were applied to the recently-added `<p>` element, but not the Shadow DOM's `<p>`. This is, of course, by design, though it is possible to cascade user styles to shadow children by setting the `applyUserStyles` property of the `ShadowRoot` object:

		root.applyAuthorStyles = true;

4. Now, if you refresh the page, you'll see that both paragraphs are styled using the styles we defined.

## HTML & Devices

### Firefox OS Simluator (formerly r2d2b2g)

1. To download the Firefox OS Simulator, first make sure you have the latest stable version of Firefox.
2. Navigate to [http://people.mozilla.com/~myk/r2d2b2g/](http://people.mozilla.com/~myk/r2d2b2g/) to download the Firefox Extension.
3. Once the Simulator is installed, go to the "Tools" menu in Firefox and select "Web Developer," then "Firefox OS Simulator."
4. A new tab will open in Firefox, with the Simulator control panel. Flip the Simulator switch in the upper-left to turn it on. After several seconds, up to a minute, the simulator will open up in a new window and you can watch the phone boot up.
5. Once things are ready, unlock the phone and go nuts!