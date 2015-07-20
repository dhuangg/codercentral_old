/**
 * Created by Daniel on 7/15/2015.
 */


jQuery(document).ready(function(){

//    htmlCourse();

    var winWidth= $(window).width();
    if(winWidth<757){
        //$('#home').removeClass('row');
    }
    homeAnimation();
    introduction();

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
    $(document).ready(function(){
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
        var aboutTile=$('#about-tile').height();
        //var halfAbout=aboutTile/2;
        var halfAbouter=winHeight*.4198;
        var tile=$('.tile');

        if(winWidth>757){
            halfAbouter=winHeight*.4198;
            tile.css({
                'height':halfAbouter+'px'
            });
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

            aboutH=winHeight*.75;
            $('#aboutInfo').css({
                'top': aboutH +'px'
            });
        }else{
            halfAbouter=winHeight*.25;
            tile.css({
                'height':halfAbouter+'px'
            });
            aboutH=winHeight*.25;
            $('#aboutInfo').css({
                'top': aboutH +'px'
            });

            aboutH=winHeight*.819;
            $('home-banner').css({
               'height':aboutH+'px'
            });
        }
    });

}