const userInput = document.getElementById("input-number");

const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentCalculationOutput = document.getElementById("current-calculation");
const currentResultOutput = document.getElementById("current-result");

function outputResult(textDescription, result) {
    currentCalculationOutput.textContent = textDescription;
    currentResultOutput.textContent = result;
}

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
   let calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription);
}

function writeToLog (  
    operatorIdentifier,
    prevResult, 
    operationNumber, 
    newResult,
) {
    const logEntry = {
        operation: operatorIdentifier,
        previousResult: prevResult,
        inputtedNumber: operationNumber,
        Result: newResult
    }

    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculationActions(calculationType) {
    const enteredNumber = getUserInput();

    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
     ) {
         return;
     }


    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } 
    else if (calculationType  === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    }
    else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(initialResult, mathOperator, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculationActions('ADD');
}

function subtract() {
    calculationActions('SUBTRACT');
}

function multiply() {
    calculationActions('MULTIPLY');
}

function divide() {
    calculationActions('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




