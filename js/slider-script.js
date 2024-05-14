document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let index = 1;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.opacity = "1";
      } else {
        slide.style.opacity = "0";
      }
    });
  }

  function nextSlide() {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    showSlide(index);
  }

  setInterval(nextSlide, 5000);
});
