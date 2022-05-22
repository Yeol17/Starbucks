//BADGE & TO TOP
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
//_.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, {
    duration: .7,
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7,
    opacity: 1
  });
});


// SWIPER
// new Swiper(선탯자, 옵션);
 new Swiper('.notice--line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,      //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,     //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자,
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.pormotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// 프로모션 토글버튼
const promotinoEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion){
    promotinoEl.classList.add('hide');
  }else {
    promotinoEl.classList.remove('hide');
  }
});


// YOUTUBE VIDEOS FLOATING
function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 요소
    random(1.5, 2.5), // 애니매이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// SCROLL MAGIC
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook:.8    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
