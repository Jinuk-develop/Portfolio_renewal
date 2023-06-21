// window.document.querySelector();
// widow - 글로벌 객체 (브라우저에서 기본적으로 제공)

// 스크롤시 Header에 다크 스크롤링 적용.
const header = document.querySelector('.header');
// const headerHeight = header.getBoundingClientRect().height;
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', (event) => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

//  아래로 스크롤시 Home section을 점차 투명하게
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow up 버튼 home 화면지났을 때, 나오게 하기.
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글버튼 만들기 ()
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 토글 자동 닫기.active
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
