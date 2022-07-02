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
      delay: 5000,
    },
    mousewheel: true,
    keyboard: true,
  });

window.addEventListener('load', function() {
  console.log('All assets are loaded');

  let params = (new URL(document.location)).searchParams;
  let name = params.get("invite");
  console.log(name, "==your name==")
  if(name) {
    document.getElementById("invite_friend").innerText = name;
  }
})
