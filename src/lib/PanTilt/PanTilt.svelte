<script lang="ts">
    import { camera } from '../E2Camera'
    import Button from '../../common/Button.svelte'
    import PanTiltSpeedInput from './PanTiltSpeedInput.svelte'
    let speed: number = 0
</script>

<section>
    <h2>Pan&Tilt</h2>
    <PanTiltSpeedInput {speed} />
    <Button text={'Up'} onClick={() => camera.tiltUp(speed)} />
    <div style="display: flex;">
        <Button text={'Left'} onClick={() => camera.panLeft(speed)} />
        <Button text={'Right'} onClick={() => camera.panRight(speed)} />
    </div>
    <Button text={'Down'} onClick={() => camera.tiltDown(speed)} />
    <Button text={'Stop'} onClick={camera.stopPanTilt} />
</section>

<style>
</style>
