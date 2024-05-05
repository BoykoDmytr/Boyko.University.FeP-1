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

    addToConversionLog(inputValue, inputUnit, outputUnit, result);
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