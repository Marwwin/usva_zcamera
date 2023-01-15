<script lang="ts">
    import { camera } from '../E2Camera';
</script>

<div>
    <div
        class="zoom__button"
        on:mousedown={() => camera.set('lens_zoom', 'in')}
        on:mouseup={() => camera.set('lens_zoom', 'stop')}>
        +
    </div>
    <div
        class="zoom__button"
        on:mousedown={() => camera.set('lens_zoom', 'out')}
        on:mouseup={() => camera.set('lens_zoom', 'stop')}>
        -
    </div>
</div>

<style>
    .zoom__button {
        padding: 0.6em;
        border: 1px white solid;
        border-radius: 10px;
    }
</style>
