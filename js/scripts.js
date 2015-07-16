/**
 * Created by Daniel on 7/15/2015.
 */



jQuery(document).ready(function(){
    var introText=$(".element");
    $(function(){
        introText.typed({
            strings: ["{ Coder.Central();"],
            // typing speed
            typeSpeed: 100,
            // time before typing starts
            startDelay: 500,
            loopCount: false,
            // show cursor
            showCursor: true
        });
    });
    var winHeight= $(window).height();
    //var winWidth= $(window).width();
    var introHeight=(winHeight/2-100);
    $('#intro').css({
        'top': introHeight+'px'
    });
    setTimeout(function(){
        introText.fadeOut('medium');
        $('.typed-cursor').fadeOut('medium');
        $('.outro').typed({
            strings: [">Be Inspired."],
            // typing speed
            typeSpeed: 100,
            // time before typing starts
            startDelay: 200,
            loopCount: false,
            // show cursor
            showCursor: true
        });
    },5000);
});