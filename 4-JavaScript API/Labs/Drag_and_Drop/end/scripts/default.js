(function () {
     
    /* Note
    	The folling functions are the event handlers we will use
    */

    function handleDragStart(e) {
        console.log('in handleDragStart');

        e.target.style.opacity = '0.4';  // this / e.target is the source node.
        
        e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('Text', this.id);

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

        e.target.classList.add('over');
    }

    function handleDragOver(e) {
        console.log('in handleDragOver');
        
        /* Note
        	We don't want the default browser action to happen but rather we handle it
        */
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragLeave(e) {
        console.log('in handleDragLeave');
        
        // remove the css class we added for UX queues
        e.target.classList.remove('over');
    }

    function handleDrop(e) {
        console.log('in handleDrop');

        /* Note
        	Here we want to remove the item we dragged from view
        	We also want to get our thing we dropped...
        */
            
        // stop the browser from doing it's default action. if it we're a link it might try to invoke it
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        // let's grab some data we passed along in the move
        var sourceElementId = e.dataTransfer.getData('Text');
        var sourceElement = document.getElementById(sourceElementId);
        sourceElement.style.display = 'none';

        // reset our visual que
        e.target.classList.remove('over');	

        return false;
    }

    function handleDragEnd(e) {
        console.log('in handleDragEnd');

        // you could cook up a batch of awesome sauce here, but we didn't
    }

    /* Note
    	Here we will query for the DOM elements we want and then wire up our Drag and Drop Event Handlers	
    */

    var listItems = document.querySelectorAll('*[draggable=true]');

    [].forEach.call(listItems, function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });


    /* Note
    	the folling code blocks are for dealing with dragging the shield out of the browser
    */
    
    // query to get our dom element	
    var shield = document.getElementById('shield');
    
    /* event handlers */

    function handleShieldDragStart(e) {
        console.log('in handleShieldDragStart');

         e.dataTransfer.effectAllowed = 'copy';

        var fileDetails = shield.dataset.downloadurl;
        e.dataTransfer.setData('DownloadURL', fileDetails);
    }

    function handleShieldDragEnd(e) {
        console.log('in handleShieldDragEnd');

        e.target.style.opacity = '100';
    }

    // wire up our event handlers to our dom element and the correct function
    
    shield.addEventListener('dragstart', handleShieldDragStart, false);
    shield.addEventListener('dragend', handleShieldDragEnd, false);

}).call(this);
