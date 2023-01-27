<script lang="ts">
    import { onMount } from 'svelte';
    import { camera } from '../CameraAPI';
    import { loadPlayer } from 'rtsp-relay/browser';

    let canvas: HTMLCanvasElement;
    let img;
    const roiLineLength = 25;
    const ROIWidth = 192;
    const ROIHeight = 108;

    function onClick(e) {
        const y = e.clientY - e.target.offsetTop;
        const x = e.clientX - e.target.offsetLeft;

        const width = e.target.width;
        const height = e.target.height;


        console.log(normalize(x, width), normalize(y, height));
        drawRoi(x, y);
        camera.setROI(normalize(x, width), normalize(y, height));
    }

    function normalize(n: number, max: number) {
        return (n / max) * 1000;
    }

    function drawRoi(x, y) {
        clearCanvas();
        const left = x - ROIWidth / 2;
        const right = x + ROIWidth / 2;
        const top = y - ROIHeight / 2;
        const down = y + ROIHeight / 2;
        drawLine({ x: left, y: top }, { x: left + roiLineLength, y: top });
        drawLine({ x: left, y: top }, { x: left, y: top + roiLineLength });

        drawLine({ x: right, y: top }, { x: right - roiLineLength, y: top });
        drawLine({ x: right, y: top }, { x: right, y: top + roiLineLength });

        drawLine({ x: right, y: down }, { x: right, y: down - roiLineLength });
        drawLine({ x: right, y: down }, { x: right - roiLineLength, y: down });

        drawLine({ x: left, y: down }, { x: left + roiLineLength, y: down });
        drawLine({ x: left, y: down }, { x: left, y: down - roiLineLength });
    }
    function drawLine(start, end) {
        const context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.strokeStyle = '#ffffff';
        context.lineWidth = 3;
        context.stroke();
    }

    function clearCanvas() {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    onMount(() => {
        //let a: AudioContext = null;
        //loadPlayer({
        //    url: 'ws://localhost:2000/api/stream/',
        //    canvas: canvas,
        //    onPlay: (e) => console.log(e),
        //    onSourceEstablished: (e) => console.log(e),
        //    onAudioDecode: (e) => {
        //        if (a === null) {
        //            a = e.destination.context;
        //            a.resume();
        //        }
        //    },
        //});
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
<img
    bind:this={img}
    on:click={(e) => onClick(e)}
    id="img"
    src={`http://${import.meta.env.VITE_CAMERA}/mjpeg_stream`} />

<canvas
    width={1385}
    height={839}
    on:click={(e) => onClick(e)}
    bind:this={canvas} />

<style>
    img {
        width: 100vw;
        height: 90vh;
        margin-top: 5vh;
    }
    canvas {
        width: 100vw;
        height: 90vh;
        margin-top: 5vh;
        position: absolute;
    }
</style>
