function lab3 ($, undefined) {
	
	$('#title').text('Lab #3 - Retreving Images Using XHR');
	
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

	// Take care of vendor prefixes URL
	window.URL = window.URL || window.webkitURL;

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
            var blob = this.response;

            var img = document.createElement('img');
            img.onload = function(e) {
                window.URL.revokeObjectURL(img.src);
            };

            img.src = window.URL.createObjectURL(blob);
            $('#results').append(img);
        }; 
	};
	
	// ----------------------------------------
	//	Setup our XHR object to be used.
	// ----------------------------------------

	// let's get an image from gravatar.
	xhr.open('GET', 'http://0.gravatar.com/avatar/592fd4bb2692c7d9fbe8f5ef3af52309?size=420', true);
	
	// we want a blob returned to us
	xhr.responseType = 'blob';
	
	// setup the callbacks
	xhr.onload = onloaded;
	xhr.onerror = onerror;
	
	// make the call
	xhr.send();

};