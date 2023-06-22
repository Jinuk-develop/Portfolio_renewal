'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  console.log(filter);
  if (filter == null) {
    return;
  }

  // Active 메뉴 재설정 ( work section 선택 색상 표시)
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  event.target.classList.add('category--selected');

  // 프로젝트 opacity:0 삭제 (이미지 효과 주기)
  projectsContainer.classList.add('anim-out');
  // 프로젝트 필터링
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  //   class 삭제. (이지미 효과 주기)
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 200);
});
