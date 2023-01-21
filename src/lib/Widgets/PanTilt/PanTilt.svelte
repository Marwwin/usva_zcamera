<script lang="ts">
    import { camera } from '../../CameraAPI';
    import Button from '../../common/Button.svelte';
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
        top: 37vh;
        display:flex;
    }
</style>
