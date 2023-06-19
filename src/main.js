// window.document.querySelector();
// widow - 글로벌 객체 (브라우저에서 기본적으로 제공)

// 스크롤시 Header에 다크 스크롤링 적용.
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', (event) => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});
