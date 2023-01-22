<script lang="ts">
    import { onMount } from 'svelte';
    import { camera } from '../CameraAPI';
    import { loadPlayer } from 'rtsp-relay/browser';

    let canvas: HTMLCanvasElement;

    function draw() {
        const img = document.getElementById('img');
        d();
        function d() {
            const ctx = canvas.getContext('2d');
            console.log('draw');
            ctx.drawImage(img, 0, 0);
            requestAnimationFrame(d);
        }
    }

    function onClick(e) {
        const y = e.clientY - e.target.offsetTop;
        const x = e.clientX - e.target.offsetLeft;

        const width = e.target.width;
        const height = e.target.height;

        const ROIWidth = 200;
        const ROIHeight = 200;
        console.log(normalize(x, width), normalize(y, height));
        camera.setROI(normalize(x, width), normalize(y, height));
    }

    function normalize(n: number, max: number) {
        return (n / max) * 1000;
    }

    onMount(() => {
        let a: AudioContext = null;
        loadPlayer({
            url: 'ws://localhost:2000/api/stream/',
            canvas: canvas,
            onPlay: (e)=> console.log(e),
            onSourceEstablished: (e)=> console.log(e),
            onAudioDecode: (e) => {
                if (a === null) {
                    a = e.destination.context;
                    a.resume();
                }
            },
        });
    });

    console.log(canvas)

    // const ws = new WebSocket("ws://localhost:2000/api/stream");
    //
    // ws.onmessage = ((e)=>{
    //     console.log(e);
    // })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
<!-- <img
    on:click={(e) => onClick(e)}
    id="img"
    src={`http://${import.meta.env.VITE_CAMERA}/mjpeg_stream`} />
-->

<canvas on:click={(e) => onClick(e)} bind:this={canvas} />

<style>
    img {
        width: 100vw;
        height: 90vh;
        margin-top: 5vh;
    }
</style>
