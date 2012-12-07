(function() {
	$('#saveForLater').click(function () {
		window.localStorage.name = $('#orderName').val();
		window.localStorage.email = $('#orderEmail').val();
		window.localStorage.webSite = $('#orderWebsite').val();
		window.localStorage.phone = $('#orderTelephone').val();
		window.localStorage.delivery = $('#deliveryDate').val();
		window.localStorage.address = $('#orderShipping').val();
		window.localStorage.quantity = $('#orderQty').val();
		$('#saveForLater').val('Saved!');
	});
	
	$('#orderName').val(window.localStorage.name);
	$('#orderEmail').val(window.localStorage.email);
	$('#orderWebsite').val(window.localStorage.webSite);
	$('#orderTelephone').val(window.localStorage.phone);
	$('#deliveryDate').val(window.localStorage.delivery);
	$('#orderShipping').val(window.localStorage.address);
	$('#orderQty').val(window.localStorage.quantity);
	
	
	if (!window.sessionStorage.orderStamp) {
		window.sessionStorage.orderStamp = formatDate(new Date());
	}
	$('#time').text("Order initiated on: " + window.sessionStorage.orderStamp);
})();