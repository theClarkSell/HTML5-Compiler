function step2 ($, undefined) {
	
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
		
		//TODO
		
	};
	
	// ----------------------------------------
	//	Setup our XHR object to be used.
	// ----------------------------------------
	
	//TODO
	
};