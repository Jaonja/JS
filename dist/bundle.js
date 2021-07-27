/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calck.js":
/*!*************************!*\
  !*** ./src/js/calck.js ***!
  \*************************/
/***/ (() => {

eval("window.onload = function () {\n  let numbers = document.querySelectorAll(\".btn-number\"),\n      operations = document.querySelectorAll(\".btn-operation\"),\n      clears = document.querySelectorAll(\".btn-clear\"),\n      demicial = document.getElementById(\"btn-decimal\"),\n      display = document.getElementById(\"display\"),\n      consoleCalc = document.getElementById(\"console-calc\"),\n      MemoryNewNumber = false,\n      MemoryConsole = \"\",\n      MemoryOperation = \"\",\n      MemoryCurrentValue = 0;\n\n  function searchCurrentElem(variable, funName) {\n    for (let i = 0; i < variable.length; i++) {\n      let currentElem = variable[i];\n      currentElem.addEventListener(\"click\", function (e) {\n        funName(e.target.textContent);\n      });\n    }\n  }\n\n  searchCurrentElem(numbers, numberPress);\n  searchCurrentElem(operations, operationPress);\n  searchCurrentElem(clears, clearPress);\n  demicial.addEventListener(\"click\", demicialPress);\n\n  function numberPress(symbol) {\n    if (MemoryNewNumber) {\n      display.value = symbol;\n      MemoryNewNumber = false;\n    } else {\n      if (display.value === \"0\") {\n        display.value = symbol;\n      } else {\n        display.value += symbol;\n      }\n    }\n  }\n\n  function operationPress(op) {\n    let localMemoryCurrentNumber = display.value,\n        localMemoryConsole = \"\";\n\n    if (MemoryNewNumber && MemoryOperation !== \"=\") {\n      display.value = MemoryCurrentValue;\n      consoleCalc.value = MemoryConsole;\n    } else {\n      MemoryNewNumber = true;\n\n      if (MemoryOperation === \"+\") {\n        MemoryCurrentValue += parseFloat(localMemoryCurrentNumber);\n      } else if (MemoryOperation === \"-\") {\n        MemoryCurrentValue -= parseFloat(localMemoryCurrentNumber);\n      } else if (MemoryOperation === \"/\") {\n        MemoryCurrentValue /= parseFloat(localMemoryCurrentNumber);\n      } else if (MemoryOperation === \"*\") {\n        MemoryCurrentValue *= parseFloat(localMemoryCurrentNumber);\n      } else {\n        MemoryCurrentValue = parseFloat(localMemoryCurrentNumber);\n      }\n\n      display.value = MemoryCurrentValue;\n      MemoryOperation = op;\n    }\n\n    if (MemoryOperation === \"=\") {\n      consoleCalc.value = \"\";\n    } else {\n      localMemoryConsole = localMemoryCurrentNumber + \" \" + MemoryOperation + \" \";\n      MemoryConsole += localMemoryConsole;\n      consoleCalc.value = MemoryConsole;\n    }\n  }\n\n  function clearPress(currentClearBtn) {\n    if (currentClearBtn == \"ce\") {\n      display.value = \"0\";\n    } else if (currentClearBtn == \"c\") {\n      display.value = \"0\";\n      consoleCalc.value = \"\";\n      MemoryNewNumber = false;\n      MemoryOperation = \"\";\n      MemoryConsole = \"\";\n      MemoryCurrentValue = 0;\n    }\n  }\n\n  function demicialPress() {\n    let localMemoryCurrentNumber = display.value;\n\n    if (MemoryNewNumber) {\n      localMemoryCurrentNumber = \"0.\";\n      MemoryNewNumber = false;\n    } else {\n      if (localMemoryCurrentNumber.indexOf(\".\") === -1) {\n        localMemoryCurrentNumber += \".\";\n      }\n\n      display.value = localMemoryCurrentNumber;\n    }\n  }\n};\n\n//# sourceURL=webpack://webpa/./src/js/calck.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calck */ \"./src/js/calck.js\");\n/* harmony import */ var _calck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_calck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather */ \"./src/js/weather.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_weather__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _laberint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./laberint */ \"./src/js/laberint.js\");\n/* harmony import */ var _laberint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_laberint__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://webpa/./src/js/index.js?");

/***/ }),

/***/ "./src/js/laberint.js":
/*!****************************!*\
  !*** ./src/js/laberint.js ***!
  \****************************/
/***/ (() => {

eval("pathWidth = 10;\nwall = 2;\nouterWall = 2;\nwidth = 50;\nheight = 50;\ndelay = 1;\nx = width / 2 | 0;\ny = height / 2 | 0;\nseed = Math.random() * 100000 | 0;\nwallColor = \"blue\";\npathColor = \"yellow\";\n\nrandomGen = function (seed) {\n  if (seed === undefined) seed = performance.now();\n  return function () {\n    seed = (seed * 9301 + 49297) % 233280;\n    return seed / 233280;\n  };\n};\n\ninit = function () {\n  offset = pathWidth / 2 + outerWall;\n  map = [];\n  canvas = document.querySelector(\"canvas\");\n  ctx = canvas.getContext(\"2d\");\n  canvas.width = outerWall * 2 + width * (pathWidth + wall) - wall;\n  canvas.height = outerWall * 2 + height * (pathWidth + wall) - wall;\n  ctx.fillStyle = wallColor;\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  random = randomGen(seed);\n  ctx.strokeStyle = pathColor;\n  ctx.lineCap = \"square\";\n  ctx.lineWidth = pathWidth;\n  ctx.beginPath();\n\n  for (let i = 0; i < height * 2; i++) {\n    map[i] = [];\n\n    for (let j = 0; j < width * 2; j++) {\n      map[i][j] = false;\n    }\n  }\n\n  map[y * 2][x * 2] = true;\n  route = [[x, y]];\n  ctx.moveTo(x * (pathWidth + wall) + offset, y * (pathWidth + wall) + offset);\n};\n\ninit();\ninputWidth = document.getElementById(\"width\");\ninputHeight = document.getElementById(\"height\");\ninputPathWidth = document.getElementById(\"pathwidth\");\ninputWallWidth = document.getElementById(\"wallwidth\");\ninputOuterWidth = document.getElementById(\"outerwidth\");\ninputPathColor = document.getElementById(\"pathcolor\");\ninputWallColor = document.getElementById(\"wallcolor\");\ninputSeed = document.getElementById(\"seed\");\nbuttonRandomSeed = document.getElementById(\"randomseed\");\nsettings = {\n  display: function () {\n    inputWidth.value = width;\n    inputHeight.value = height;\n    inputPathWidth.value = pathWidth;\n    inputWallWidth.value = wall;\n    inputOuterWidth.value = outerWall;\n    inputPathColor.value = pathColor;\n    inputWallColor.value = wallColor;\n    inputSeed.value = seed;\n  },\n  check: function () {\n    if (inputWidth.value != width || inputHeight.value != height || inputPathWidth.value != pathWidth || inputWallWidth.value != wall || inputOuterWidth.value != outerWall || inputPathColor.value != pathColor || inputWallColor.value != wallColor || inputSeed.value != seed) {\n      settings.update();\n    }\n  },\n  update: function () {\n    clearTimeout(timer);\n    width = parseFloat(inputWidth.value);\n    height = parseFloat(inputHeight.value);\n    pathWidth = parseFloat(inputPathWidth.value);\n    wall = parseFloat(inputWallWidth.value);\n    outerWall = parseFloat(inputOuterWidth.value);\n    pathColor = inputPathColor.value;\n    wallColor = inputWallColor.value;\n    seed = parseFloat(inputSeed.value);\n    x = width / 2 | 0;\n    y = height / 2 | 0;\n    init();\n    loop();\n  }\n};\nbuttonRandomSeed.addEventListener(\"click\", function () {\n  inputSeed.value = Math.random() * 100000 | 0;\n});\n\nloop = function () {\n  x = route[route.length - 1][0] | 0;\n  y = route[route.length - 1][1] | 0;\n  let directions = [[2, 0], [-2, 0], [0, 2], [0, -2]],\n      alternatives = [];\n\n  for (let i = 0; i < directions.length; i++) {\n    if (map[(directions[i][1] + y) * 2] != undefined && map[(directions[i][1] + y) * 2][(directions[i][0] + x) * 2] === false) {\n      alternatives.push(directions[i]);\n    }\n  }\n\n  if (alternatives.length === 0) {\n    route.pop();\n\n    if (route.length > 0) {\n      ctx.moveTo(route[route.length - 1][0] * (pathWidth + wall) + offset, route[route.length - 1][1] * (pathWidth + wall) + offset);\n      timer = setTimeout(loop, delay);\n    }\n\n    return;\n  }\n\n  direction = alternatives[random() * alternatives.length | 0];\n  route.push([direction[0] + x, direction[1] + y]);\n  ctx.lineTo((direction[0] + x) * (pathWidth + wall) + offset, (direction[1] + y) * (pathWidth + wall) + offset);\n  map[(direction[1] + y) * 2][(direction[0] + x) * 2] = true;\n  map[direction[1] + y * 2][direction[0] + x * 2] = true;\n  ctx.stroke();\n  timer = setTimeout(loop, delay);\n};\n\nsettings.display();\nloop();\nsetInterval(settings.check, 400);\n\n//# sourceURL=webpack://webpa/./src/js/laberint.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("let count = 0;\nlet width;\nconst images = document.querySelectorAll(\".sliders img\");\nconst sliderLine = document.querySelector(\".slider-line\");\nconst bit = document.querySelectorAll(\".sliders img\");\n\nfunction init() {\n  width = document.querySelector(\".sliders\").offsetWidth;\n  sliderLine.style.width = width * images.length + \"px\";\n  rollSlider();\n}\n\ninit();\n\nfunction rollSlider() {\n  sliderLine.style.transform = \"translate(-\" + count * width + \"px)\";\n}\n\nlet balls = document.querySelectorAll(\".ball\");\nballs.forEach(ball => {\n  ball.addEventListener(\"click\", function (e) {\n    count = e.target.dataset.class;\n\n    for (let i = 0; i < balls.length; i++) {\n      balls[i].classList.remove(\"color\");\n    }\n\n    if (this.dataset.class = count) {\n      this.classList.add(\"color\");\n    }\n\n    rollSlider();\n  });\n});\ndocument.querySelector(\".slider-next\").addEventListener(\"click\", function () {\n  count++;\n\n  if (count >= images.length) {\n    count = 0;\n  }\n\n  if (count === 7) {\n    count = 0;\n  }\n\n  rollSlider();\n});\ndocument.querySelector(\".slider-prev\").addEventListener(\"click\", function () {\n  count--;\n\n  if (count < 0) {\n    count = images.length - 1;\n  }\n\n  if (count > 7) {\n    count = 0;\n  }\n\n  rollSlider();\n});\n\n//# sourceURL=webpack://webpa/./src/js/slider.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ (() => {

eval("let city = \"Минск\";\nlet inputName = document.querySelector(\".input\");\nlet textInfo = document.querySelector(\"#none\");\n\nfunction dispayNone() {\n  textInfo.classList.add(\"hide\");\n}\n\nlet button = document.querySelector(\"#button\").addEventListener(\"click\", function () {\n  dispayNone();\n\n  if (inputName.value === \"\") {\n    inputName.classList.add(\"error\");\n    alert(\"Введите данные в красный квадрат о городе\");\n\n    if (inputName.value === !\"\") {\n      inputName.classList.remove(\"error\");\n    }\n  }\n});\n\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction sec() {\n  textInfo.style.color = \"#\" + getRandomInt(0, 9) + getRandomInt(0, 9) + getRandomInt(0, 9);\n}\n\nsetInterval(sec, 1);\nlet wather = document.querySelector(\".weather\");\n\nfunction randomColor() {\n  wather.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;\n}\n\nfunction getRandom(min, max) {\n  return Math.ceil(Math.random() * (max - min) + min);\n}\n\nfunction valueGet() {\n  city = inputName.value;\n}\n\nlet apiKey = \"6c273cbb2593e6efce1a4c12e3db2db5\";\n\nfunction fetchData() {\n  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`).then(function (resp) {\n    return resp.json();\n  }).then(function (data) {\n    let cityName = document.querySelector(\".City\");\n    cityName.innerHTML = data.name;\n\n    if (cityName.textContent === \"undefined\") {\n      cityName.textContent = \"Город не найден\";\n    }\n\n    let temperature = document.querySelector(\".temperature\");\n    temperature.innerHTML = Math.floor(data.main.temp - 273) + \"&deg\";\n    let disclaimer = document.querySelector(\".disclaimer\");\n    disclaimer.textContent = data.weather[0][\"description\"];\n    let ico = document.querySelector(\".ico\");\n    ico.innerHTML = `<img src=\"https://openweathermap.org/img/wn/${data.weather[0][\"icon\"]}@2x.png\">`;\n  }).catch(function () {});\n}\n\nfunction pDispayNone() {\n  if (cityName.textContent === \"undefined\") temperature.classList.add(\"hide\");\n}\n\ninputName.addEventListener(\"change\", () => {\n  valueGet();\n  fetchData();\n  randomColor();\n  dispayNone();\n});\n\nwather.onmousedown = function (event) {\n  let shiftX = event.clientX - wather.getBoundingClientRect().left;\n  let shiftY = event.clientY - wather.getBoundingClientRect().top;\n  wather.style.position = \"absolute\";\n  wather.style.zIndex = 1000;\n  document.body.append(wather);\n  moveAt(event.pageX, event.pageY);\n\n  function moveAt(pageX, pageY) {\n    wather.style.left = pageX - shiftX + \"px\";\n    wather.style.top = pageY - shiftY + \"px\";\n  }\n\n  function onMouseMove(event) {\n    moveAt(event.pageX, event.pageY);\n  }\n\n  document.addEventListener(\"mousemove\", onMouseMove);\n\n  wather.onmouseup = function () {\n    document.removeEventListener(\"mousemove\", onMouseMove);\n    wather.onmouseup = null;\n  };\n};\n\nwather.ondragstart = function () {\n  return false;\n};\n\n//# sourceURL=webpack://webpa/./src/js/weather.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpa/./src/styles/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;