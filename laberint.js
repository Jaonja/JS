let start = document.querySelector("#start");
let game = document.querySelector("#game");
let box = document.createElement("div");
let boxWidth;
start.addEventListener("click", startGame);
let boxSize = getRandom(30, 30);
boxWidth = box.offsetWidth;
box.classList.add("bal");

function ping() {
  box.style.left += "30px";
}
function ping1() {
  box.style.right += "30px";
}
function ping2() {
  box.style.top  += "30px";
}
function ping3() {
  box.style.rbottom += "30px";
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 39) {
    ping();
  }
  if (event.keyCode == 37) {
    ping1();
    console.log("click");
  }
  if (event.keyCode == 40) {
    ping2();
  }
  if (event.keyCode == 38) {
    ping3();
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
