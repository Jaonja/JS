let count = 0;
let width;
const images = document.querySelectorAll(".sliders img");
const sliderLine = document.querySelector(".slider-line");
const bit = document.querySelectorAll(".sliders img");
function init() {
  width = document.querySelector(".sliders").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  rollSlider();
}
init();

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

let balls = document.querySelectorAll(".ball");
balls.forEach((ball) => {
  ball.addEventListener("click", function (e) {
    count = e.target.dataset.class;
    for (let i = 0; i < balls.length; i++) {
      balls[i].classList.remove("color");
    }
    if ((this.dataset.class = count)) {
      this.classList.add("color");
    }

    rollSlider();
  });
});

document.querySelector(".slider-next").addEventListener("click", function () {
    count++;
    if (count >= images.length) {
      count = 0;
    }
    if (count === 7) {
      count = 0;
    }
    rollSlider();
  });
  
  document.querySelector(".slider-prev").addEventListener("click", function () {
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    if (count > 7) {
      count = 0;
    }
    rollSlider();
  });


