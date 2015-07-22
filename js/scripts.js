/**
 * Created by Daniel on 7/15/2015.
 */


jQuery(document).ready(function(){

//    htmlCourse();

    var winWidth= $(window).width();
    homeAnimation();
    introduction();
    aboutPage();
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
            $('.typed-cursor').fadeOut('fast');
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
            startDelay: 300,
            loopCount: false,
            // show cursor
            showCursor: true,
            callback: function() {
                setTimeout(function(){
                    $('#intro').fadeOut();
                },800);
                setTimeout(function(){
                    window.location = "homepage.html";
                },1000);
            }
        });
    },3500);

}
function htmlCourse(){
    var winHeight= $(window).height();
    var winWidth = $(window).width();
    var actualHeight=(winHeight/10*7);

}
function homeAnimation(){
        var winHeight=$(window).height();
        var winWidth= $(window).width();
        var aboutH;
        $('#home').fadeIn(2000);

        setTimeout(function(){
            $('#aboutInfo').animate({
                "width":'40%'
            },2000,function(){
                $('#welcome').fadeIn();
            });
        },1000);
        var testSlider=$('#testimonial-slider');
        testSlider.fadeThrough({
            interval: 5000,
            fadeduration: 3000,
            heightduration:100,
            autostart: true,
            autowidth: false,
            childIdentifier: '.item'});

        var tile=$('.tile');
        var tileHeight=tile.width()*1.2;
        tile.css({
            'height':tileHeight + 'px'
        });
        if(winWidth>757){
            tile.on("mouseenter",'.flip-text',function(){
                $(this).animate({
                    'font-size':'30px'
                },100);
                $(this).parent().addClass('shaded');
            });
            tile.on('mouseout','.flip-text',function(){
                $(this).animate({
                    'font-size':'22px'
                },100);
                $(this).parent().removeClass('shaded');
            });

            aboutH=winHeight*.65;
            $('#aboutInfo').css({
                'top': aboutH +'px'
            });
        }else{
            aboutH=winHeight*.25;
            $('#aboutInfo').css({
                'top': aboutH +'px'
            });

            aboutH=winHeight*.819;
            $('home-banner').css({
               'height':aboutH+'px'
            });
        }
}
function aboutPage(){
    var winHeight= $(window).height();
    var abtTileH=winHeight*.27;
    var abtTileH2=winHeight*.56;
    var abtTile=$('.abt-tiles');
    abtTile.css({
        'height': abtTileH+'px'
    });
    $('.abt-tiles-tall').css({
        'height':abtTileH2+'px'
    });
}