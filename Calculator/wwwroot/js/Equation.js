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

        addToEquationLog(a, b, c, isQuadratic, solution);
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