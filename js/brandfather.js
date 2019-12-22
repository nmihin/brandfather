/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//DOM UTIL READY
$(document).ready(function() {
    BRANDFATHER.init();

    $(window).resize(function() {
        BRANDFATHER.resize();
    })

    $(window).scroll(function() {
        BRANDFATHER.fixed();
    })

});

var BRANDFATHER = {
    init: function() {
        this.actions();
        this.fontSize();
        //this.formWidth();
        this.scrollTo();
        this.changeInput();
        this.arrowPosition();
        return stickyNavTop = $('#section1').offset().top;
        this.fixed();
        this.focusIosFix();
    },
    actions: function() {
        this.windowHeight();
        this.tweetButton();
        this.detectDevice();
    },
    focusIosFix: function() {
        if ($('.input .frm .text').is(":focus")) {
            console.log("dff");
        }
    },
    resize: function() {
        this.windowHeight();
        this.fontSize();
        //this.formWidth();
        this.quoteHeight();
        this.arrowPosition();
        this.detectDevice();
    },
    arrowPosition: function() {
        var o1 = $('#teaser .sec-input .frm').offset();
        var o2 = $('#section1').offset();
        var dx = o2.top - o1.top;
        $('.scroll-arrow').css('margin-top', (dx / 2) + 15);
        vW = $(window).width();
        if (vW < 400) {
            $('.scroll-arrow').css('margin-top', (dx / 2));
        }
    },
    detectDevice: function(){
        if(navigator.userAgent.match(/Android/i)) {
            $('.sec-input .frm .button').each(function(){
              $(this).css({
                  'position':'absolute',
                  'right':0
              });  
            });
        }
        if(navigator.userAgent.match(/iPhone/i)) {
            $('.sec-input .frm .button').each(function(){
              $(this).css({
                  'position':'absolute',
                  'right':0
              });  
            });
            winw = $(window).width();
            winh = $(window).height();
            if (winw>=667){
                $('#header .input .frm').css('display','block');                
            }
            if (winw>=650){
                $('#teaser').css('height','600px');
                $('#header .input .icon-facebook').css('left','-40px');
                $('#header .input .icon-twitter').css('left','-80px');
            }
            if (winw<667){
                $('#header .input .frm').css('display','none');                
            }
        }
        if(navigator.userAgent.match(/iPod/i)) {
            $('.sec-input .frm .button').each(function(){
              $(this).css({
                  'position':'absolute',
                  'right':0
              });  
            });
            winw = $(window).width();
            if (winw>=400){
                $('#teaser').css('height','600px');
                $('#header .input .frm').css('display','block'); 
                $('#header .input .frm .text').css('height','35px'); 
                $('#header .input .icon-facebook').css('left','-40px');
                $('#header .input .icon-twitter').css('left','-80px');
            }
        }
        if(navigator.userAgent.match(/iPad/i)) {

        }
    },
    changeInput: function(){
        //HEADER
        $(".input .frm .text").keyup(function(){
        $('.sec-input .frm .text').each(function(){
            $(this).css({
                'position':'absolute',
                'top':0
            });  
        });
        var textinput = $(".input .frm .text").val();
        $(this).next().html(textinput);
        v = $('.frm-font').width();
        f = $(this).width();
        n = 14*((f-25)/v);
        if(v>=(f-25)){
            $(this).css({
                'font-size':n+'px'
            });
            $('.input .frm .button').css({
                /*'font-size':n+'px'*/   
            });
        }
        else {
            $(this).css({
                'font-size':'14px'           
            });       
            $('.input .frm .button').css({
                'font-size':'14px'            
            });     
        }
      });
      //MAIN
      $("#teaser .sec-input .frm .text").keyup(function(){
        var textinput = $(".sec-input .frm .text").val();
        $(this).next().html(textinput);
        v = $('#teaser .sec-input .frm-font').width()*2;
        winh = $(window).height();
        if(winh>1100){
         v = $('#teaser .sec-input .frm-font').width();           
        }
        f = $(this).outerWidth();   
        na = f/v;
        if(na<=1){
            winwx = $(window).width();
            if(winwx<=640){
                vx = na*13;
            }
            else {
                vx = na*20;           
            }
            $(this).css({
                'font-size':vx+'px'
            });
            $('#teaser .sec-input .frm .button').css({
                /*'font-size':n+'px'*/   
            });
        }
        else {
            winwx = $(window).width();
            if(winwx<=640){
                va = '13px';
            }
            else {
                va = '20px';
            }
            $(this).css({
                'font-size':va   
            });       
            $('#teaser .sec-input .frm .button').css({
                /*'font-size':'14px'*/            
            });     
        }
      });
      //FOOTER
      $("#section5 .sec-input .frm .text").keyup(function(){
        var textinput = $("#section5 .sec-input .frm .text").val();
        $(this).next().html(textinput);
        v = $('#section5 .sec-input .frm-font').width()*2;
        f = $(this).outerWidth();
        if(winh>1100){
        v = $('#section5 .sec-input .frm-font').width();         
        }
        na = f/v;
        if(na<=1){
            winwx = $(window).width();
            if(winwx<=640){
                vx = na*13;
            }
            else {
                vx = na*20;
            }
            $(this).css({
                'font-size':vx+'px'
            });
            $('#teaser .sec-input .frm .button').css({
                /*'font-size':n+'px'*/   
            });
        }
        else {
            winwx = $(window).width();
            if(winwx<=640){
                va = '13px';
            }
            else {
                va = '20px';
            }
            $(this).css({
                'font-size':va      
            });       
            $('#teaser .sec-input .frm .button').css({
                /*'font-size':'14px'*/            
            });     
        }
      });
    },
    scrollTo: function() {
        $(".scroll-arrow").on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $("#section1").offset().top + 10
            }, 900);
        });
    },
    quoteHeight: function() {
        if (this.detectOrientation()) {
            //PORTRAIT

        }
        else {
            //LANDSCAPE
            if (this.testIOS()) {
                $('#section4 .quote_left.first').css('padding-top', '12em');
            }
        }
    },
    formWidth: function() {
        var v1 = $('#teaser .sec-input .frm .text').outerWidth();
        console.log(v1);
        var v2 = $('#teaser .sec-input .frm .button').outerWidth();
        console.log(v2);
        var v3 = v1 + v2;
        if (this.detectOrientation()) {
            //PORTRAIT
            $('#teaser .sec-input .frm').css('width', v3 + 2);
            $('#section5 .sec-input .frm').css('width', v3 + 2);
            //IF IOS
            if (this.testIOS()) {
                $('#teaser .sec-input .frm').css('width', v3 + 10);
                $('#section5 .sec-input .frm').css('width', v3 + 10);
            }
        }
        else {
            //LANDSCAPE
            $('#teaser .sec-input .frm').css('width', v3 + 26);
            $('#section5 .sec-input .frm').css('width', v3 + 26);
            if (this.testIOS()) {
                $('#teaser .sec-input .frm').css('width', v3 + 30);
                $('#section5 .sec-input .frm').css('width', v3 + 30);
            }
        }
    },
    windowHeight: function() {
        winh = $(window).height();
        $('#teaser').css('height', (winh - 80));
    },
    detectOrientation: function() {
        if (window.innerHeight > window.innerWidth) {
            return true;
        }
        else {
            return false;
        }
    },
    testIOS: function() {
        var iOS = false,
                p = navigator.platform;

        if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
            return true;
        }
    },
    fontSize: function() {
        winh = $(window).height();
        winw = $(window).width();
        var s = 11;
        if (this.detectOrientation()) {
            //PORTRAIT
            $('#teaser,#section5').css('font-size', winw / (s * 0.65) + '%');
        }
        else {
            //LANDSCAPE
            $('#teaser,#section5').css('font-size', winh / (s * 0.73) + '%');
        }
    },
    tweetButton: function() {
        $('.tweet-button').on('click', function() {
            //e.preventDefault();
            $(this).text('Redirect to twitter');
        });
    },
    fixed: function() {
        var scrollTop = $(window).scrollTop();
        var link = $('#footer').offset().bottom;
        //console.log(link);
        //console.log(scrollTop);

        if (scrollTop > stickyNavTop) {
            $('#header.header2').addClass('sticky');
        }
        if (scrollTop < stickyNavTop) {
            $('#header.header2').removeClass('sticky');
        }
        $('#footer').onScreen({
            container: window,
            direction: 'vertical',
            doIn: function() {
                $('#header.header2').removeClass('sticky');
            },
            doOut: function() {
                $('#header.header2').addClass('sticky');
            }
        });
        /*if ($(window).scrollTop() + $(window).innerHeight() == $(document).innerHeight()) {
         $('#header.header2').removeClass('sticky');
         }*/
    }
}