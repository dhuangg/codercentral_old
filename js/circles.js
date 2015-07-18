$(document).ready(function() {
	var winHeight = +$(window).height();
	var winWidth = +$(window).width();

	/*Defining variables for pixel locations*/
	scalarWidth = 0.75;
	var centerLength = scalarWidth * winWidth;
	var leftEdge = (winWidth - centerLength) / 2;
	var rightEdge = centerLength + leftEdge - 200;
	var headerHeightString = $('#course-header').css('height');
	var headerHeight = parseInt(headerHeightString.substring(0, headerHeightString.length-2));

	/*Python circle math*/
	var pythonTop = headerHeight + (0.5 * leftEdge);
	var pythonLeft = leftEdge + (centerLength * 0.2);
	/*alert(pythonTop + ' ' + pythonLeft)*/
	$('#python-course').css({'top': pythonTop+'px', 'left': pythonLeft+'px'});
	
	/*Web Design circle math*/
	var webTop = headerHeight + (0.8 * leftEdge);
	var webLeft = leftEdge + (centerLength * 0.65);
	$('#webdesign-course').css({'top': webTop+'px', 'left': webLeft+'px'});

	/*Java circle math*/
	var javaTop = headerHeight * 1.95;
	var javaLeft = leftEdge;
	$('#java-course').css({'top': javaTop+'px', 'left': javaLeft+'px'});

	/*C++ circle math*/
	var cppTop = headerHeight * 2.25;
	var cppLeft = rightEdge;
	$('#cpp-course').css({'top': cppTop+'px', 'left': cppLeft+'px'});

	/*Unity circle math*/
	var unityTop = headerHeight * 2.8;
	var unityLeft = centerLength * 0.55;
	var topSpace = 0.5 * leftEdge;
	$('#unity-course').css({'top': unityTop+'px', 'left': unityLeft+'px'});

	/*Course circle math*/
	var courseTop = javaTop; + (0.5 * (cppTop - javaTop));
	var courseLeft = (winWidth/2) - 100;
	$('#course-circle').css({'top': courseTop+'px', 'left': courseLeft+'px'});


});