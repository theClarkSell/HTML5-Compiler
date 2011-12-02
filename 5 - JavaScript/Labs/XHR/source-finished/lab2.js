function lab2 ($, undefined) {
	
	$('#title').text('Lab #2 - Simple XHR GET using Request Headers');
	
	// ----------------------------------------
	// 	create our xhr object to be used later
	// ----------------------------------------
	
	var xhr;
	
	if (window.XMLHttpRequest) {        
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // for older version of IE, we need to load activex xmlhttp object
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

	// ----------------------------------------
	// 	handle the XHR events
	// ----------------------------------------
	
	// function to process any errors
	function onerror(e){
		$('#errors').text(e.message);
	};
	
	// define the callback needed to process the result from the xhr call
	function onloaded(e){
		
		if (this.status == 200) {
			
			// We will need to deserialize the JSON into an object that we can easily work with
			var results = JSON.parse(this.responseText);
			
			// Let't grab the show title and display on the screen.
			$('#results').text(results.d.Title);
		
		}
	};
	
	// ----------------------------------------
	//	Setup our XHR object to be used.
	// ----------------------------------------
	
	// This time we're going to call the DeveloperSmackdown OData services and request a single show.
	xhr.open('GET', 'http://developersmackdown.com/serices/odata/Shows(PodcastId=1,ShowId=54)', true);
	
	// If we don't change the RequestHeader we will get XML back but we would rather JSON.
	xhr.setRequestHeader('accept', 'application/json');
	
	// set the callbacks
	xhr.onload = onloaded;
	xhr.onerror = onerror;
	
	// make the call
	xhr.send();
	
};