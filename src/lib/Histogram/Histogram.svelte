<script lang="ts">
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
    import { createChartData } from './imageToChart';

    Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    );

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
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
    let imgData = undefined;

    const img = new Image(300, 150);
    img.onload = () => {
        const canvas = <HTMLCanvasElement>document.getElementById('image');
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        imgData = ctx.getImageData(0, 0, img.width, img.height).data;
    };
    img.src = 'test.jpeg';
</script>

<div>
    <canvas id="image" />
    {#if imgData != undefined}
        <Bar
            width={500}
            height={400}
            data={createChartData(imgData)}
            {options} />
    {/if}
</div>
