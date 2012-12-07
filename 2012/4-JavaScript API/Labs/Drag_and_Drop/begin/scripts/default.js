(function () {
     
    /* Note
    	The folling functions are the event handlers we will use
    */

    function handleDragStart(e) {
        console.log('in handleDragStart');

        // TODO: Set our opacity and dataTransfer objects

        /* Note
            Depending on the browser you could use a custom format
                ex 'text/x-example'

            e.dataTransfer.setData('text/x-example', whatever);
        */
    }

    function handleDragEnter(e) {
        console.log('in handleDragEnter');
        
        /* Note
            when we enter an object that is draggable we want to add a class that provides user feedback
            Here we are adding a class to the element. this will of course cause the browser to render the chnage.

            We want to do this here on 'dragenter' rather than 'dragover' 
            dragenter will fire once while dragover will continue to fire.
        */

        // TODO: Add our css class
    }

    function handleDragOver(e) {
        console.log('in handleDragOver');
        
        /* Note
        	We don't want the default browser action to happen but rather we handle it
        */
        
        // TODO: Prevent our Default Action
        // TODO: Set our drop effects

        return false;
    }

    function handleDragLeave(e) {
        console.log('in handleDragLeave');
        
        // TODO: Remove the css class we added for UX queues
    }

    function handleDrop(e) {
        console.log('in handleDrop');

        /* Note
        	Here we want to remove the item we dragged from view
        	We also want to get our thing we dropped...
        */
            
        // TODO: stop the browser from doing it's default action. if it we're a link it might try to invoke it
        // TODO: grab some data we passed along in the move so we act on it
        // TODO: reset our visual que

        return false;
    }

    function handleDragEnd(e) {
        console.log('in handleDragEnd');

        // you could cook up a batch of awesome sauce here, but we didn't
    }

    /* Note
    	Here we will query for the DOM elements we want and then wire up our Drag and Drop Event Handlers	
    */

    //TODO: query for our draggable dom elements and wire the event handlers 


    /* Note
    	the folling code blocks are for dealing with dragging the shield out of the browser
    */
    
    // TODO: query to get our dom element	
    
    /* event handlers */

    function handleShieldDragStart(e) {
        console.log('in handleShieldDragStart');

        // TODO
    }

    function handleShieldDragEnd(e) {
        console.log('in handleShieldDragEnd');

        // TODO
    }

    // TODO wire up our event handlers to our dom element and the correct function

}).call(this);
