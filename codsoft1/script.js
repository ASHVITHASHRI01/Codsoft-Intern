let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    console.log("Button clicked:", value); // Check if button clicks are registered
    if (!isNaN(value)) {
        handleNumber(value);
    } else {
        handleSymbol(value);
    }

    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    console.log("Handle symbol:", symbol); // Check if symbol handling is working
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator == null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal.toString();
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    console.log("Handle math:", symbol); // Check if math operations are handled correctly
    if (buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    console.log("Flush operation:", previousOperator, intBuffer); // Check flush operations
    switch (previousOperator) {
        case '+':
            runningTotal += intBuffer;
            break;
        case '-':
            runningTotal -= intBuffer;
            break;
        case '*':
            runningTotal *= intBuffer;
            break;
        case '/':
            if (intBuffer !== 0) {
                runningTotal /= intBuffer;
            } else {
                buffer = "Error";
                runningTotal = 0;
            }
            break;
    }
}

function handleNumber(numberString) {
    console.log("Handle number:", numberString); // Check number handling
    if (buffer === "0" || buffer === "Error") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    console.log("Initializing calculator"); // Check if initialization happens
    const buttons = document.querySelectorAll('.calc-button');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        });
    });
}

init();
