
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

    addToHistoryMatrix(operationType, matrixA, matrixB, result);
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