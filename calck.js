
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
