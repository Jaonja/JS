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
//calck


pathWidth = 10;
wall = 2;

outerWall = 2;
width = 50;
height = 50;
delay = 1;
x = (width / 2) | 0;
y = (height / 2) | 0;
seed = (Math.random() * 100000) | 0;
wallColor = "blue";
pathColor = "yellow";

randomGen = function (seed) {
  if (seed === undefined) seed = performance.now();
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
};

init = function () {
  offset = pathWidth / 2 + outerWall;
  map = [];
  canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = outerWall * 2 + width * (pathWidth + wall) - wall;
  canvas.height = outerWall * 2 + height * (pathWidth + wall) - wall;
  ctx.fillStyle = wallColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  random = randomGen(seed);
  ctx.strokeStyle = pathColor;
  ctx.lineCap = "square";
  ctx.lineWidth = pathWidth;
  ctx.beginPath();
  for (let i = 0; i < height * 2; i++) {
    map[i] = [];
    for (let j = 0; j < width * 2; j++) {
      map[i][j] = false;
    }
  }
  map[y * 2][x * 2] = true;
  route = [[x, y]];
  ctx.moveTo(x * (pathWidth + wall) + offset, y * (pathWidth + wall) + offset);
};
init();

inputWidth = document.getElementById("width");
inputHeight = document.getElementById("height");
inputPathWidth = document.getElementById("pathwidth");
inputWallWidth = document.getElementById("wallwidth");
inputOuterWidth = document.getElementById("outerwidth");
inputPathColor = document.getElementById("pathcolor");
inputWallColor = document.getElementById("wallcolor");
inputSeed = document.getElementById("seed");
buttonRandomSeed = document.getElementById("randomseed");

settings = {
  display: function () {
    inputWidth.value = width;
    inputHeight.value = height;
    inputPathWidth.value = pathWidth;
    inputWallWidth.value = wall;
    inputOuterWidth.value = outerWall;
    inputPathColor.value = pathColor;
    inputWallColor.value = wallColor;
    inputSeed.value = seed;
  },
  check: function () {
    if (inputWidth.value != width || inputHeight.value != height || inputPathWidth.value != pathWidth || inputWallWidth.value != wall || inputOuterWidth.value != outerWall || inputPathColor.value != pathColor || inputWallColor.value != wallColor || inputSeed.value != seed) {
      settings.update();
    }
  },
  update: function () {
    clearTimeout(timer);
    width = parseFloat(inputWidth.value);
    height = parseFloat(inputHeight.value);
    pathWidth = parseFloat(inputPathWidth.value);
    wall = parseFloat(inputWallWidth.value);
    outerWall = parseFloat(inputOuterWidth.value);
    pathColor = inputPathColor.value;
    wallColor = inputWallColor.value;
    seed = parseFloat(inputSeed.value);
    x = (width / 2) | 0;
    y = (height / 2) | 0;
    init();
    loop();
  },
};

buttonRandomSeed.addEventListener("click", function () {
  inputSeed.value = (Math.random() * 100000) | 0;
});

loop = function () {
  x = route[route.length - 1][0] | 0;
  y = route[route.length - 1][1] | 0;

  let directions = [
      [2, 0],
      [-2, 0],
      [0, 2],
      [0, -2],
    ],
    alternatives = [];


  for (let i = 0; i < directions.length; i++) {
    if (map[(directions[i][1] + y) * 2] != undefined && map[(directions[i][1] + y) * 2][(directions[i][0] + x) * 2] === false) {
      alternatives.push(directions[i]);
    }
  }

  if (alternatives.length === 0) {
    route.pop();
    if (route.length > 0) {
      ctx.moveTo(route[route.length - 1][0] * (pathWidth + wall) + offset, route[route.length - 1][1] * (pathWidth + wall) + offset);
      timer = setTimeout(loop, delay);
    }
    return;
  }
  direction = alternatives[(random() * alternatives.length) | 0];
  route.push([direction[0] + x, direction[1] + y]);
  ctx.lineTo((direction[0] + x) * (pathWidth + wall) + offset, (direction[1] + y) * (pathWidth + wall) + offset);
  map[(direction[1] + y) * 2][(direction[0] + x) * 2] = true;
  map[direction[1] + y * 2][direction[0] + x * 2] = true;
  ctx.stroke();
  timer = setTimeout(loop, delay);
};
settings.display();
loop();
setInterval(settings.check, 400);
// laberint


window.onload = function () {
    let numbers = document.querySelectorAll(".btn-number"),
      operations = document.querySelectorAll(".btn-operation"),
      clears = document.querySelectorAll(".btn-clear"),
      demicial = document.getElementById("btn-decimal"),
      display = document.getElementById("display"),
      consoleCalc = document.getElementById("console-calc"),
      MemoryNewNumber = false,
      MemoryConsole = "",
      MemoryOperation = "",
      MemoryCurrentValue = 0;
  
    function searchCurrentElem(variable, funName) {
      for (let i = 0; i < variable.length; i++) {
        let currentElem = variable[i];
        currentElem.addEventListener("click", function (e) {
          funName(e.target.textContent);
        });
      }
    }
  
    searchCurrentElem(numbers, numberPress);
    searchCurrentElem(operations, operationPress);
    searchCurrentElem(clears, clearPress);
    demicial.addEventListener("click", demicialPress);
  
    function numberPress(symbol) {
      if (MemoryNewNumber) {
        display.value = symbol;
        MemoryNewNumber = false;
      } else {
        if (display.value === "0") {
          display.value = symbol;
        } else {
          display.value += symbol;
        }
      }
    }
  
    function operationPress(op) {
      let localMemoryCurrentNumber = display.value,
        localMemoryConsole = "";
  
      if (MemoryNewNumber && MemoryOperation !== "=") {
        display.value = MemoryCurrentValue;
        consoleCalc.value = MemoryConsole;
      } else {
        MemoryNewNumber = true;
  
        if (MemoryOperation === "+") {
          MemoryCurrentValue += parseFloat(localMemoryCurrentNumber);
        } else if (MemoryOperation === "-") {
          MemoryCurrentValue -= parseFloat(localMemoryCurrentNumber);
        } else if (MemoryOperation === "/") {
          MemoryCurrentValue /= parseFloat(localMemoryCurrentNumber);
        } else if (MemoryOperation === "*") {
          MemoryCurrentValue *= parseFloat(localMemoryCurrentNumber);
        } else {
          MemoryCurrentValue = parseFloat(localMemoryCurrentNumber);
        }
  
        display.value = MemoryCurrentValue;
        MemoryOperation = op;
      }
  
      if (MemoryOperation === "=") {
        consoleCalc.value = "";
      } else {
        localMemoryConsole = localMemoryCurrentNumber + " " + MemoryOperation + " ";
        MemoryConsole += localMemoryConsole;
        consoleCalc.value = MemoryConsole;
      }
    }
  
    function clearPress(currentClearBtn) {
      if (currentClearBtn == "ce") {
        display.value = "0";
      } else if (currentClearBtn == "c") {
        display.value = "0";
        consoleCalc.value = "";
        MemoryNewNumber = false;
        MemoryOperation = "";
        MemoryConsole = "";
        MemoryCurrentValue = 0;
      }
    }
  
    function demicialPress() {
      let localMemoryCurrentNumber = display.value;
      if (MemoryNewNumber) {
        localMemoryCurrentNumber = "0.";
        MemoryNewNumber = false;
      } else {
        if (localMemoryCurrentNumber.indexOf(".") === -1) {
          localMemoryCurrentNumber += ".";
        }
  
        display.value = localMemoryCurrentNumber;
      }
    }
  };
// calck

let city = "Минск";
let inputName = document.querySelector(".input");
let textInfo = document.querySelector("#none");

function dispayNone() {
  textInfo.classList.add("hide");
}
let button = document.querySelector("#button").addEventListener("click", function () {
  dispayNone();
  if (inputName.value === "") {
    inputName.classList.add("error");
    alert("Введите данные в красный квадрат о городе");
    if (inputName.value === !"") {
      inputName.classList.remove("error");
    }
  }
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sec() {
  textInfo.style.color = "#" + getRandomInt(0, 9) + getRandomInt(0, 9) + getRandomInt(0, 9);
}

setInterval(sec, 1);

let wather = document.querySelector(".weather");

function randomColor() {
  wather.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function valueGet() {
  city = inputName.value;
}

let apiKey = "6c273cbb2593e6efce1a4c12e3db2db5";
function fetchData() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let cityName = document.querySelector(".City");
      cityName.innerHTML = data.name;
      if (cityName.textContent === "undefined") {
        cityName.textContent = "Город не найден";
      }

      let temperature = document.querySelector(".temperature");
      temperature.innerHTML = Math.floor(data.main.temp - 273) + "&deg";

      let disclaimer = document.querySelector(".disclaimer");
      disclaimer.textContent = data.weather[0]["description"];

      let ico = document.querySelector(".ico");
      ico.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(function () {});
}
function pDispayNone() {
  if (cityName.textContent === "undefined") temperature.classList.add("hide");
}
inputName.addEventListener("change", () => {
  valueGet();
  fetchData();
  randomColor();
  dispayNone();
});

wather.onmousedown = function (event) {
  let shiftX = event.clientX - wather.getBoundingClientRect().left;
  let shiftY = event.clientY - wather.getBoundingClientRect().top;

  wather.style.position = "absolute";
  wather.style.zIndex = 1000;
  document.body.append(wather);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    wather.style.left = pageX - shiftX + "px";
    wather.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  wather.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    wather.onmouseup = null;
  };
};

wather.ondragstart = function () {
  return false;
};
//pogoda