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
	var readjustHeight = squareHeight * 0.11;

	/* Courses Background */
	$('#circle-body').css({'top': headerHeight, 'height': squareHeight*0.82 + 'px'});

	/* Function to create circles */
	/*function create_circle(name, scalarDim, scalarTop, scalarLeft){
		var newName = '#'+name+'-circle'; 
		var newDim = scalarDim * squareHeight;
		var newTop = headerHeight + (scalarTop * squareHeight) - readjustHeight;
		var newLeft = leftEdge + (scalarLeft * squareHeight);
		$(newName).css({'height': newDim+'px', 'width': newDim+'px', 'top': newTop+'px', 'left': newLeft+'px'});
	}

	create_circle('course', 0.40, 0.39, 0.34);
	create_circle('python', 0.18, 0.34, 0.81);
	create_circle('web', 0.25, 0.32, 0.04);
	create_circle('java', 0.15, 0.70, 0.17);
	create_circle('cpp', 0.13, 0.28, 0.31);
	create_circle('unity', 0.122, 0.67, 0.75);
	create_circle('graphics', 0.15, 0.18, 0.70);*/

	/* Courses Circle */
	var courseDim = 0.40 * squareHeight;
	var courseTop = headerHeight + (0.39 * squareHeight) - readjustHeight;
	var courseLeft = leftEdge + (0.34 * squareHeight);
	$('#course-circle').css({'height': courseDim+'px', 'line-height': 0.87*courseDim+'px', 'width': courseDim+'px', 'top': courseTop+'px', 'left': courseLeft+'px'});
	
	/* Python Circle */
	var pythonDim = 0.18 * squareHeight;
	var pythonTop = headerHeight + (0.34 * squareHeight) - readjustHeight;
	var pythonLeft = leftEdge + (0.81 * squareHeight);
	$('#python-circle').css({'height': pythonDim+'px', 'line-height': 0.87*pythonDim+'px', 'width': pythonDim+'px', 'top': pythonTop+'px', 'left': pythonLeft+'px'});
	
	/* Web Design Circle */ 
	var webDim = 0.25 * squareHeight;
	var webTop = headerHeight + (0.32 * squareHeight) - readjustHeight;
	var webLeft = leftEdge + (0.04 * squareHeight);
	$('#web-circle').css({'height': webDim+'px', 'line-height': 0.87*webDim+'px', 'width': webDim+'px', 'top': webTop+'px', 'left': webLeft+'px'});

	/* Java Circle */
	var javaDim = 0.15 * squareHeight;
	var javaTop = headerHeight + (0.70 * squareHeight) - readjustHeight;
	var javaLeft = leftEdge + (0.17 * squareHeight);
	$('#java-circle').css({'height': javaDim+'px', 'line-height': 0.87*javaDim+'px', 'width': javaDim+'px', 'top': javaTop+'px', 'left': javaLeft+'px'});

	/* C++ Circle */
	var cppDim = 0.13 * squareHeight;
	var cppTop = headerHeight + (0.28 * squareHeight) - readjustHeight;
	var cppLeft = leftEdge + (0.31 * squareHeight);
	$('#cpp-circle').css({'height': cppDim+'px', 'line-height': 0.87*cppDim+'px', 'width': cppDim+'px', 'top': cppTop+'px', 'left': cppLeft+'px'});

	/* Unity Course */
	var unityDim = 0.122 * squareHeight;
	var unityTop = headerHeight + (0.67 * squareHeight) - readjustHeight;
	var unityLeft = leftEdge + (0.75 * squareHeight);
	$('#unity-circle').css({'height': unityDim+'px', 'line-height': 0.87*unityDim+'px', 'width': unityDim+'px', 'top': unityTop+'px', 'left': unityLeft+'px'});

	/* Graphics Course */
	var graphicsDim = 0.15 * squareHeight;
	var graphicsTop = headerHeight + (0.18 * squareHeight) - readjustHeight;
	var graphicsLeft = leftEdge + (0.70 * squareHeight);
	$('#graphics-circle').css({'height': graphicsDim+'px', 'line-height': 0.87*graphicsDim+'px', 'width': graphicsDim+'px', 'top': graphicsTop+'px', 'left': graphicsLeft+'px'});


	/* Animation */
	/*function circle_animation(name, scalarEnlarge) {
		var circleName = '#'+name+'-circle';
		var circleDim = name+'Dim';
		var circleTop = name+'Top';
		var circleLeft = name+'Left';
		var enlarge = (circleDim / 2) * (scalarEnlarge - 1);
		$(circleName).on('mouseenter mouseleave', function (ev) {
	    	if(ev.type == 'mouseenter'){
	    		$(this).animate({'height': 1.1*circleDim+'px', 'width': 1.1*circleDim+'px', 'top': circleTop-enlarge+'px', 'left': circleLeft-enlarge+'px'}, 175);	
	    	} else {
	    		$(this).animate({'height': circleDim+'px', 'width': circleDim+'px', 'top': circleTop+'px', 'left': circleLeft+'px'}, 175);
	    	}
	    });
	}
	circle_animation('python', 1.1);*/

	/*line-height scalar value 0.975: text will stay in same place, but have a tiny spasm*/
	var pythonEnlarge = (1.1 * pythonDim / 2) - (pythonDim / 2);
	$('#python-circle').on('mouseenter mouseleave', function (ev) {
    	if(ev.type == 'mouseenter'){
    		$(this).animate({'height': 1.1*pythonDim+'px', 'line-height': 0.93*pythonDim+'px', 'width': 1.1*pythonDim+'px', 'top': pythonTop-pythonEnlarge+'px', 'left': pythonLeft-pythonEnlarge+'px'}, 175);	
    	} else {
    		$(this).animate({'height': pythonDim+'px', 'line-height': 0.87*pythonDim+'px', 'width': pythonDim+'px', 'top': pythonTop+'px', 'left': pythonLeft+'px'}, 175);
    	}
    });

	var webEnlarge = (1.1 * webDim / 2) - (webDim / 2);
	$('#web-circle').on('mouseenter mouseleave', function (ev) {
    	if(ev.type == 'mouseenter'){
    		$(this).animate({'height': 1.1*webDim+'px', 'line-height': 0.93*webDim+'px', 'width': 1.1*webDim+'px', 'top': webTop-webEnlarge+'px', 'left': webLeft-webEnlarge+'px'}, 175);	
    	} else {
    		$(this).animate({'height': webDim+'px', 'line-height': 0.87*webDim+'px', 'width': webDim+'px', 'top': webTop+'px', 'left': webLeft+'px'}, 175);
    	}
    });

	var javaEnlarge = (1.1 * javaDim / 2) - (javaDim / 2);
    $('#java-circle').on('mouseenter mouseleave', function (ev) {
    	if(ev.type == 'mouseenter'){
    		$(this).animate({'height': 1.1*javaDim+'px', 'line-height': 0.93*javaDim+'px', 'width': 1.1*javaDim+'px', 'top': javaTop-javaEnlarge+'px', 'left': javaLeft-javaEnlarge+'px'}, 175);	
    	} else {
    		$(this).animate({'height': javaDim+'px', 'line-height': 0.87*javaDim+'px', 'width': javaDim+'px', 'top': javaTop+'px', 'left': javaLeft+'px'}, 175);
    	}
    });

    var cppEnlarge = (1.1 * cppDim / 2) - (cppDim / 2);
    $('#cpp-circle').on('mouseenter mouseleave', function (ev) {
    	if(ev.type == 'mouseenter'){
    		$(this).animate({'height': 1.1*cppDim+'px', 'line-height': 0.93*cppDim+'px', 'width': 1.1*cppDim+'px', 'top': cppTop-cppEnlarge+'px', 'left': cppLeft-cppEnlarge+'px'}, 175);	
    	} else {
    		$(this).animate({'height': cppDim+'px', 'line-height': 0.87*cppDim+'px', 'width': cppDim+'px', 'top': cppTop+'px', 'left': cppLeft+'px'}, 175);
    	}
    });

    var unityEnlarge = (1.1 * unityDim / 2) - (unityDim / 2);
    $('#unity-circle').on('mouseenter mouseleave', function (ev) {
    	if(ev.type == 'mouseenter'){
    		$(this).animate({'height': 1.1*unityDim+'px', 'line-height': 0.93*unityDim+'px', 'width': 1.1*unityDim+'px', 'top': unityTop-unityEnlarge+'px', 'left': unityLeft-unityEnlarge+'px'}, 175);	
    	} else {
    		$(this).animate({'height': unityDim+'px', 'line-height': 0.87*unityDim+'px', 'width': unityDim+'px', 'top': unityTop+'px', 'left': unityLeft+'px'}, 175);
    	}
    });

    var graphicsEnlarge = (1.1 * graphicsDim / 2) - (graphicsDim / 2);
    $('#graphics-circle').on('mouseenter mouseleave', function (ev) {
    	if(ev.type == 'mouseenter'){
    		$(this).animate({'height': 1.1*graphicsDim+'px', 'line-height': 0.93*graphicsDim+'px', 'width': 1.1*graphicsDim+'px', 'top': graphicsTop-graphicsEnlarge+'px', 'left': graphicsLeft-graphicsEnlarge+'px'}, 175);	
    	} else {
    		$(this).animate({'height': graphicsDim+'px', 'line-height': 0.87*graphicsDim+'px', 'width': graphicsDim+'px', 'top': graphicsTop+'px', 'left': graphicsLeft+'px'}, 175);
    	}
    });
});

