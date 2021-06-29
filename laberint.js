let start = document.querySelector("#start");
let game = document.querySelector("#game");
let box = document.createElement("div");
let boxSize = getRandom(30, 30);
let boxEnd = document.createElement("span");
let gameSpawn = game.getBoundingClientRect ()
let maxTop = gameSpawn.height - boxSize
let maxLeft = gameSpawn.width - boxSize
console.log (gameSpawn)
console.log (boxEnd)

let position = {
    top: 0,
    left: 0,
};
start.addEventListener("click", startGame);

function pick() {
    position.left += 7
    box.style.left = String(position.left) + 'px';
    if (position.left >= 330){
        position.left = 330
    }
}
function pick1() {
    position.left -= 7
    box.style.left = String(position.left) + 'px';
    if (position.left < 30){
        position.left = 30
    }
  
}
function pick2() {
    position.top -= 7
    box.style.top = String(position.top) + 'px';
    if (position.top < 30){
        position.top = 30
    }
}
function pick3() {
    position.top += 7
    box.style.top = String(position.top) + 'px';
    if (position.top >= 330){
        position.top = 330
    }
}
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 68) {
    pick();
  }
  if (event.keyCode == 65) {
    pick1();
  }
  if (event.keyCode == 87) {
    pick2();
  }
  if (event.keyCode == 83) {
    pick3();
  }
});

function renedBoxEnd() {
  console.log ( boxEnd.style.height = boxEnd.style.width = boxSize + "px")
     box.style.width = "30px"
    boxEnd.style.position = "absolute";
    boxEnd.style.top = getRandom (0, maxTop) + 'px'
    boxEnd.style.left = getRandom (0, maxLeft) + 'px'
    boxEnd.style.backgroundColor = "red";
    game.insertAdjacentElement("afterbegin", boxEnd);
  }

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
  renedBoxEnd()
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

 