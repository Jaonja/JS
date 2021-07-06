/*
let start = document.querySelector("#start");
let game = document.querySelector("#game");
let box = document.createElement("div");
let boxSize = getRandom(30, 100);
let boxSizeOneBox = getRandom (30, 30)
let boxEnd = document.createElement("span");
let gameSpawn = game.getBoundingClientRect ()
let maxTop = gameSpawn.height - boxSize
let maxLeft = gameSpawn.width - boxSize
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
  box.style.height = box.style.width = boxSizeOneBox + "px";
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
*/
pathWidth = 10
wall = 2
outerWall = 2
width = 50
height = 50
delay = 1
x = width/2|0
y = height/2|0
seed = Math.random()*100000|0
wallColor = '#000000'
pathColor = '#808080'

// texts

randomGen = function(seed){
	if(seed===undefined)seed=performance.now()
	return function(){
    seed = (seed * 9301 + 49297) % 233280
		return seed/233280
	}
}

init = function(){
  offset = pathWidth/2+outerWall
  map = []
  canvas = document.querySelector('canvas')
  ctx = canvas.getContext('2d')
  canvas.width = outerWall*2+width*(pathWidth+wall)-wall
  canvas.height = outerWall*2+height*(pathWidth+wall)-wall
  ctx.fillStyle = wallColor
  ctx.fillRect(0,0,canvas.width,canvas.height)
  random = randomGen(seed)
  ctx.strokeStyle = pathColor
  ctx.lineCap = 'square'
  ctx.lineWidth = pathWidth
  ctx.beginPath()
  for(let i=0;i<height*2;i++){
    map[i] = []
    for(let j=0;j<width*2;j++){
      map[i][j] = false
    }
  }
  map[y*2][x*2] = true
  route = [[x,y]]
  ctx.moveTo(x*(pathWidth+wall)+offset,
             y*(pathWidth+wall)+offset)
}
init()

inputWidth = document.getElementById('width')
inputHeight = document.getElementById('height')
inputPathWidth = document.getElementById('pathwidth')
inputWallWidth = document.getElementById('wallwidth')
inputOuterWidth = document.getElementById('outerwidth')
inputPathColor = document.getElementById('pathcolor')
inputWallColor = document.getElementById('wallcolor')
inputSeed = document.getElementById('seed')
buttonRandomSeed = document.getElementById('randomseed')

settings = {
  display: function(){
    inputWidth.value = width
    inputHeight.value = height
    inputPathWidth.value = pathWidth
    inputWallWidth.value = wall
    inputOuterWidth.value = outerWall
    inputPathColor.value = pathColor
    inputWallColor.value = wallColor
    inputSeed.value = seed
  },
  check: function(){
    if(inputWidth.value != width||
       inputHeight.value != height||
       inputPathWidth.value != pathWidth||
       inputWallWidth.value != wall||
       inputOuterWidth.value != outerWall||
       inputPathColor.value != pathColor||
       inputWallColor.value != wallColor||
       inputSeed.value != seed){
      settings.update()
    }
  },
  update: function(){
    clearTimeout(timer)
    width = parseFloat(inputWidth.value)
    height = parseFloat(inputHeight.value)
    pathWidth = parseFloat(inputPathWidth.value)
    wall = parseFloat(inputWallWidth.value)
    outerWall = parseFloat(inputOuterWidth.value)
    pathColor = inputPathColor.value
    wallColor = inputWallColor.value
    seed = parseFloat(inputSeed.value)
    x = width/2|0
    y = height/2|0
    init()
    loop()
  }
}

buttonRandomSeed.addEventListener('click',function(){
  inputSeed.value = Math.random()*100000|0
})

loop = function(){
  x = route[route.length-1][0]|0
  y = route[route.length-1][1]|0

  let directions = [[1,0],[-1,0],[0,1],[0,-1]],
      alternatives = []

  for(let i=0;i<directions.length;i++){
    if(map[(directions[i][1]+y)*2]!=undefined&&
       map[(directions[i][1]+y)*2][(directions[i][0]+x)*2]===false){
      alternatives.push(directions[i])
    }
  }

  if(alternatives.length===0){
    route.pop()
    if(route.length>0){
      ctx.moveTo(route[route.length-1][0]*(pathWidth+wall)+offset,
                 route[route.length-1][1]*(pathWidth+wall)+offset)
      timer = setTimeout(loop,delay)
    }
    return;
  }
  direction = alternatives[random()*alternatives.length|0]
  route.push([direction[0]+x,direction[1]+y])
  ctx.lineTo((direction[0]+x)*(pathWidth+wall)+offset,
             (direction[1]+y)*(pathWidth+wall)+offset)
  map[(direction[1]+y)*2][(direction[0]+x)*2] = true
  map[direction[1]+y*2][direction[0]+x*2] = true
  ctx.stroke()
  timer = setTimeout(loop,delay)
}
settings.display()
loop()
setInterval(settings.check,400)
