(function () {

    /* ----- */

    document.getElementById('buttonElement').addEventListener('click', handleButtonClick, false);
    document.getElementById('buttonElement').addEventListener('click', handleButtonClick2, false);

    function handleButtonClick(evt) {
        console.log('handleButtonClick Called');
        
        var items = document.querySelectorAll('li');
        
        [].forEach.call(items, function(item) {
            item.classList.add('addBorder');
        });
    };
  
    /* ----- */

    function handleButtonClick2(evt) {
        console.log('in handleButtonClick2');
        
        var anchorItems = document.querySelectorAll('*[data-something=true]');
         
        [].forEach.call(anchorItems, function(item) {
            
            var p = document.createElement('p');
            p.textContent = item.id;

            messageElement.appendChild(p);        
        });

    };

    /* ----- */

    var messageElement = document.getElementById('messages');

    //var inputElement = document.getElementById('inputElement');
    var inputElement = document.querySelector('input');
    inputElement.addEventListener('change', handleInputElementChanged, false);

    function handleInputElementChanged(evt) {
        console.log('handleInputElementChanged Called');

        messageElement.textContent = 'handleInputElementChanged Called';
    };

}).call(this);
