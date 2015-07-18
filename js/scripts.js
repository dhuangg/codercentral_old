/**
 * Created by Daniel on 7/15/2015.
 */



jQuery(document).ready(function(){
    var winWidth= $(window).width();
    introduction();
    setTimeout(function(){
        homeAnimation();
        var aboutTile=$('#about-tile').height();
        var halfAbout=aboutTile/2;
        var tile=$('.tile');
        tile.css({
            'height':halfAbout+'px'
        });

        tile.on("mouseenter",'.flip-text',function(){
            $(this).animate({
                'font-size':'40px'
            },100);
        });
        tile.on('mouseout','.flip-text',function(){
            $(this).animate({
                'font-size':'30px'
            },100);
        });
        if(winWidth>757){

        }
    },8000);
});

function introduction(){
    var introText=$(".element");
    var outro=$('.outro');
    introText.typed({
        strings: ["} Coder.Central();"],
        // typing speed
        typeSpeed: 80,
        // time before typing starts
        startDelay: 400,
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
            strings: ["> Be Inspired."],
            // typing speed
            typeSpeed: 80,
            // time before typing starts
            startDelay: 150,
            loopCount: false,
            // show cursor
            showCursor: true,
            callback: function() {
                setTimeout(function(){
                    $('#intro').fadeOut();
                },500);
            }
        });
    },5000);
}

function homeAnimation(){
    $('#home').fadeIn('slow');
}