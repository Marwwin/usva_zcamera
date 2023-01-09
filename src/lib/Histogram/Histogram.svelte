<script>
    import { Bar } from 'svelte-chartjs';
    import {
        Chart,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    } from 'chart.js';
    // import { data } from './data.js';

    Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    );

    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: false,
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    };
    let data = undefined;

    // @ts-ignore
    const img = new Image(300, 150);
    img.onload = () => {
        console.log('load');
        const canvas = document.getElementById('canvas');
        // @ts-ignore
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const colors = {
            red: Array(256).fill(0),
            green: Array(256).fill(0),
            blue: Array(256).fill(0),
            luma: Array(256).fill(0),
        };
        const imgData = ctx.getImageData(0, 0, img.width, img.height).data;
        for (let i = 0; i < imgData.length; i += 4) {
            colors.red[imgData[i]] += 1;
            colors.green[imgData[i + 1]] += 1;
            colors.blue[imgData[i + 2]] += 1;

            const gray = Math.round(
                0.299 * imgData[i] +
                    0.587 * imgData[i + 1] +
                    0.114 * imgData[i + 2],
            );
            colors.luma[gray] += 1;
        }
        console.log(imgData);
        data = {
            type: 'bar',
            labels: Array(256)
                .fill(null)
                .map((_, i) => i),
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
    };
    img.src = 'test.jpeg';

    const normalize = (val, max, min) => (val - min) / (max - min);
</script>

<div>
    <canvas id="canvas" />
    {#if data != undefined}
        <Bar width={800} height={500} {data} {options} />
    {/if}
</div>
