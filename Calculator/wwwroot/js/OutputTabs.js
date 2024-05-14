function appendToExpression(value) {
    var expressionField = document.getElementById('expression');
    expressionField.value += value;
}

function clearExpression() {
    var expressionField = document.getElementById('expression');
    expressionField.value = '';
}

function toggleTab(tabName) {
    var tabs = ['graph', 'calculator', 'equationSolver', 'unitConverter', 'matrixCalculator',
        'programmingMode', 'statisticalFunctions', 'complexCalculator', 'customFunctions', 'historyTab', 'settings'];

    for (var i = 0; i < tabs.length; i++) {
        var tab = document.getElementById(tabs[i]);
        if (tabs[i] === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
}