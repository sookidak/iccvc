


$(document).ready(function() {
  var $header = $('.header'),  
  $footer = $('.footer'),
  $navBtn = $(".nav-btn a"),
  $service = $('.main-service'),
  $html = $('html, body');



    //메인 클래스 적용(임시) 개발에서 적용 요망
    //현제 화면 오픈시 class 적용 전 화면이 보이는 문제  발생
    $header.addClass('main-style');
    $footer.addClass('main-style'); 


    //메인 스크립트 - 서비스 영역 
    var serviceClose = function(el){
      if ( el.find('input').length >= 1) {
        if (el.find('input').val()=='') {    
          el.animate({height:105},300)
          .removeClass('active');    
        }
      }else{
        el.animate({height:105},300)
        .removeClass('active');
      }      
    }
    var serviceOpen = function(el){
      el.addClass('active');
      if (el.hasClass("mychart")) {
        el.animate({height:315},300);
      }else{
        el.animate({height:200},300);
      } 
    }
    $service.children('div').on('mouseenter focus',function(){
     if ($(this).prev('div').length>=1) {
      serviceClose($(this).prev('div'));
    }
    serviceOpen($(this));

  });
    $service.children('div').on('mouseleave',function(){
      serviceClose($(this));
    });
    $service.find('button').last().on('blur',function(){
      serviceClose($(this).parents('.mychart'));
    });


    //메인 상단 슬라이드 적용
    $('.now-lolling').bxSlider({
      auto: true,
      autoControls: true
    });
    $('.main-bg').bxSlider({
      auto: true,
      autoControls: true
    });


    //메인 네비 버튼 클릭시 //0 960 1920
    $navBtn.on('click', function() {
     var scrollPosition = $($(this).attr("data-target")).offset().top;
     //$navBtn.removeClass('active');
     //$(this).addClass('active');
     $html.stop().animate({scrollTop : scrollPosition}, 400);
   });


    //새로고침시 헤더 높이에 따른 class 조정  
    var height = $(document).scrollTop();
    if ( height > 1 ) {
      $header.removeClass('main-style').addClass('main-style2');}
    });


/* 스크롤 높이에 따라서 헤더,푸터,네비 수정*/
$(window).scroll(function() { 
  var $header = $('.header'),  
  $footer = $('.footer'),
  $navBtn = $(".nav-btn a");  
  var height = $(document).scrollTop();


  if (height >= 1) {
    $header.removeClass('main-style').addClass('main-style2');
    $navBtn.removeClass('active').eq(0).addClass('active')
  }else {
    if ($('.opensection-wrap').css('display')=='none') {
      $header.addClass('main-style')
      .removeClass('main-style2'); 
    }
  }

  if (height >= 960 ) {
    $navBtn.removeClass('active').eq(1).addClass('active')
  }

  if (height >= 1920) {
    $navBtn.removeClass('active').eq(2).addClass('active')
  }
  if (height >= 2010) {
    $footer.removeClass('main-style');
  }else{
    $footer.addClass('main-style');
  }

});


 window.onload = function () {
            $(".section").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            if ($(this).hasClass("healthy")) {
                            moveTop = 2370;
                          }else{
                            moveTop = $(this).next().offset().top;                           
                          }
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                          if ($(this).hasClass("main-top")) {
                            moveTop = 0;
                          }else if ($(this).hasClass("healthy")) {
                            console.log($(document).scrollTop());
                            var h = $(document).scrollTop();
                             //오류남 안잡힘 ㅜㅜ
                             if ( 2000 < h <= 2370) {
                               moveTop = 1920;         
                             }
                             moveTop = $(this).prev().offset().top;  
                          }else{
                            moveTop = $(this).prev().offset().top;                           
                          }
                        }
                    }
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
                });
            });

                 $('.footer').on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {  
                    // 마우스휠을 아래에서 위로
                    } else {   
                     moveTop = 1920;  
                    }
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
                });

        }