$(document).ready(function() {
	var winHeight = +$(window).height();
	var winWidth = +$(window).width();

	/* Defining variables for pixel locations */
	scalarWidth = 0.75;
	var squareHeight = scalarWidth * winWidth;
	var leftEdge = (winWidth - squareHeight) / 2;
	var rightEdge = squareHeight + leftEdge - 200;
	var headerHeightString = $('#course-header').css('height');
	var headerHeight = parseInt(headerHeightString.substring(0, headerHeightString.length-2));

	/* Courses Circle */
	var circleDim = 0.40 * squareHeight;
	var courseTop = headerHeight + (0.39 * squareHeight); 
	var courseLeft = leftEdge + (0.34 * squareHeight);
	$('#course-circle').css({'height': circleDim+'px', 'width': circleDim+'px', 'top': courseTop+'px', 'left': courseLeft+'px'});
	
	/* Python Circle */
	var pythonDim = 0.18 * squareHeight;
	var pythonTop = headerHeight + (0.34 * squareHeight);
	var pythonLeft = leftEdge + (0.81 * squareHeight);
	$('#python-course').css({'height': pythonDim+'px', 'width': pythonDim+'px', 'top': pythonTop+'px', 'left': pythonLeft+'px'});
	
	/* Web Design Circle */
	var webDim = 0.25 * squareHeight;
	var webTop = headerHeight + (0.32 * squareHeight);
	var webLeft = leftEdge + (0.04 * squareHeight);
	$('#webdesign-course').css({'height': webDim+'px', 'width': webDim+'px', 'top': webTop+'px', 'left': webLeft+'px'});

	/* Java Circle */
	var javaDim = 0.15 * squareHeight;
	var javaTop = headerHeight + (0.70 * squareHeight);
	var javaLeft = leftEdge + (0.17 * squareHeight);
	$('#java-course').css({'height': javaDim+'px', 'width': javaDim+'px', 'top': javaTop+'px', 'left': javaLeft+'px'});

	/* C++ Circle */
	var cppDim = 0.13 * squareHeight;
	var cppTop = headerHeight + (0.28 * squareHeight);
	var cppLeft = leftEdge + (0.31 * squareHeight);
	$('#cpp-course').css({'height': cppDim+'px', 'width': cppDim+'px', 'top': cppTop+'px', 'left': cppLeft+'px'});

	/* Unity Course */
	var unityDim = 0.122 * squareHeight;
	var unityTop = headerHeight + (0.67 * squareHeight);
	var unityLeft = leftEdge + (0.75 * squareHeight);
	$('#unity-course').css({'height': unityDim+'px', 'width': unityDim+'px', 'top': unityTop+'px', 'left': unityLeft+'px'});

	/* Graphics Course */
	var graphicsDim = 0.15 * squareHeight;
	var graphicsTop = headerHeight + (0.18 * squareHeight);
	var graphicsLeft = leftEdge + (0.70 * squareHeight);
	$('#graphics-course').css({'height': graphicsDim+'px', 'width': graphicsDim+'px', 'top': graphicsTop+'px', 'left': graphicsLeft+'px'});

	/* Animation */
	/*$('#python-course').on('mouseenter', '', function() {

	});*/


});

























