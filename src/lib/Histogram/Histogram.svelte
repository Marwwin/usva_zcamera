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
    import { data } from './data.js';

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
    }
</script>

<Bar width={1000} height={1000} {data} {options} />
