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
	$qna=$(".qna"),
	$location=$(".location-nav-wrap");

	var allBtnNum = 0;	//전체메뉴 기본 설정값



	//메인 확인
	var mainCheck = function(){
		if ($('#main').length==1) {
			return true;
		}else{
			return false;
		}
	}
	//메뉴 열기
	var openMenu = function(){	
		$opensectionWrap.slideDown("fast")
		.addClass('active');
		$allBtn.hide();
		$closeBtn.show();
		if (mainCheck()) {
			$header.removeClass('main-style');
		}
	}
	//메뉴 닫기
	var closeMenu = function(){		
		if (allBtnNum==0) {
			$opensectionWrap.stop().slideUp("fast")
			.removeClass('active');
			$allBtn.show();
			$closeBtn.hide();
			if (mainCheck() && $(this).scrollTop() == 0) {				
				$header.addClass('main-style')
				.removeClass('main-style2')			
			}
		}
	}

	//전체버튼 클릭 이벤트
	$allBtn.on('click', function(event) {
		allBtnNum = 1;	
		openMenu();
	});
	$closeBtn.on('click', function(event) {
		allBtnNum = 0;	
		closeMenu();
	});
	$mainWrap.on('click', function(event) {
		allBtnNum = 0;	
		closeMenu();
	});
	$container.on('click', function(event) {
		allBtnNum = 0;	
		closeMenu();
	});

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


	// 탭 갯수가 6개 이하일때 넓이 조절 이하일때 조절바 노출
	var tapN = $tablist1.find('a').length;
	if (tapN < 6) {
		var tapW = 1180/tapN;
		$tablist1.find('a').css( 'width', tapW+'px' );
	}else if(tapN > 6){
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


	//탭 가로 스크롤 버튼
	$('.scroll-left').on('click keydown', function(event) {
		scrollMove(-196);
	});
	//탭 가로 스크롤 버튼
	$('.scroll-right').on('click keydown', function(event) {
		scrollMove(196);
	});
	var scrollMove = function (n){
		$('.tablist-type1').animate({scrollLeft : $('.tablist-type1').scrollLeft() + n}, 500);   
	}


  	//자주하는 질문
  	$qna.find('dt').on('click focus keydown',function() {
  		$qna.find('dt').removeClass('active');
  		$(this).addClass('active');
  	});


	//진료과 목록  아이콘 노출 
	$('.text-ko > a').on('focus',function(){
		$('.over-icon').css( 'display', 'none' );
		$(this).siblings('.over-icon').css( 'display', 'block' );
	});


	//select IE9 수정
	if ($("select").length){ 		
		$('select').each(function(i, e){
			var sele = $(this).prop('disabled');		
			if (sele==true) {		 			
				$(this).parent('label').addClass('disabled');
			}
		});
	}




});







