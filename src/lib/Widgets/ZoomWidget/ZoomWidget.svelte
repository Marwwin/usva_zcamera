<script lang="ts">
    import { camera } from '../../CameraAPI';
</script>

<div id="zoom">
    <div
        class="zoom__button"
        on:mousedown={() => camera.set('lens_zoom', 'in')}
        on:mouseup={() => camera.set('lens_zoom', 'stop')}>
        T
    </div>
    <div
        class="zoom__button"
        on:mousedown={() => camera.set('lens_zoom', 'out')}
        on:mouseup={() => camera.set('lens_zoom', 'stop')}>
        W
    </div>
</div>

<style>
    #zoom {
        position: absolute;
        left: 95vw;
        top: 40vh;
    }
    .zoom__button {
        border: 1px solid;
        border-radius: 50%;
        width: 2em;
        height: 2em;
        margin-bottom: 1em;
        text-align: center;
        line-height: 2.4em;
        background-color: #fff2;
        font-size: x-large;
    }
    .zoom__button:hover{
        background-color: #fff9;

    }
</style>
