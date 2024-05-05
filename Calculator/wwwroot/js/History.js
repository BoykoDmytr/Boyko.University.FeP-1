var historyLog = [];

function addToHistory(expression, result) {
    var logEntry = {
        expression: expression,
        result: result
    };
    historyLog.push(logEntry);
}

function addToHistoryMatrix(operationType, matrixA, matrixB, result) {
    let logEntry = {
        type: operationType,
        matrixA: matrixA,
        matrixB: matrixB,
        result: result
    };
    historyLog.push(logEntry);
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
        historyLog: historyLog
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
