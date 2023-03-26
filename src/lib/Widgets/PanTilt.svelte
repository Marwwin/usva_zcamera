<script lang="ts">
    import { camera } from '../Camera';
    import Button from '../common/Button.svelte';

    let speed: number = 0;
</script>

<div id="panTilt">
    <div>
        <Button
            text={'^'}
            onClick={() => camera.tiltUp(speed)}
            onMouseUp={() => camera.stopPanTilt()} />
        <div style="display: flex;">
            <Button
                text={'<'}
                onClick={() => camera.panLeft(speed)}
                onMouseUp={() => camera.stopPanTilt()} />
            <Button
                text={'>'}
                onClick={() => camera.panRight(speed)}
                onMouseUp={() => camera.stopPanTilt()} />
        </div>
        <Button
            text={'v'}
            onClick={() => camera.tiltDown(speed)}
            onMouseUp={() => camera.stopPanTilt()} />
    </div>
    <div>
        <Button text={'stop'} onClick={() => camera.stopPanTilt()} />
    </div>
    <div>
        <input
            orient="vertical"
            type="range"
            name="speed"
            id=""
            min="0"
            max="63"
            bind:value={speed} />
    </div>
</div>

<style>
    #panTilt {
        position: absolute;
        top: 37vh;
        display: flex;
    }
</style>
