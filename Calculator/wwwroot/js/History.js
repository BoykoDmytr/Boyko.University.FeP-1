// Масив для зберігання історії логу
var historyLog = [];
var matrixHistoryLog = [];

// Функція додавання до історії логу
function addToHistory(expression, result) {
    var logEntry = {
        expression: expression,
        result: result
    };
    historyLog.push(logEntry);
}

function addToHistoryMatrix(operationType, matrixA, matrixB, result) {
    let logEntry = {
        type: operationType,
        matrixA: matrixA,
        matrixB: matrixB,
        result: result
    };
    historyLog.push(logEntry);
}

function addToHistoryEquation(equation) {
    let logEntry = {
        Equation: equation,
        result: result
    };
    historyLog.push(logEntry);
}

// Функція відображення історії логу
function displayHistory() {
    var historyList = document.getElementById("historyList");
    historyList.innerHTML = ""; // Очищаємо список перед відображенням

    historyLog.forEach(function (entry) {
        var listItem = document.createElement("li");
        listItem.textContent = entry.expression + " = " + entry.result;
        historyList.appendChild(listItem);
    });
}

// Функція очищення історії логу
function clearHistory() {
    historyLog = [];
    displayHistory(); // Оновлення відображення
}


// Функція експорту історії логу у форматі JSON
function exportHistory() {
    var jsonData = JSON.stringify(historyLog); // Перетворюємо масив у JSON-рядок
    var filename = "history_log.json";

    // Створюємо об'єкт URL для скачування JSON-файлу
    var blob = new Blob([jsonData], { type: "application/json" });
    var url = URL.createObjectURL(blob);

    // Створюємо посилання для скачування файлу
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;

    // Додаємо посилання на сторінку і автоматично клікаємо на нього для початку завантаження файлу
    document.body.appendChild(a);
    a.click();

    // Видаляємо створений елемент посилання після завантаження файлу
    document.body.removeChild(a);
    // Звільняємо ресурси, щоб уникнути витоку пам'яті
    URL.revokeObjectURL(url);
}