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



  window.onload = function () {
    let numbers = document.querySelectorAll('.btn-number'),
        operations = document.querySelectorAll('.btn-operation'),
        clears = document.querySelectorAll('.btn-clear'),
        demicial = document.getElementById('btn-decimal'),
        display = document.getElementById('display'),
        consoleCalc = document.getElementById('console-calc'),
        MemoryNewNumber = false,
        MemoryConsole = '',
        MemoryOperation = '',
        MemoryCurrentValue = 0;


    function searchCurrentElem(variable, funName) {
        for (let i = 0; i < variable.length; i++) {
            let currentElem = variable[i];
            currentElem.addEventListener('click', function (e) {
                funName(e.target.textContent);
            });
        }
    }

    searchCurrentElem(numbers, numberPress);
    searchCurrentElem(operations, operationPress);
    searchCurrentElem(clears, clearPress);
    demicial.addEventListener('click', demicialPress);

    function numberPress(symbol) {
        if (MemoryNewNumber) {
            display.value = symbol;
            MemoryNewNumber = false;
        } else {
            if (display.value === '0') {
                display.value = symbol;
            } else {
                display.value += symbol;
            }
        }
    }

    function operationPress(op) {
        let localMemoryCurrentNumber = display.value,
            localMemoryConsole = '';

        if (MemoryNewNumber && MemoryOperation !== '=') {
            display.value = MemoryCurrentValue;
            consoleCalc.value = MemoryConsole;
        } else {

            MemoryNewNumber = true;

            if (MemoryOperation === '+') {
                MemoryCurrentValue += parseFloat(localMemoryCurrentNumber);
            } else if (MemoryOperation === '-') {
                MemoryCurrentValue -= parseFloat(localMemoryCurrentNumber);
            } else if (MemoryOperation === '/') {
                MemoryCurrentValue /= parseFloat(localMemoryCurrentNumber);
            } else if (MemoryOperation === '*') {
                MemoryCurrentValue *= parseFloat(localMemoryCurrentNumber);
            } else {
                MemoryCurrentValue = parseFloat(localMemoryCurrentNumber);
            }

            display.value = MemoryCurrentValue;
            MemoryOperation = op;

        }

        if (MemoryOperation === '=') {
            consoleCalc.value = '';
        } else {
            localMemoryConsole = localMemoryCurrentNumber + ' ' + MemoryOperation + ' ';
            MemoryConsole += localMemoryConsole;
            consoleCalc.value = MemoryConsole;
        }

    }

    function clearPress(currentClearBtn) {
        if (currentClearBtn == 'ce') {
            display.value = '0';
        } else if (currentClearBtn == 'c') {
            display.value = '0';
            consoleCalc.value = '';
            MemoryNewNumber = false;
            MemoryOperation = '';
            MemoryConsole = '';
            MemoryCurrentValue = 0;
        }
    }

    function demicialPress() {
        let localMemoryCurrentNumber = display.value;
        if (MemoryNewNumber) {
            localMemoryCurrentNumber = '0.';
            MemoryNewNumber = false;
        } else {

            if (localMemoryCurrentNumber.indexOf('.') === -1) {
                localMemoryCurrentNumber += '.';
            }

            display.value = localMemoryCurrentNumber;

        }
    }

};
