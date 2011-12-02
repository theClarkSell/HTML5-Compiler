function lab1 ($, undefined) {
	
	$('#title').text('Lab #1 - Simple XHR GET');
	
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
			// Get the string results of the call
			var results = this.responseText;
			
			// Since we're going to get markup back we're just going to append that markup to our results div.
			$('#results').append(results);
		}
	};
		
	// ----------------------------------------
	//	Setup our XHR object to be used.
	// ----------------------------------------
	
	// Setup the action and URI we plan to interact with
	xhr.open('GET', 'http://developerSmackdown.com', true);
	
	// set the xhr events
	xhr.onload = onloaded;
	xhr.onerror = onerror;
	
	// make the call
	xhr.send();

};