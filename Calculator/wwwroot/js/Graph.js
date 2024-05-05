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
    addToHistory(expression);
}