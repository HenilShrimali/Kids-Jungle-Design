const currencySelect = document.getElementById("currency");
const flagImg = document.getElementById("countryFlag");

currencySelect.addEventListener("change", function () {
  const value = this.value;

  if (value === "USD") {
    flagImg.src = "./assets/flags/usa.png";
  } else if (value === "INR") {
    flagImg.src = "./assets/flags/ind.png";
  } else if (value === "GBP") {
    flagImg.src = "./assets/flags/uk.png";
  }
});

var brandSwiper = new Swiper(".brandSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
