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
}
