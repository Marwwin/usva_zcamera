<script lang="ts">
    import Button from '../common/Button.svelte';
    import { camera } from '../Camera';

    let result: Response;
</script>

<section>
    <h2>Work Mode</h2>
    <Button
        text={'Current WorkMode'}
        onClick={async () => {
            result = await camera.queryWorkMode();
            return result;
        }} />
    <Button text={'Record Mode'} onClick={() => camera.setRecordMode()} />
    <Button text={'Playback Mode'} onClick={() => camera.setPlaybackMode()} />
    <Button text={'Standby Mode'} onClick={() => camera.setStandbyMode()} />
</section>

<style>
</style>
