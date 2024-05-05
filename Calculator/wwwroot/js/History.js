var historyLog = [];
var Complex = [];

function addToHistory(expression, result) {
    var logEntry = {
        expression: expression,
        result: result
    };
    historyLog.push(logEntry);
    displayHistoryOnPage();
}

function addToHistoryMatrix(operationType, matrixA, matrixB, result) {
    let logEntry = {
        type: operationType,
        matrixA: matrixA,
        matrixB: matrixB,
        result: result
    };
    historyLog.push(logEntry);
    displayHistoryOnPage();
}

function addToHistoryConversion(inputValue, inputFormat, decimalValue, binaryResult, octalResult, hexadecimalResult) {
    let logEntry = {
        inputValue: inputValue,
        inputFormat: inputFormat,
        decimalValue: decimalValue,
        binaryResult: binaryResult,
        octalResult: octalResult,
        hexadecimalResult: hexadecimalResult
    };
    historyLog.push(logEntry);
    displayHistoryOnPage();
}

function addToEquationLog(a, b, c, isQuadratic, solution) {
    var logEntry = {
        a: a,
        b: b,
        c: c,
        isQuadratic: isQuadratic,
        solution: solution
    };
    historyLog.push(logEntry);
    displayHistoryOnPage();
}

function addToConversionLog(inputValue, inputUnit, outputUnit, result) {
    var logEntry = {
        inputValue: inputValue,
        inputUnit: inputUnit,
        outputUnit: outputUnit,
        result: result
    };
    historyLog.push(logEntry);
    displayHistoryOnPage();
}

function addToComplexADDLog(realPart1, imaginaryPart1, realPart2, imaginaryPart2, resultReal, resultImaginary) {
    var logEntry = {
        inputRealValue1: realPart1,
        inputimaginaryValue1: imaginaryPart1,
        inputRealValue2: realPart2,
        inputimaginaryValue2: imaginaryPart2,
        resultReal: resultReal,
        resultImaginary: resultImaginary
    };
    Complex.push(logEntry);
    displayHistoryOnPage();
}

function addToComplexSubstractLog(realPart1, imaginaryPart1, realPart2, imaginaryPart2, resultReal, resultImaginary) {
    var logEntry = {
        inputRealValue1: realPart1,
        inputimaginaryValue1: imaginaryPart1,
        inputRealValue2: realPart2,
        inputimaginaryValue2: imaginaryPart2,
        resultReal: resultReal,
        resultImaginary: resultImaginary
    };
    Complex.push(logEntry);
    displayHistoryOnPage();
}
function addToComplexMultiplyLog(realPart1, imaginaryPart1, realPart2, imaginaryPart2, resultReal, resultImaginary) {
    var logEntry = {
        inputRealValue1: realPart1,
        inputimaginaryValue1: imaginaryPart1,
        inputRealValue2: realPart2,
        inputimaginaryValue2: imaginaryPart2,
        resultReal: resultReal,
        resultImaginary: resultImaginary
    };
    Complex.push(logEntry);
    displayHistoryOnPage();
}
function addToComplexDivideLog(realPart1, imaginaryPart1, realPart2, imaginaryPart2, resultReal, resultImaginary) {
    var logEntry = {
        inputRealValue1: realPart1,
        inputimaginaryValue1: imaginaryPart1,
        inputRealValue2: realPart2,
        inputimaginaryValue2: imaginaryPart2,
        resultReal: resultReal,
        resultImaginary: resultImaginary
    };
    Complex.push(logEntry);
    displayHistoryOnPage();
}


function displayHistory() {
    var historyList = document.getElementById("historyList");
    historyList.innerHTML = ""; 

    historyLog.forEach(function (entry) {
        var listItem = document.createElement("li");
        listItem.textContent = entry.expression + " = " + entry.result;
        historyList.appendChild(listItem);
    });
}


function clearHistory() {
    historyLog = [];
    displayHistory(); 
}


function exportHistory() {
    var allHistory = {
        historyLog: historyLog,
        Complex: Complex
    };

    var jsonData = JSON.stringify(allHistory);
    var filename = "combined_history_log.json";

    var blob = new Blob([jsonData], { type: "application/json" });

    var url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function displayHistoryOnPage() {
    var historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    historyLog.forEach(function (entry) {
        var listItem = document.createElement("li");
        var displayText;
        if (entry.expression !== undefined && entry.result !== undefined) {
            displayText = entry.expression + " = " + entry.result;
        } else if (entry.type !== undefined && entry.matrixA !== undefined && entry.matrixB !== undefined && entry.result !== undefined) {
            displayText = entry.type + " of " + JSON.stringify(entry.matrixA) + " and " + JSON.stringify(entry.matrixB) + " = " + JSON.stringify(entry.result);
        } else if (entry.inputValue !== undefined && entry.inputUnit !== undefined && entry.outputUnit !== undefined && entry.result !== undefined) {
            displayText = entry.inputValue + " " + entry.inputUnit + " = " + entry.result + " " + entry.outputUnit;
        } else if (entry.a !== undefined && entry.b !== undefined && entry.c !== undefined && entry.solution !== undefined) {
            displayText = entry.isQuadratic ? entry.a + "x^2 + " + entry.b + "x + " + entry.c + " = " + entry.solution : entry.a + "x + " + entry.b + " = " + entry.solution;
        } else {
            displayText = "Unknown entry format";
        }
        listItem.textContent = displayText;
        historyList.appendChild(listItem);
    });

    var complexList = document.getElementById("complexList");
    complexList.innerHTML = "";

    Complex.forEach(function (entry) {
        var listItem = document.createElement("li");
        var displayText = "Complex operation: " + entry.resultReal + " + " + entry.resultImaginary + "i";
        listItem.textContent = displayText;
        complexList.appendChild(listItem);
    });
}
