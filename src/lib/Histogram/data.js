export const data = {
    type: 'bar',
    labels: Array(256).fill(null).map((_, i) => i),
    datasets: [
        {
            label: 'red',
            data: Array(256).fill(null).map(() => Math.floor(Math.random()*500)),
            backgroundColor: ['rgba(255, 0,0,0.3)'],
        },
        {
            label: 'green',
            data: Array(256).fill(null).map(() => Math.floor(Math.random()*500)),
            backgroundColor: ['rgba(0, 255,0,0.3)'],
        },
        {
            label: 'blue',
            data: Array(256).fill(null).map(() => Math.floor(Math.random()*500)),
            backgroundColor: ['rgba(0, 0,255,0.3)'],
        },
    ],
};
