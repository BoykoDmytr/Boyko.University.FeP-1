var customFunctions = [];
var customConstants = [];

function addCustomFunction() {
    var functionName = document.getElementById('customFunctionName').value;
    var functionExpression = document.getElementById('customFunctionExpression').value;

    if (functionName && functionExpression) {
        customFunctions.push({ name: functionName, expression: functionExpression });
        updateCustomFunctionsList();
        document.getElementById('customFunctionName').value = '';
        document.getElementById('customFunctionExpression').value = '';
    } else {
        alert('Please enter both function name and expression.');
    }
}

function addCustomConstant() {
    var constantName = document.getElementById('customConstantName').value;
    var constantValue = document.getElementById('customConstantValue').value;

    if (constantName && constantValue) {
        customConstants.push({ name: constantName, value: constantValue });
        updateCustomConstantsList();
        document.getElementById('customConstantName').value = '';
        document.getElementById('customConstantValue').value = '';
    } else {
        alert('Please enter both constant name and value.');
    }
}

function updateCustomFunctionsList() {
    var customFunctionsList = document.getElementById('customFunctionsList');
    customFunctionsList.innerHTML = '';
    customFunctions.forEach(function (func) {
        var listItem = document.createElement('li');
        listItem.textContent = func.name + ': ' + func.expression;
        customFunctionsList.appendChild(listItem);
    });
}

function updateCustomConstantsList() {
    var customConstantsList = document.getElementById('customConstantsList');
    customConstantsList.innerHTML = '';
    customConstants.forEach(function (constant) {
        var listItem = document.createElement('li');
        listItem.textContent = constant.name + ': ' + constant.value;
        customConstantsList.appendChild(listItem);
    });
}

function clearCustomFunctionsAndConstants() {
    customFunctions = [];
    customConstants = [];
    updateCustomFunctionsList();
    updateCustomConstantsList();
}

function removeLastCustomFunction() {
    customFunctions.pop();
    updateCustomFunctionsList();
}

function removeLastCustomConstant() {
    customConstants.pop();
    updateCustomConstantsList();
}