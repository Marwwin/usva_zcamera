export function createChartData(imageData) {
    const colors = imageDataToRGB(imageData);
    return {
        type: 'bar',
        labels: createLabel(),
        datasets: [
            {
                label: 'red',
                data: colors.red,
                backgroundColor: ['rgba(255, 0,0,0.3)'],
            },
            {
                label: 'green',
                data: colors.green,
                backgroundColor: ['rgba(0, 255,0,0.3)'],
            },
            {
                label: 'blue',
                data: colors.blue,
                backgroundColor: ['rgba(0, 0,255,0.3)'],
            },
        ],
    };
}

function imageDataToRGB(imageData: Uint8ClampedArray) {
    const colors = createRGBColors();
    for (let i = 0; i < imageData.length; i += 4) {
        colors.red[imageData[i]] += 1;
        colors.green[imageData[i + 1]] += 1;
        colors.blue[imageData[i + 2]] += 1;

        const grayPixelValue = Math.round(
            0.299 * imageData[i] +
                0.587 * imageData[i + 1] +
                0.114 * imageData[i + 2],
        );
        colors.luma[grayPixelValue] += 1;
    }
    return colors;
}

function createRGBColors() {
    return {
        red: Array(256).fill(0),
        green: Array(256).fill(0),
        blue: Array(256).fill(0),
        luma: Array(256).fill(0),
    };
}

function createLabel() {
    return Array(256)
        .fill(null)
        .map((_, i) => i);
}
