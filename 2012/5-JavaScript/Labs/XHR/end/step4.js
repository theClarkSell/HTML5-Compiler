function step4 ($, undefined) {
	
	$('#title').text('Lab #4 - Post FormData with XHR');
	
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
			alert('posted!!!');
		}
	};
	
	// ----------------------------------------
	//	Setup our XHR object to be used.
	// ----------------------------------------
	
	// Create a form object that we will post to a server
	var formData = new FormData();
	        
	formData.append( "Name", "Clark Sell" );
	formData.append( "Url", "http://csell.net" );
	formData.append( "Description", "Clark Sell's Blog" );

	// If we don't change the RequestHeader we will get XML back but we would rather JSON.
	xhr.open('POST', 'http://lightsout.co/links/create', true);
	
	// setup the callbacks
	xhr.onload = onloaded; // doesn't seem to get called with chrome but firefox will
	xhr.onerror = onerror;
	
	// make the actual call
	xhr.send(formData);

};