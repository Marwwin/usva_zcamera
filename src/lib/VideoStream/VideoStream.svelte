<script lang="ts">
    import { camera } from '../E2Camera';

    function onClick(e) {
        const y = e.clientY - e.target.offsetTop;
        const x = e.clientX - e.target.offsetLeft;
        const width = e.target.width;
        const height = e.target.height;
        console.log(normalize(x, width), normalize(y, height));
        camera.setROI(normalize(x, width), normalize(y, height));
    }

    function normalize(n:number, max:number) {
        return (n / max) * 1000;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
<img
    on:click={(e) => onClick(e)}
    src={`http://${import.meta.env.VITE_CAMERA}/mjpeg_stream`} />
