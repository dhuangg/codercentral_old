$(document).ready(function() {

	SCALARWIDTH = 0.75;

	/* Defining variables for pixel locations */
	var winHeight = +$(window).height();
	var winWidth = +$(window).width();
	var squareHeight = SCALARWIDTH * winWidth;
	var leftEdge = (winWidth - squareHeight) / 2;
	var rightEdge = squareHeight + leftEdge - 200;
	var headerHeightString = $('#course-header').css('height');
	var headerHeight = parseInt(headerHeightString.substring(0, headerHeightString.length-2));
	var readjustHeight = squareHeight * 0.11;

	// Courses Background
	$('#circle-body').css({'top': headerHeight, 'height': squareHeight*0.82 + 'px'});

	//Function to create circles
	function create_circle(name, scalarDim, scalarTop, scalarLeft, lh1) {
		// Default value for centering text
		lh1 = typeof lh1 !== 'undefined' ? a : 0.87;

		// Create id and set positioning
		var newName = '#'+name+'-circle';
		var newDim = scalarDim * squareHeight;
		var newTop = headerHeight + (scalarTop * squareHeight) - readjustHeight;
		var newLeft = leftEdge + (scalarLeft * squareHeight);
		$(newName).css({'height': newDim+'px', 'line-height': 0.87*newDim+'px', 'width': newDim+'px', 'top': newTop+'px', 'left': newLeft+'px'});
	}

	// Create circles
	create_circle('course', 0.40, 0.39, 0.34);
	create_circle('python', 0.18, 0.34, 0.81);
	create_circle('web', 0.25, 0.32, 0.04);
	create_circle('java', 0.15, 0.70, 0.17);
	create_circle('cpp', 0.13, 0.28, 0.31);
	create_circle('unity', 0.122, 0.67, 0.75);
	create_circle('graphics', 0.18, 0.18, 0.68);

	// Animates the circle
	function circle_animation(name, scalarEnlarge, lh1, lh2, speed) {
		// Default values for lh1, lh2 to vertically align text and speed
		scalarEnlarge = typeof scalarEnlarge !== 'undefined' ? scalarEnlarge : 1.1;
		lh1 = typeof lh1 !== 'undefined' ? a : 0.93;
		lh2 = typeof lh2 !== 'undefined' ? a : 0.87;
		speed = typeof speed != 'undefined' ? speed : 175;

		var circleName = '#'+name+'-circle';

		// Obtain pixel sizes from DOM
		var circleDimString = $(circleName).css('height');
		var circleDim = parseInt(circleDimString.substring(0, circleDimString.length-2));

		var circleTopString = $(circleName).css('top');
		var circleTop = parseInt(circleTopString.substring(0, circleTopString.length-2));

		var circleLeftString = $(circleName).css('left');
		var circleLeft = parseInt(circleLeftString.substring(0, circleLeftString.length-2));

		// Equation so that circle to enlarge in the center
		var enlarge = (circleDim / 2) * (scalarEnlarge - 1);

		// mouseenter - circle gets bigger, mouseleave - returns to normal size
		$(circleName).on('mouseenter mouseleave', function (ev) {
	    	if(ev.type == 'mouseenter'){
	    		$(circleName).animate({'height': scalarEnlarge*circleDim+'px', 'line-height': lh1*circleDim+'px', 'width': scalarEnlarge*circleDim+'px', 'top': circleTop-enlarge+'px', 'left': circleLeft-enlarge+'px'}, speed);
	    	} else {
	    		$(circleName).animate({'height': circleDim+'px', 'line-height': lh2*circleDim+'px', 'width': circleDim+'px', 'top': circleTop+'px', 'left': circleLeft+'px'}, speed);
	    	}
	    });
	}

	// Create event handlers for animating circles
	circle_animation('python');
	circle_animation('web');
	circle_animation('java');
	circle_animation('cpp');
	circle_animation('unity');
	circle_animation('graphics');
});