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
    export let imgData;

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
</script>

{#if imgData != undefined}
    <Bar width={500} height={400} data={createChartData(imgData)} {options} />
{/if}
