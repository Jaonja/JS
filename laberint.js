let start = document.querySelector("#start");
let game = document.querySelector("#game");
let box = document.createElement("div");
let boxWidth;
start.addEventListener("click", startGame);
let boxSize = getRandom(30, 30);
 console.log (box.offsetWidth)
console.log (boxWidth)
box.classList.add("bal");



document.addEventListener("keydown", function (event) {
  if (event.keyCode == 39) {
    box.style.left += "30px";
  }
  if (event.keyCode == 37) {
    box.style.right += "30px";
  }
  if (event.keyCode == 38) {
    box.style.top  += "30px";
  }
  if (event.keyCode == 40) {
    box.style.bottom += "30px";
  }
});

function renedBox() {
  box.style.height = box.style.width = boxSize + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = "blue";
  box.style.borderRadius = "50%";
  game.insertAdjacentElement("afterbegin", box);
}

function startGame() {
  start.classList.add("none");
  game.style.backgroundColor = "#fff";
  renedBox();
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
