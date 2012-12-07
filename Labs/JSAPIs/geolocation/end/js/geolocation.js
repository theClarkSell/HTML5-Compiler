(function() {
	var _creds = "Aobl4homd3pxwBrWnQNuX25Vna6u25EHc-LJcvzIGPldJLQZdsGq6mk57Aq0ft80";
	var mapDiv = document.getElementById("map");
	var _map = new Microsoft.Maps.Map(mapDiv, { credentials: _creds });

	function setDetails(position) {
		$('#lat').text('Latitude: ' + position.coords.latitude);
		$('#long').text('Longitude: ' + position.coords.longitude);
		$('#accuracy').text('Accuracy: ' + position.coords.accuracy + ' Meters');
		$('#geoDetails').fadeIn('slow');
	}
	
	function displayError(msg) {
		$('#error').text(msg);
	}

	function placeLocationOnMap(latitude, longitude) {
	    var location = new Microsoft.Maps.Location(latitude, longitude);
	    _map.setView({ zoom: 12, center: location });

	    // Add a pushpin to the map representing the current location
	    var pin = new Microsoft.Maps.Pushpin(location);
	    _map.entities.push(pin);
	}
	
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
				}
				else {
					displayError("sorry that address cannot be found");
				}
			});
		});
	}

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

	function locate() {
		navigator.geolocation.getCurrentPosition(function (position) {
	    var coordinates = position.coords;
	    	placeLocationOnMap(coordinates.latitude, coordinates.longitude);
		
			setDetails(position);
		}, errorHandler);
	}
	
	locate();
})();