﻿function appendToExpression(value) {
    var expressionField = document.getElementById('expression');
    expressionField.value += value;
}

function clearExpression() {
    var expressionField = document.getElementById('expression');
    expressionField.value = '';
}

function toggleTab(tabName) {
    var tabs = ['graph', 'calculator', 'equationSolver', 'unitConverter', 'matrixCalculator'];

    for (var i = 0; i < tabs.length; i++) {
        var tab = document.getElementById(tabs[i]);
        if (tabs[i] === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
}


//Функції для побудови графіків

function addToExpression(value) {
    var expressionField = document.getElementById('mathExpression');
    expressionField.value += value;
}

function clearExpression() {
    var expressionField = document.getElementById('mathExpression');
    expressionField.value = '';
}

function plotGraph() {
    var expression = document.getElementById('mathExpression').value;

    if (expression.trim() === "") {
        alert("Please enter a valid math expression.");
        return;
    }

    try {
        var parsedExpression = math.parse(expression);
    } catch (error) {
        alert("Error parsing the expression.");
        return;
    }

    var hasX = parsedExpression.filter(node => node.name === 'x').length > 0;
    var hasY = parsedExpression.filter(node => node.name === 'y').length > 0;

    var xValues = [];
    var yValuesX = [];
    var yValuesY = [];

    for (var i = -20; i <= 20; i += 0.1) {
        xValues.push(i);
    }

    for (var i = 0; i < xValues.length; i++) {
        try {
            var resultX = hasX ? parsedExpression.evaluate({ x: xValues[i] }) : 0;
            var resultY = hasY ? parsedExpression.evaluate({ y: xValues[i] }) : 0;
            yValuesX.push(resultX);
            yValuesY.push(resultY);
        } catch (error) {
            alert("Error evaluating the expression.");
            return;
        }
    }

    var traces = [];

    if (hasX) {
        traces.push({
            x: xValues,
            y: yValuesX,
            type: 'scatter',
            mode: 'lines',
            name: 'Graph X'
        });
    }

    if (hasY) {
        traces.push({
            x: yValuesY,
            y: xValues,
            type: 'scatter',
            mode: 'lines',
            name: 'Graph Y'
        });
    }

    var layout = {
        title: 'Math Expression Plot',
        xaxis: { title: 'X-axis', range: [-40, 40] },
        yaxis: { title: 'Y-axis', range: [-40, 40] }
    };

    Plotly.newPlot('plot', traces, layout);
}




//Функція для звичайного калькулятора
function calculate() {
    var expression = document.getElementById('expression').value;

    try {
        var result = math.evaluate(expression);
        document.getElementById('calculatorResult').textContent = "Result: " + result;
    } catch (error) {
        alert("Error evaluating the expression.");
    }

    if (isNaN(num1)) {
        alert("Please enter a valid number for Number 1.");
        return;
    }

    var result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        case 'root':
            result = Math.sqrt(num1);
            break;
        case 'percentage':
            result = (num1 * num2) / 100;
            break;
        case 'sin':
            result = Math.sin(num1);
            break;
        case 'cos':
            result = Math.cos(num1);
            break;
        case 'tan':
            result = Math.tan(num1);
            break;
        case 'log':
            result = Math.log10(num1);
            break;
        default:
            alert("Invalid operation selected.");
            return;
    }

    document.getElementById('calculatorResult').innerHTML = "Result: " + result;
}




//Функції для розв'язування рівнянь з поясненнями
function addToExpression(value) {
    var equationInput = document.getElementById('equationInput');
    equationInput.value += value;
}

function clearExpression() {
    var equationInput = document.getElementById('equationInput');
    equationInput.value = '';
}

function toggleThirdField() {
    var cField = document.getElementById('cField');
    cField.style.display = document.getElementById('includeC').checked ? 'block' : 'none';
}

function solveEquation() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var isQuadratic = document.getElementById('includeC').checked;

    try {
        var result;
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Coefficients a and b must be numbers.');
        }
        if (isQuadratic && isNaN(c)) {
            throw new Error('Coefficient c must be provided for quadratic equation.');
        }
        if (isQuadratic) {
            result = solveQuadraticEquation(a, b, c);
        } else {
            result = solveLinearEquation(a, b);
        }

        clearSteps();

        result.forEach(function (step) {
            showStepExplanation(step);
        });

        var solution = result[result.length - 1];


    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}

function solveLinearEquation(a, b) {
    var steps = [];
    steps.push('Step 1: Rearrange the equation if necessary to isolate the variable term.');
    steps.push('Step 2: Solve for x: x = -b / a');
    var solution = -b / a;
    steps.push('Solution: x = ' + solution);
    return steps;
}

function solveQuadraticEquation(a, b, c) {
    var steps = [];
    steps.push('Step 1: Rewrite the quadratic equation in the standard form ax^2 + bx + c = 0.');
    steps.push('Step 2: Calculate the discriminant D = b^2 - 4ac.');
    steps.push('Step 3: Determine the nature of roots based on the value of the discriminant: ');
    steps.push('   1. If D > 0, the equation has two distinct real roots.');
    steps.push('   2. If D = 0, the equation has one real root (a repeated root).');
    steps.push('   3. If D < 0, the equation has two complex roots.');
    var discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        steps.push('Step 4: Apply the quadratic formula to find the roots: ');
        steps.push('   1. x1 = (-b + √D) / (2a)');
        steps.push('   2. x2 = (-b - √D) / (2a)');
        steps.push('Root 1: x = ' + x1);
        steps.push('Root 2: x = ' + x2);
    } else if (discriminant === 0) {
        var x = -b / (2 * a);
        steps.push('Step 4: Apply the quadratic formula to find the repeated root: x = -b / (2a)');
        steps.push('Root: x = ' + x);
    } else {
        steps.push('Step 4: Since the discriminant is negative, the equation has no real roots.');
    }
    return steps;
}

function clearSteps() {
    var stepsDiv = document.getElementById('steps');
    stepsDiv.innerHTML = '';
}

function showStepExplanation(step) {
    var stepsDiv = document.getElementById('steps');

    var stepElement = document.createElement('p');
    stepElement.textContent = step;

    stepsDiv.appendChild(stepElement);
}





//Функції для конвертації різних одиниць
function convertUnits() {
    var inputValue = parseFloat(document.getElementById('unitInput').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number for the input value.");
        return;
    }

    var result = performConversion(inputValue, inputUnit, outputUnit);

    document.getElementById('conversionResult').innerHTML = "Result: " + result + " " + outputUnit;
}

function updateOutputUnits() {
    var inputUnit = document.getElementById('inputUnit').value;
    var outputUnitSelect = document.getElementById('outputUnit');
    outputUnitSelect.innerHTML = "";

    var outputUnits = [];

    switch (inputUnit) {
        case 'meter':
            outputUnits = ['centimeter', 'millimeter'];
            break;
        case 'centimeter':
            outputUnits = ['meter', 'millimeter'];
            break;
        case 'millimeter':
            outputUnits = ['meter', 'centimeter'];
            break;
        case 'kilogram':
            outputUnits = ['gram', 'milligram', 'ton'];
            break;
        case 'gram':
            outputUnits = ['kilogram', 'milligram', 'ton'];
            break;
        case 'milligram':
            outputUnits = ['kilogram', 'gram', 'ton'];
            break;
        case 'ton':
            outputUnits = ['kilogram', 'gram', 'milligram'];
            break;
        case 'second':
            outputUnits = ['minute', 'hour'];
            break;
        case 'minute':
            outputUnits = ['second', 'hour'];
            break;
        case 'hour':
            outputUnits = ['second', 'minute'];
            break;
        case 'squareMeter':
            outputUnits = ['squareCentimeter', 'hectare'];
            break;
        case 'squareCentimeter':
            outputUnits = ['squareMeter', 'hectare'];
            break;
        case 'hectare':
            outputUnits = ['squareMeter', 'squareCentimeter'];
            break;
        case 'liter':
            outputUnits = ['milliliter', 'cubicMeter'];
            break;
        case 'milliliter':
            outputUnits = ['liter', 'cubicMeter'];
            break;
        case 'cubicMeter':
            outputUnits = ['liter', 'milliliter'];
            break;
    }

    outputUnits.forEach(function (unit) {
        var option = document.createElement('option');
        option.value = unit;
        option.text = unit;
        outputUnitSelect.appendChild(option);
    });
}

function performConversion(value, inputUnit, outputUnit) {
    if (isNaN(value)) {
        alert("Please enter a valid number for the input value.");
        return;
    }

    // Конвертація одиниць вимірювання довжин
    if (inputUnit === 'meter' && outputUnit === 'centimeter') {
        return value * 100;
    } else if (inputUnit === 'meter' && outputUnit === 'millimeter') {
        return value * 1000;
    } else if (inputUnit === 'centimeter' && outputUnit === 'meter') {
        return value / 100;
    } else if (inputUnit === 'centimeter' && outputUnit === 'millimeter') {
        return value * 10;
    } else if (inputUnit === 'millimeter' && outputUnit === 'meter') {
        return value / 1000;
    } else if (inputUnit === 'millimeter' && outputUnit === 'centimeter') {
        return value / 10;

        // Конвертація одиниць вимірювання ваги
    } else if (inputUnit === 'kilogram' && outputUnit === 'gram') {
        return value * 1000;
    } else if (inputUnit === 'kilogram' && outputUnit === 'milligram') {
        return value * 1000000;
    } else if (inputUnit === 'kilogram' && outputUnit === 'ton') {
        return value / 1000;
    } else if (inputUnit === 'gram' && outputUnit === 'kilogram') {
        return value / 1000;
    } else if (inputUnit === 'gram' && outputUnit === 'milligram') {
        return value * 1000;
    } else if (inputUnit === 'gram' && outputUnit === 'ton') {
        return value / 1000000;
    } else if (inputUnit === 'milligram' && outputUnit === 'kilogram') {
        return value / 1000000;
    } else if (inputUnit === 'milligram' && outputUnit === 'gram') {
        return value / 1000;
    } else if (inputUnit === 'milligram' && outputUnit === 'ton') {
        return value / 1000000000;
    } else if (inputUnit === 'ton' && outputUnit === 'kilogram') {
        return value * 1000;
    } else if (inputUnit === 'ton' && outputUnit === 'gram') {
        return value * 1000000;
    } else if (inputUnit === 'ton' && outputUnit === 'milligram') {
        return value * 1000000000;

        // Конвертація одиниць вимірювання часу
    } else if (inputUnit === 'second' && outputUnit === 'minute') {
        return value / 60;
    } else if (inputUnit === 'second' && outputUnit === 'hour') {
        return value / 3600;
    } else if (inputUnit === 'minute' && outputUnit === 'second') {
        return value * 60;
    } else if (inputUnit === 'minute' && outputUnit === 'hour') {
        return value / 60;
    } else if (inputUnit === 'hour' && outputUnit === 'second') {
        return value * 3600;
    } else if (inputUnit === 'hour' && outputUnit === 'minute') {
        return value * 60;

        // Конвертація одиниць вимірювання площі
    } else if (inputUnit === 'squareMeter' && outputUnit === 'squareCentimeter') {
        return value * 10000;
    } else if (inputUnit === 'squareMeter' && outputUnit === 'hectare') {
        return value / 10000;
    } else if (inputUnit === 'squareCentimeter' && outputUnit === 'squareMeter') {
        return value / 10000;
    } else if (inputUnit === 'squareCentimeter' && outputUnit === 'hectare') {
        return value / 100000000;
    } else if (inputUnit === 'hectare' && outputUnit === 'squareMeter') {
        return value * 10000;
    } else if (inputUnit === 'hectare' && outputUnit === 'squareCentimeter') {
        return value * 100000000;

        // Конвертація одиниць вимірювання об'єму
    } else if (inputUnit === 'liter' && outputUnit === 'milliliter') {
        return value * 1000;
    } else if (inputUnit === 'liter' && outputUnit === 'cubicMeter') {
        return value / 1000;
    } else if (inputUnit === 'milliliter' && outputUnit === 'liter') {
        return value / 1000;
    } else if (inputUnit === 'milliliter' && outputUnit === 'cubicMeter') {
        return value / 1000000;
    } else if (inputUnit === 'cubicMeter' && outputUnit === 'liter') {
        return value * 1000;
    } else if (inputUnit === 'cubicMeter' && outputUnit === 'milliliter') {
        return value * 1000000;

    } else {
        alert("Unable to convert between the selected units.");
        return;
    }
}






//Функції для матричного калькулятора
function addMatrices(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error("Matrices are of different sizes and cannot be added.");
    }

    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }

    return result;
}

function subtractMatrices(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error("Matrices have different sizes and cannot be subtracted from each other.");
    }

    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] - matrix2[i][j]);
        }
        result.push(row);
    }

    return result;
}

function multiplyMatrices(matrix1, matrix2) {
    if (matrix1[0].length !== matrix2.length) {
        throw new Error("The number of columns of the first matrix is not equal to the number of rows of the second matrix. Multiplication is not possible.");
    }

    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = 0;
        }
    }

    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix2.length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

function calculateDeterminant(matrix) {
    if (matrix.length !== matrix[0].length) {
        throw new Error("The matrix is not square, so the determinant cannot be calculated.");
    }

    if (matrix.length === 1) {
        return matrix[0][0];
    }

    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    let det = 0;
    for (let j = 0; j < matrix.length; j++) {
        det += matrix[0][j] * cofactor(matrix, 0, j);
    }

    return det;
}

function cofactor(matrix, row, col) {
    return Math.pow(-1, row + col) * minor(matrix, row, col);
}

function minor(matrix, row, col) {
    let minorMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i !== row) {
            let minorRow = [];
            for (let j = 0; j < matrix[i].length; j++) {
                if (j !== col) {
                    minorRow.push(matrix[i][j]);
                }
            }
            minorMatrix.push(minorRow);
        }
    }
    return calculateDeterminant(minorMatrix);
}

function calculateInverse(matrix) {
    if (matrix.length !== matrix[0].length) {
        throw new Error("The matrix must be square to calculate the inverse of the matrix.");
    }

    const det = calculateDeterminant(matrix);
    if (det === 0) {
        throw new Error("The matrix is degenerate, the inverse matrix does not exist.");
    }

    const n = matrix.length;
    const identity = [];

    for (let i = 0; i < n; i++) {
        identity.push([]);
        for (let j = 0; j < n; j++) {
            identity[i][j] = (i === j) ? 1 : 0;
        }
    }

    const copy = matrix.map(row => [...row]);

    for (let i = 0; i < n; i++) {
        let scalar = copy[i][i];
        for (let j = 0; j < n; j++) {
            copy[i][j] /= scalar;
            identity[i][j] /= scalar;
        }

        for (let k = 0; k < n; k++) {
            if (k === i) continue;
            scalar = copy[k][i];
            for (let j = 0; j < n; j++) {
                copy[k][j] -= copy[i][j] * scalar;
                identity[k][j] -= identity[i][j] * scalar;
            }
        }
    }

    return applyPrecision(identity, 3);
}
function applyPrecision(matrix, precision) {
    return matrix.map(row => row.map(num => num.toFixed(precision)));
}

function performMatrixOperation() {
    let operationType = document.getElementById('operationType').value;
    let matrixA = parseMatrix(document.getElementById('matrixA').value);
    let matrixB = null;

    if (operationType !== 'determinant' && operationType !== 'inverse') {
        matrixB = parseMatrix(document.getElementById('matrixB').value);
    }

    let result;
    switch (operationType) {
        case 'add':
            result = addMatrices(matrixA, matrixB);
            break;
        case 'subtract':
            result = subtractMatrices(matrixA, matrixB);
            break;
        case 'multiply':
            result = multiplyMatrices(matrixA, matrixB);
            break;
        case 'determinant':
            result = calculateDeterminant(matrixA);
            break;
        case 'inverse':
            result = calculateInverse(matrixA);
            break;
        default:
            throw new Error("Unknown matrix operation.");
    }

    displayMatrixResult(result);
}

function parseMatrix(matrixString) {
    let rows = matrixString.trim().split('\n');
    let matrix = rows.map(row => row.trim().split(/\s+/).map(parseFloat));
    return matrix;
}

function displayMatrixResult(result) {
    let resultDiv = document.getElementById('matrixResult');
    resultDiv.innerHTML = "Result:<br>";

    if (typeof result === 'number') {
        resultDiv.innerHTML += result;
    } else {
        for (let i = 0; i < result.length; i++) {
            let row = result[i].map(num => num);
            resultDiv.innerHTML += row.join(' ') + "<br>";
        }
    }
}

function toggleMatrixBInput() {
    let operationType = document.getElementById('operationType').value;
    let matrixBInput = document.getElementById('matrixBInput');

    if (operationType === 'determinant' || operationType === 'inverse') {
        matrixBInput.style.display = 'none';
    } else {
        matrixBInput.style.display = 'block';
    }
}