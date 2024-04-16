function parseDataset(datasetString) {
    return datasetString.split(',').map(Number);
}

function calculateMean() {
    const datasetInput = document.getElementById('datasetInput').value;
    const dataset = parseDataset(datasetInput);

    const sum = dataset.reduce((acc, curr) => acc + curr, 0);
    const mean = sum / dataset.length;

    document.getElementById('statisticalResult').innerHTML = `Mean: ${mean.toFixed(2)}`;
}

function calculateMedian() {
    const datasetInput = document.getElementById('datasetInput').value;
    const dataset = parseDataset(datasetInput);

    const sortedDataset = dataset.sort((a, b) => a - b);
    const mid = Math.floor(sortedDataset.length / 2);

    let median;
    if (sortedDataset.length % 2 === 0) {
        median = (sortedDataset[mid - 1] + sortedDataset[mid]) / 2;
    } else {
        median = sortedDataset[mid];
    }

    document.getElementById('statisticalResult').innerHTML = `Median: ${median.toFixed(2)}`;
}

function calculateMode() {
    const datasetInput = document.getElementById('datasetInput').value;
    const dataset = parseDataset(datasetInput);

    const frequencyMap = {};
    dataset.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    let modes = [];
    let maxFrequency = 0;
    for (const num in frequencyMap) {
        const frequency = frequencyMap[num];
        if (frequency > maxFrequency) {
            modes = [num];
            maxFrequency = frequency;
        } else if (frequency === maxFrequency) {
            modes.push(num);
        }
    }

    document.getElementById('statisticalResult').innerHTML = `Mode: ${modes.join(', ')}`;
}

function calculateStandardDeviation() {
    const datasetInput = document.getElementById('datasetInput').value;
    const dataset = parseDataset(datasetInput);

    const mean = dataset.reduce((acc, curr) => acc + curr, 0) / dataset.length;
    const variance = dataset.reduce((acc, curr) => acc + (curr - mean) ** 2, 0) / dataset.length;
    const stdDeviation = Math.sqrt(variance);

    document.getElementById('statisticalResult').innerHTML = `Standard Deviation: ${stdDeviation.toFixed(2)}`;
}

function calculateVariance() {
    const datasetInput = document.getElementById('datasetInput').value;
    const dataset = parseDataset(datasetInput);

    const mean = dataset.reduce((acc, curr) => acc + curr, 0) / dataset.length;
    const variance = dataset.reduce((acc, curr) => acc + (curr - mean) ** 2, 0) / dataset.length;

    document.getElementById('statisticalResult').innerHTML = `Variance: ${variance.toFixed(2)}`;
}
