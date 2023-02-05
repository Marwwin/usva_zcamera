<script lang="ts">
    import { onMount } from 'svelte';
    import { camera } from '../Camera';

    const ROI_LINE = 25;
    const ROI_WIDTH = 192;
    const ROI_HEIGHT = 108;
    const HISTOGRAM_UPDATE_INTERVAL = 2000;

    let canvas: HTMLCanvasElement;
    let img: HTMLImageElement;

    function onClick(e) {
        const y = e.clientY - e.target.offsetTop;
        const x = e.clientX - e.target.offsetLeft;

        const imgWidth = e.target.width;
        const imgHeight = e.target.height;

        drawRoi(x, y);

        console.log(normalize(x, imgWidth), normalize(y, imgHeight));
        camera.setROI(normalize(x, imgWidth), normalize(y, imgHeight));
    }

    function normalize(n: number, max: number) {
        return (n / max) * 1000;
    }

    function drawRoi(x, y) {
        clearCanvas();
        const left = x - ROI_WIDTH / 2;
        const right = x + ROI_WIDTH / 2;
        const top = y - ROI_HEIGHT / 2;
        const down = y + ROI_HEIGHT / 2;
        drawLine({ x: left, y: top }, { x: left + ROI_LINE, y: top });
        drawLine({ x: left, y: top }, { x: left, y: top + ROI_LINE });

        drawLine({ x: right, y: top }, { x: right - ROI_LINE, y: top });
        drawLine({ x: right, y: top }, { x: right, y: top + ROI_LINE });

        drawLine({ x: right, y: down }, { x: right, y: down - ROI_LINE });
        drawLine({ x: right, y: down }, { x: right - ROI_LINE, y: down });

        drawLine({ x: left, y: down }, { x: left + ROI_LINE, y: down });
        drawLine({ x: left, y: down }, { x: left, y: down - ROI_LINE });
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

    onMount(async () => {
       img.src = 'http://192.168.1.117/mjpeg_stream?' + Date.now();
       // const s = await fetch("http://192.168.1.117/mjpeg_stream")
       // console.log(s);
       setTimeout(()=> {
        canvas.width = img.width;
        canvas.height = img.height;
       },2000)
       img.onload = function (){

       }
        //img.onload = function () {
        //    console.log("ad")
        //        const context = canvas.getContext('2d');
        //        context.drawImage(img, 0, 0);
        //        const data = context.getImageData(0,0,canvas.width,canvas.height);
        //       // console.log(data);
        //    };
        //setInterval(function () {
        //    img.src = 'http://192.168.1.117/mjpeg_stream?' + Date.now();
        //    setTimeout(()=>{
        //        const context = canvas.getContext('2d');
        //        context.drawImage(img, 0, 0);
        //        const data = context.getImageData(0,0,canvas.width,canvas.height);
        //    },1000)
        //}, HISTOGRAM_UPDATE_INTERVAL);
    });

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
<img
    bind:this={img}
    on:click={(e) => onClick(e)}
    id="img"
     />

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
