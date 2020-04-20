const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get input from input field.
function getUserNumberInput(){
    return parseInt(userInput.value);  
}

// Generate and write calculation log
function createAndWriteOutput(opertator, resultBeforeCalc, calcNumber){
    const calcDescription =  `${resultBeforeCalc} ${opertator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);  // This is from vendor file
}

// For log data
function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
){
    const logEntry = {
        operation: operationIdentifier,
        prevNumber: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// To calculate the result
function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();

    // To be sure if there is mistake in function calling
    if(
        calculationType !== 'ADD' &&
        calculationType !== 'SUBSTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        enteredNumber === 0  // do not allow number divided by 0 also 
                            // !enteredNumber automatically take falsy the is always 0
    ) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;

    if(calculationType === 'ADD')
    {
        currentResult = currentResult + enteredNumber;
        // currentResult += enteredNumber;
        mathOperator = '+';
    }
    else if(calculationType === 'SUBSTRACT')
    {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    else if(calculationType === 'MULTIPLY')
    {
        currentResult *= enteredNumber;
        mathOperator = '*';
    }
    else if(calculationType === 'DIVIDE')
    {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function substract(){
    calculateResult('SUBSTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);