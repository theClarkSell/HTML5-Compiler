(function() {
	var _canvas, _ctx;
	
	window.onload = function() {
		var baseY, baseX, chartWidth, salesData;
       	baseY = 375, baseX = 110, chartWidth = 475;
		
		salesData = [{
		    category: "Basketballs",
            sales: 150
        }, {
            category: "Baseballs",
            sales: 125
        }, {
            category: "Footballs",
            sales: 300
        }];
		
		_canvas = document.getElementById('chart'); 
		_ctx = _canvas.getContext("2d");
		
		drawAxes(baseX, baseY, chartWidth);
		
		//Draw Recangles
		//drawBars(salesData, baseX, baseY);
		
		//Draw Images
		drawImages(salesData, baseX, baseY);
		
		labelAxes();
	};
	
	function drawImages(salesData, baseX, baseY) {
	    var i, length, xPos, barWidth;
        length = salesData.length;
        barWidth = 80;
        xPos = baseX + 30;

        for (i = 0; i < length; i++) {
            var sales, category, img;
            category = salesData[i].category;
            sales = salesData[i].sales;                
            img = new Image();
            img.onload = (function(height, base, currentImage, currentCategory) {
                return function() {
                    var yPos;
                    yPos = base - height - 1;

                    _ctx.drawImage(currentImage, 30, 30, barWidth, height, xPos, yPos, barWidth, height);
                    labelBar(currentCategory, xPos, baseY);

                    xPos += 125;            
                }
            })(sales, baseY, img, category);
			img.src = "../assets/" + category + ".jpg";                                
        }
    }
	
	function drawAxes(baseX, baseY, chartWidth) {
	       var leftY, rightX;
        leftY = 5;
        rightX = baseX + chartWidth;

        //Draw Y Axis
        _ctx.moveTo(baseX, leftY);
        _ctx.lineTo(baseX, baseY);

        //Draw Arrow for Y Axis
        _ctx.moveTo(baseX, leftY);
        _ctx.lineTo(baseX + 5, leftY + 5);
        _ctx.moveTo(baseX, leftY);
        _ctx.lineTo(baseX - 5, leftY + 5);

        //Draw X Axis
        _ctx.moveTo(baseX, baseY);
        _ctx.lineTo(rightX, baseY);

        //Draw Arrow for X Axis
        _ctx.moveTo(rightX, baseY);
        _ctx.lineTo(rightX - 5, baseY + 5);
        _ctx.moveTo(rightX, baseY);
        _ctx.lineTo(rightX - 5, baseY - 5);

        //Define Style and stroke lines
        _ctx.strokeStyle = "#000";
        _ctx.stroke();
    }

	function drawBars(salesData, baseX, baseY) {
	    var i, length, colors, xPos, barWidth, category, sales;
        length = salesData.length;
        barWidth = 80;
        xPos = baseX + 30;
		
		colors = ["#e34c26", "#0092bf", "rgba(240, 101, 41, 0.90)"];  

        for (i = 0; i < length; i++) {
            category = salesData[i].category;
            sales = salesData[i].sales;
			
			// Color Fill
			//_ctx.fillStyle = colors[i % length];
            
			//Gradient Fill
			_ctx.fillStyle = createGradient(xPos, baseY - sales-1, barWidth, colors[i % length]); 

			_ctx.fillRect(xPos, baseY - sales-1, barWidth, sales);
            
			labelBar(category, xPos, baseY);
			
            xPos += 125;
        }        
    }

	function labelAxes() {
	    var height, heightOffset, widthOffset;
        height = _ctx.canvas.height;
        heightOffset = height/2;
        widthOffset = _ctx.canvas.width/2;

        if (typeof G_vmlCanvasManager === 'undefined') {
            _ctx.font = "bold 18px sans-serif";
            _ctx.fillText("Units Sold", 10, heightOffset);
            _ctx.fillText("(in 100s)", 17, heightOffset + 17);
            _ctx.fillText("Product", widthOffset, height - 20);
        }
    }

	function labelBar(category, xPos, baseY) {
		_ctx.fillStyle = "#000";
		_ctx.font = "14px sans-serif";
	    _ctx.fillText(category, xPos - (category.length/2 - 10), baseY + 20);
	}
	
	function createGradient(x, y, width, color) {
	    var gradient;

      	gradient = _ctx.createLinearGradient(x, y, x+width, y);
      	gradient.addColorStop(0, color);
      	gradient.addColorStop(1, "#efe3e3");

      	return gradient;
  	}
})();