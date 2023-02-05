<script lang="ts">
    import Histogram from './Histogram.svelte';

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
    <Histogram {imgData} />
</div>
