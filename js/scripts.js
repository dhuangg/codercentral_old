/**
 * Created by Daniel on 7/15/2015.
 */



jQuery(document).ready(function(){



});

function introduction(){
    var introText=$(".element");
    var outro=$('.outro');
    introText.typed({
        strings: ["{ Coder.Central();"],
        // typing speed
        typeSpeed: 100,
        // time before typing starts
        startDelay: 500,
        loopCount: false,
        // show cursor
        showCursor: true,
        callback:function(){
            $('.typed-cursor').fadeOut('medium');
        }
    });

    var winHeight= $(window).height();
    //var winWidth= $(window).width();
    var introHeight=(winHeight/2-100);
    $('#intro').css({
        'top': introHeight+'px'
    });
    setTimeout(function(){
        introText.fadeOut('medium');
        outro.typed({
            strings: [">Be Inspired."],
            // typing speed
            typeSpeed: 100,
            // time before typing starts
            startDelay: 200,
            loopCount: false,
            // show cursor
            showCursor: true,
            callback: function() {
                setTimeout(function(){
                    $('#intro').fadeOut();
                },2000);
            }
        });
    },5000);
}