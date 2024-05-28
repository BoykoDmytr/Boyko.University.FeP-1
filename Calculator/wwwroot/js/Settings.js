function setDisplayPrecision() {
    var displayPrecision = document.getElementById('displayPrecision').value;
    math.config({ precision: parseInt(displayPrecision) });
}