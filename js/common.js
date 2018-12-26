$(document).ready(function() {
	var $allBtn=$(".btn-allmenu"),
	$closeBtn=$(".btn-close"),
	$header = $('.header'),  
	$footer = $('.footer'), 
	$nav = $('.nav-btn'), 
	$navWrap=$(".nav-wrap"),
	$mainWrap=$(".main-wrap"),
	$opensectionWrap=$(".opensection-wrap"),
	$container=$(".container"),
	$gnb2depth=$(".gnb-2depth a"),
	$gnb3Wrap=$(".gnb3-wrap"),
	$gnb=$(".gnb"),
	$tablist1=$(".tablist-type1"),
	$tablist2=$(".tablist-type2"),
	$tablist3=$(".tablist-type3"),
	$qna=$(".qna"),
	$location=$(".location-nav-wrap"),
	$lang=$(".lang");
	$pl=$(".prevent_list ul li");
	//메인 확인
	var mainCheck = function(){
		if ($('#main').length==1) {
			return true;
		}else{
			return false;
		}
	}
	//메인 탑 버튼 숨기기
	if (mainCheck()) {
		$('.footer .top-btn').hide();
	}

	//위로가기 버튼 이벤트
	$('.top-btn').on('click', function(event) {		
		$('html, body').animate({scrollTop : 0}, 400);
	});

	//메인 슬라이드 적용
    $('.bxSlider').bxSlider({
      auto: true,
      autoControls: true
    });



	//메뉴 열기
	var openMenu = function(){	
		$opensectionWrap.slideDown("fast")
		.addClass('active');
		$allBtn.hide();
		$closeBtn.show();
	}
	//메뉴 닫기
	var closeMenu = function(){		
		$opensectionWrap.stop().slideUp("fast")
		.removeClass('active');
		$allBtn.show();
		$closeBtn.hide();
	}

		//메뉴 롤오버 이벤트 
	$gnb.on('mouseenter',function(){
		openMenu();	
	});
	$navWrap.on('mouseleave',function(){
		closeMenu();	
	});
	$gnb.find('a').on('focus',function(){
		openMenu();
	});
	$gnb2depth.last().blur(function(){
		closeMenu();	
	});

	//메뉴 - 2depth
	$gnb2depth.on('mouseenter',function(){
		$(this).addClass('active')
		.siblings('gnb3Wrap').show();
	});
	$gnb2depth.on('mouseleave',function(){		
		$(this).removeClass('active');
	});

	//메뉴 - 3depth
	$gnb3Wrap.on('mouseenter',function(){
		$(this).siblings('a').addClass('active')
		.show();
	});
	$gnb3Wrap.on('mouseleave',function(){		
		$(this).siblings('a').removeClass('active')
		.hide();
	});


	//로케이션 이벤트
	$location.find('a').on('focus mouseenter', function(event) {
		$(this).addClass('active');
	});
	$location.on('blur mouseleave', function(event) {
		$(this).find('a').removeClass('active');
	});

	//외국어 이벤트
	$lang.find('a').on('focus mouseenter', function(event) {
		$(this).addClass('active');
	});
	$lang.on('blur mouseleave', function(event) {
		$(this).find('a').removeClass('active');
	});


	// 탭 갯수가 6개 이하일때 넓이 조절 이하일때 조절바 노출
	var tapN = $tablist1.find('a').length;
	if (tapN < 5) {
		var tapW = 1180/tapN;
		$tablist1.find('a').css( 'width', tapW+'px' );
	}else if(tapN > 5){
		$(".scroll-btn").addClass('active')
	}
	
	// 탭 갯수가 6개 이하일때 넓이 조절 이하일때 조절바 노출
	var tapN = $tablist3.find('a').length;
	if (tapN < 5) {
		var tapW = 1180/tapN;
		$tablist3.find('a').css( 'width', tapW+'px' );
	}else if(tapN > 5){
		$(".scroll-btn").addClass('active')
	}

	//탭 클릭 이벤트 
	$tablist1.find('a').on('click',function(e) {
		e.preventDefault();		
		$tablist1.find('a').removeClass('active');
		$(this).addClass('active');
		$(".tabpanel").removeClass('active');
		var panel = $(this).attr('href');
		//alert(panel);
		$(panel).addClass('active');
	});

	//서브 탭 클릭 이벤트 
	$tablist2.find('a').on('click',function(e) {
		e.preventDefault();		
		$tablist2.find('a').removeClass('active');
		$(this).addClass('active');
		$(".tabpanel-sub").removeClass('active');
		var panel = $(this).attr('href');
		$(panel).addClass('active');
	});

	//탭 클릭 이벤트 
	$tablist3.find('a').on('click',function(e) {
		e.preventDefault();		
		$tablist3.find('a').removeClass('active');
		$(this).addClass('active');
		$(".tabpanel").removeClass('active');
		var panel = $(this).attr('href');
		//alert(panel);
		$(panel).addClass('active');
	});

  	//자주하는 질문
  	$qna.find('dt').on('click focus keydown',function() {
  		$qna.find('dt').removeClass('active');
  		$(this).addClass('active');
  	});


	//select disable적용
	if ($("select").length){ 		
		$('select').each(function(i, e){
			var sele = $(this).prop('disabled');		
			if (sele==true) {		 			
				$(this).parent('.select').addClass('disabled');
			}
		});
	}
	//select 적용 
  	var selectTarget = $('.select select'); 
  	selectTarget.change(function(){ 
  		var select_name = $(this).children('option:selected').text(); 
  		$(this).siblings('label').text(select_name); 
  	});

});

	function tabMenu(obj){//질환정보 9대생활수칙 탭
		var el_this = obj;
		var el_target = $(el_this).attr('href');
		$(el_this).addClass('active').siblings(el_this).removeClass('active');
		$('.tabpanel').removeClass('active');
		$(el_target).addClass('active');
	}

	$(function(){ //질환정보 9대생활수칙 바로가기
		var $tab = $('.tablist-type1');
		if(location.hash == "#tab01-panel"){  //금연
			$tab.find('a').eq(1).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab01-panel").addClass('active');
		} else if(location.hash == "#tab02-panel"){  //술 줄이기
			$tab.find('a').eq(2).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab02-panel").addClass('active');
		} else if(location.hash == "#tab03-panel"){  //싱겁게 먹기
			$tab.find('a').eq(3).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab03-panel").addClass('active');
		} else if(location.hash == "#tab04-panel"){  //꾸준한 운동
			$tab.find('a').eq(4).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab04-panel").addClass('active');
		} else if(location.hash == "#tab05-panel"){  //적정체중 유지
			$tab.find('a').eq(5).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab05-panel").addClass('active');
		} else if(location.hash == "#tab06-panel"){  //즐거운 마음 갖기
			$tab.find('a').eq(6).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab06-panel").addClass('active');
		} else if(location.hash == "#tab07-panel"){  //정기적 검사
			$tab.find('a').eq(7).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab07-panel").addClass('active');
		} else if(location.hash == "#tab08-panel"){  //꾸준한 치료
			$tab.find('a').eq(8).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab08-panel").addClass('active');
		} else if(location.hash == "#tab09-panel"){  //발생 즉시 병원이송
			$tab.find('a').eq(9).addClass('active').siblings('a').removeClass('active');
			$('.tabpanel').removeClass('active');
			$("#tab09-panel").addClass('active');
		}
	})





