formatDate = function(date) {  
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
				"Thursday", "Friday", "Saturday"];  
 	var months = ["January", "February", "March", "April", 
				  "May", "June", "July", "August", 
				   "September", "October", "November", "December"];  
    
	var pad = function(str) { 
		str = String(str); 
		return (str.length < 2) ? "0" + str : str; 
	}  
  
 	var meridian = (parseInt(date.getHours() / 12) == 1) ? 'PM' : 'AM';  
 	var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();  
 
	return days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ' '   
   		+ date.getFullYear() + ' ' + hours + ':' + pad(date.getMinutes()) + ':'   
     	+ pad(date.getSeconds()) + ' ' + meridian;  
}