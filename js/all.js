const currentMenu = "current-menu";
const navMenu = document.querySelectorAll(".nav-menu > li");

navMenu[0].classList.add(currentMenu);

for (let i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("click", menuClick);
}

function menuClick(event) {
  //메뉴가 이동하면 navOn함수에 의해 클래스가 붙습니다. 따라서 클릭 이벤트가 있을 때 클래스를 별도로 붙이지 않아도 됩니다!

  //현재 클릭한 메뉴를 다시 클릭했을 때 클래스 없어지는 현상을 막았습니다.
  if (event.target.classList.contains(currentMenu)) return false;

  //선택한 메뉴의 이름과 같은 id를 가진 센션을 찾기 위해 메뉴 내부의 내용을 가져온다.
  const current_section = event.target.textContent.toLowerCase();
  $("html").animate({ scrollTop: $(`#${current_section}`).offset().top }, 300);
}

function removeAllClass(target) {
  for (let i = 0; i < navMenu.length; i++) {
    if (i != target) navMenu[i].classList.remove(currentMenu);
  }
}

// 각 섹션의 offset().top 값을 가져온다.
const header_offset = $("nav").height();
const home = $("#home");
const profile = $("#profile");
const work = $("#work");
var sec1_offset = home.offset().top;
var sec2_offset = profile.offset().top - header_offset;
var sec3_offset = work.offset().top - header_offset;
// 로드된 스크롤 위치에서 메뉴 활성화
function navOn() {
  // 1. 현재 scrollTop() 값을 가져오기 위해 변수에 넣는다.
  let nowTop = $(window).scrollTop();
  let target = 0;
  //4. 현재 scrollTop()의 값이 각 섹션의 범위에 있으면 class를 추가한다.
  if (nowTop >= sec2_offset && nowTop < sec3_offset) {
    target = 1;
    navMenu[1].classList.add(currentMenu);
  } else if (nowTop >= sec3_offset) {
    target = 2;
    navMenu[2].classList.add(currentMenu);
  } else {
    target = 0;
    navMenu[0].classList.add(currentMenu);
  }
  removeAllClass(target);
}

//4. scroll function을 넣어 scroll을 트리거로 이벤트를 발생시킨다.
$(window).scroll(navOn);
