    var currntMenu = "currnt-menu";
    var violet = "violet";
    var navMenuA = document.querySelectorAll(".nav-menu li a");
    
    function moveScroll(params) {
        $('li > a').click(function (){
            $('html, body').animate({scrollTop: $(this.hash).offset().top}, 300);
        
        });
    };

    function menuClick(params) {
        moveScroll();
        
        for (var i = 0; i < navMenuA.length; i++) {
            navMenuA[i].classList.remove(violet);
            navMenuA[i].classList.remove(currntMenu);
        }

        $(this).addClass(currntMenu);
        $(this).addClass(violet);

        console.log($(this).parent().index());
        return false;
       
    };

    console.log(navMenuA);
    for (var i = 0; i < navMenuA.length; i++) {
        navMenuA[i].addEventListener("click", menuClick);
      }

   
    navMenuA[0].click();
    let observer = new IntersectionObserver((e)=>{
        
    })
// // 로드된 스크롤 위치에서 메뉴 활성화
// function navOn() {
//     // 1. 현재 scrollTop() 값을 가져오기 위해 변수에 넣는다.
//   var nowTop = $(window).scrollTop();
  
//     // 2. 각 섹션의 offset().top 값을 가져온다.
//     // 2-1. 고정된 header가 있는 경우 header의 높이 만큼 뺀다.
//   var sec1_offset = $('#header').offset().top - 120;
//   var sec2_offset = $('#main').offset().top - 120;
//   var sec3_offset = $('#work3').offset().top - 120;


//   // console.log( 'nowTop' + nowTop);
//   // console.log( 'sec1_offset' + sec1_offset);

//     // 3. class를 초기화 시킨다.
//   $('#gnb > li').removeClass('on');

     // 4. 현재 scrollTop()의 값이 각 섹션의 범위에 있으면 class를 추가한다.
//   if ( nowTop >=  0 && nowTop < sec2_offset) {
//       $('#header').eq(0).addClass('on');
//   } else if( nowTop >=  sec2_offset && nowTop < sec3_offset ) {
//       $('#main').eq(2).addClass('on');
//   } else if( nowTop >=  sec3_offset && nowTop < sec4_offset ) {
//       $('#work3').eq(3).addClass('on');
//   };
// navOn();

// 4. scroll function을 넣어 scroll을 트리거로 이벤트를 발생시킨다.
// $(window).scroll(function() {
//   navOn();
// });


