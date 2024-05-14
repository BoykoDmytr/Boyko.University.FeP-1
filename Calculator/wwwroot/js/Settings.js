function setDisplayPrecision() {
    var displayPrecision = document.getElementById('displayPrecision').value;
    // Встановлення точності відображення результатів
    math.config({ precision: parseInt(displayPrecision) });
}