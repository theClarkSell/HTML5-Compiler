(function() {
	// (be15) Add the SpeechRecognition object
	var recognition = new webkitSpeechRecognition();
    recognition.maxAlternatives = 5;

    // (be16) Add the onresult handler
    recognition.onresult = function(event) { // SpeechRecognitionEvent
      if (event.result.length > 0) { // SpeechRecognitionResult
        var q = document.querySelector('#query'),
            result = event.result[0];

        if (result.confidence > .5) {
            q.value = event.result[0].transcript; // SpeechRecognitionAlternative
        } else {
            q.value = "SPEAK CLEARLY!"
        }
      }
    };

    recognition.onaudiostart = function() {
    	var q = document.querySelector('#query');

    	q.value = "Speak now...";
    };

    // (be17) Add the button click handler
    var button = document.querySelector('#speak');
    button.onclick = function() {
    	recognition.start();
    };
})();