<script lang="ts">
    import Error from './common/Error.svelte';
    import PanTilt from './Widgets/PanTilt.svelte';
    import VideoStream from './VideoStream/VideoStream.svelte';
    import ExposureSettings from './Widgets/ExposureSettings.svelte';
    import ZoomWidget from './Widgets/ZoomWidget.svelte';
    import { cameraSettings } from '../store';
    import ImageSettings from './Widgets/ImageSettings.svelte';
    import TempAndBattery from './Widgets/TempAndBattery.svelte';
    import { Errors } from './Errors/Errors';
    import Gallery from './Gallery/Gallery.svelte';
    import Buttons from './Widgets/Buttons.svelte';
    import RecordingTime from './Widgets/RecordingTime.svelte';

</script>

<section>
    {#if import.meta.env.VITE_CAMERA}
        {#await cameraSettings.init() then }
            <div class="module__container">
                <ExposureSettings />
                <TempAndBattery />
                <VideoStream />
                <ZoomWidget />
                <PanTilt />
                <ImageSettings />
                <Buttons />
                <RecordingTime />
            </div>
        {/await}
    {:else}
        <Error error={Errors.CAMERA_IP} />
    {/if}
</section>

<style>
    .module__container {
        display: flex;
        flex-direction: column;
    }
    :global(section) {
        padding: 0em;
    }
    :global(button) {
        margin: 0.3em;
    }
</style>
