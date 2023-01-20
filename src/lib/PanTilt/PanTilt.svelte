<script lang="ts">
    import { camera } from '../E2Camera';
    import Button from '../common/Button.svelte';
    import PanTiltSpeedInput from './PanTiltSpeedInput.svelte';

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
    <PanTiltSpeedInput {speed} />

</div >

<style>
    #panTilt {
        position: absolute;
        top: 22vw;
        display:flex;
    }
</style>
