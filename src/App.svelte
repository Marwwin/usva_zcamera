<script lang="ts">
    import CameraInformation from './lib/CameraInformation/CameraInformation.svelte';
    import Error from './lib/common/Error.svelte';
    import { camera } from './lib/CameraAPI';
    import ErrorCameraIp from './lib/Errors/ErrorCameraIp.svelte';
    import FocusWidget from './lib/Widgets/FocusWidget/FocusWidget.svelte';
    import Histogram from './lib/Histogram/Histogram.svelte';
    import ImageTemp from './lib/Histogram/ImageTemp.svelte';
    import PanTilt from './lib/Widgets/PanTilt/PanTilt.svelte';
    import { settings } from './lib/cameraSettings';
    import VideoStream from './lib/VideoStream/VideoStream.svelte';
    import ExposureSettings from './lib/Widgets/ExposureSettings/ExposureSettings.svelte';
    import WorkingMode from './lib/WorkingMode/WorkingMode.svelte';
    import ZoomWidget from './lib/Widgets/ZoomWidget/ZoomWidget.svelte';
    import { cameraSettings } from './store';
    import ImageSettings from './lib/Widgets/ImageSettings/ImageSettings.svelte';
    import { Events } from './types/events';
    import TempAndBattery from './lib/Widgets/TempAndBattery/TempAndBattery.svelte';

    let done = false;
    const additionalSettings = [
        "temp",
        "battery_voltage"
    ]
    async function setSettings() {
        for (const key of Object.keys(settings)) {
            const result = await camera.get(key);
            cameraSettings.setEntry(result);
        }
        for (const key of additionalSettings){
            cameraSettings.setEntry({ key: key, value: 0 });
        }
        done = true;
    }
    setSettings();

    

    $: apiErrors = $cameraSettings["api_errors"]
</script>

<main>
    {#if done}
        {#if !import.meta.env.VITE_CAMERA}
            <ErrorCameraIp />
        {:else}
            <div class="module__container">
                <ExposureSettings />
                <TempAndBattery />
                <VideoStream />
                <ZoomWidget />
                <PanTilt />
                <ImageSettings />
                <!-- <CameraInformation />
                <!-- <FocusWidget />-->

                <!-- <WorkingMode />-->
                <!-- <Settings />-->
                <!-- <ImageTemp />-->
            </div>
        {/if}
    {/if}
</main>

<style>
    .module__container {
        display: flex;
        flex-direction: column;
    }
    :global(section) {
        padding: 1em;
    }
    :global(button) {
        margin: 0.3em;
    }
</style>
