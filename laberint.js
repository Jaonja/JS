let start = document.querySelector("#start");
let game = document.querySelector("#game");
let box = document.createElement("div");
let boxWidth;
let position = {
    top: 0,
    left: 0,
};
start.addEventListener("click", startGame);
let boxSize = getRandom(30, 30);
boxWidth = box.offsetWidth;
box.classList.add("bal");

function pick() {
    position.left += 30
    box.style.left = String(position.left) + 'px';
}
function pick1() {
    position.left -= 30
    box.style.left = String(position.left) + 'px';
  
}
function pick2() {
    position.top -= 30
    box.style.top = String(position.top) + 'px';
}
function pick3() {
    position.top += 30
    box.style.top = String(position.top) + 'px';
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 68) {
    pick();
  }
  if (event.keyCode == 65) {
    pick1();
    console.log("click");
  }
  if (event.keyCode == 87) {
    pick2();
  }
  if (event.keyCode == 83) {
    pick3();
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
