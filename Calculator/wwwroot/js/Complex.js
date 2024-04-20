function addComplexNumbers() {
    var realPart1 = parseFloat(document.getElementById("realPart1").value);
    var imaginaryPart1 = parseFloat(document.getElementById("imaginaryPart1").value);
    var realPart2 = parseFloat(document.getElementById("realPart2").value);
    var imaginaryPart2 = parseFloat(document.getElementById("imaginaryPart2").value);

    var resultReal = realPart1 + realPart2;
    var resultImaginary = imaginaryPart1 + imaginaryPart2;

    document.getElementById("complexResult").innerText = "Result: " + resultReal + " + " + resultImaginary + "i";
}

function subtractComplexNumbers() {
    var realPart1 = parseFloat(document.getElementById("realPart1").value);
    var imaginaryPart1 = parseFloat(document.getElementById("imaginaryPart1").value);
    var realPart2 = parseFloat(document.getElementById("realPart2").value);
    var imaginaryPart2 = parseFloat(document.getElementById("imaginaryPart2").value);

    var resultReal = realPart1 - realPart2;
    var resultImaginary = imaginaryPart1 - imaginaryPart2;

    document.getElementById("complexResult").innerText = "Result: " + resultReal + " + " + resultImaginary + "i";
}

function multiplyComplexNumbers() {
    var realPart1 = parseFloat(document.getElementById("realPart1").value);
    var imaginaryPart1 = parseFloat(document.getElementById("imaginaryPart1").value);
    var realPart2 = parseFloat(document.getElementById("realPart2").value);
    var imaginaryPart2 = parseFloat(document.getElementById("imaginaryPart2").value);

    var resultReal = (realPart1 * realPart2) - (imaginaryPart1 * imaginaryPart2);
    var resultImaginary = (realPart1 * imaginaryPart2) + (imaginaryPart1 * realPart2);

    document.getElementById("complexResult").innerText = "Result: " + resultReal + " + " + resultImaginary + "i";
}

function divideComplexNumbers() {
    var realPart1 = parseFloat(document.getElementById("realPart1").value);
    var imaginaryPart1 = parseFloat(document.getElementById("imaginaryPart1").value);
    var realPart2 = parseFloat(document.getElementById("realPart2").value);
    var imaginaryPart2 = parseFloat(document.getElementById("imaginaryPart2").value);

    var denominator = (realPart2 * realPart2) + (imaginaryPart2 * imaginaryPart2);
    var resultReal = ((realPart1 * realPart2) + (imaginaryPart1 * imaginaryPart2)) / denominator;
    var resultImaginary = ((imaginaryPart1 * realPart2) - (realPart1 * imaginaryPart2)) / denominator;

    document.getElementById("complexResult").innerText = "Result: " + resultReal + " + " + resultImaginary + "i";
}