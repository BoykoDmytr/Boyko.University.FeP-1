//Функція для звичайного калькулятора
function calculate() {
    var expression = document.getElementById('expression').value;

    try {
        var result = math.evaluate(expression);

        var displayPrecision = document.getElementById('displayPrecision').value;
        result = parseFloat(result).toFixed(displayPrecision);
        document.getElementById('calculatorResult').textContent = "Result: " + result;
        addToHistory(expression, result);
    } catch (error) {
        alert("Error evaluating the expression.");
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
            return;
    }

    document.getElementById('calculatorResult').innerHTML = "Result: " + result;
}