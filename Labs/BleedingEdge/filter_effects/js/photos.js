(function($) {
	var button = $('button'),
		idList = [];

	button.each(function() {
		idList.push(this.id);
	});
	
	// Add button handlers (be02)	
	$('button').on('click', function() {
		var images = $('#page img');

		images.removeClass(idList.join(" "));
		images.addClass(this.id);
	});

	Modernizr.load({
		test: Modernizr.borderradius,
		nope: '../../js/PIE.js',
		callback: function() {
			$('img').each(function() {
				PIE.attach(this);
			})
		}
	});
})(jQuery);