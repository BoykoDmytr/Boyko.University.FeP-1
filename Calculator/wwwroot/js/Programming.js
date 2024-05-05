function showConversionInterface() {
    document.getElementById("conversionInterface").style.display = "block";
    document.getElementById("operationInterface").style.display = "none";
}

function showOperationInterface() {
    document.getElementById("conversionInterface").style.display = "none";
    document.getElementById("operationInterface").style.display = "block";
}

function convertAndDisplay() {
    var inputValue = document.getElementById("inputValue").value;
    var inputFormat = document.getElementById("inputFormat").value;
    var decimalValue;

    switch (inputFormat) {
        case "decimal":
            decimalValue = parseInt(inputValue);
            break;
        case "binary":
            decimalValue = parseInt(inputValue, 2);
            break;
        case "octal":
            decimalValue = parseInt(inputValue, 8);
            break;
        case "hexadecimal":
            decimalValue = parseInt(inputValue, 16);
            break;
    }

    var binaryResult = decimalValue.toString(2);
    var octalResult = decimalValue.toString(8);
    var hexadecimalResult = decimalValue.toString(16).toUpperCase();

    document.getElementById("decimalResult").value = decimalValue;
    document.getElementById("binaryResult").value = binaryResult;
    document.getElementById("octalResult").value = octalResult;
    document.getElementById("hexadecimalResult").value = hexadecimalResult;

    addToHistoryConversion(inputValue, inputFormat, decimalValue, binaryResult, octalResult, hexadecimalResult);
}

function performOperation() {
    var inputValue = document.getElementById("inputValue").value;
    var inputValue2 = document.getElementById("inputValue2").value;
    var inputFormat = document.getElementById("inputFormat").value;
    var operation = document.getElementById("operation").value;

    var value1, value2;

    switch (inputFormat) {
        case "decimal":
            value1 = parseInt(inputValue);
            value2 = parseInt(inputValue2);
            break;
        case "binary":
            value1 = parseInt(inputValue, 2);
            value2 = parseInt(inputValue2, 2);
            break;
        case "octal":
            value1 = parseInt(inputValue, 8);
            value2 = parseInt(inputValue2, 8);
            break;
        case "hexadecimal":
            value1 = parseInt(inputValue, 16);
            value2 = parseInt(inputValue2, 16);
            break;
    }

    var result;
    switch (operation) {
        case "and":
            result = value1 & value2;
            break;
        case "or":
            result = value1 | value2;
            break;
        case "xor":
            result = value1 ^ value2;
            break;
        case "not":
            result = ~value1;
            break;
    }

    document.getElementById("outputValue").value = result.toString(2);
    addToHistory(inputValue + " " + operation + " " + inputValue2, result);
}