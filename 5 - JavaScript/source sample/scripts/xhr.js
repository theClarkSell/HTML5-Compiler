function sendForm(form) {
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://lightsout.co/Links/Create', true);
    
    xhr.onload = function(e) { 
        alert ('Posted!');
    };

    xhr.send(formData);
}

function getLinks(callback) {
  
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://lightsout.co/Services/getlinks', true);
    
    xhr.onload = callback

    xhr.send();
}

function whyNot() {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://developersmackdown.com/services/odata/Shows?$orderby=ShowId%20desc&$top=3');
    xhr.setRequestHeader('accept', 'application/json');

    xhr.onload = function (e) {  
                        
        var data = (JSON.parse(this.responseText)).d;

        for ( var i = 0; i < data.length; i++ ) {
            var formData = new FormData();
            
            formData.append( "Name", data[i].Title );
            formData.append( "Url", data[i].PublicUri );
            formData.append( "Description", data[i].Description );

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://lightsout.co/Links/Create', true);
        
            xhr.onload = function(e) { 
                alert ('Posted!');
            };
    
            xhr.send(formData);
        };         
    };
            
    xhr.send();

};