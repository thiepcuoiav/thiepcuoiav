var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    mousewheel: true,
    keyboard: true,
  });

window.addEventListener('load', function() {
  console.log('All assets are loaded');

  let params = (new URL(document.location)).searchParams;
  let name = params.get("invite");
  let type = params.get("type");
  if(name) {
    document.getElementById("invite_friend").innerText = name;
  }

  if(type === '2') {
    document.body.classList.add("container--content__girl");
    document.body.classList.remove("container--content__boy");
  }
});
