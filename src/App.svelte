<script lang="ts">
    import CameraInformation from './lib/CameraInformation/CameraInformation.svelte';
    import Error from './lib/common/Error.svelte';
    import { camera } from './lib/E2Camera';
    import ErrorCameraIp from './lib/Errors/ErrorCameraIp.svelte';
    import FocusWidget from './lib/FocusWidget/FocusWidget.svelte';
    import Histogram from './lib/Histogram/Histogram.svelte';
    import ImageTemp from './lib/Histogram/ImageTemp.svelte';
    import PanTilt from './lib/PanTilt/PanTilt.svelte';
    import { list } from './lib/registeredSettings';
    import Settings from './lib/Settings/Settings.svelte';
    import VideoStream from './lib/VideoStream/VideoStream.svelte';
    import ExposureSettings from './lib/Widgets/ExposureSettings/ExposureSettings.svelte';
    import WorkingMode from './lib/WorkingMode/WorkingMode.svelte';
    import ZoomWidget from './lib/ZoomWidget/ZoomWidget.svelte';
    import { cameraSettings } from './store';

    let done = false;
    async function setSettings() {
        for (const setting of list) {
            const result = await camera.get(setting.key);
            cameraSettings.setEntry(setting.key, result);
        }
        done = true;
    }
    setSettings();
</script>

<main>
    {#if done}
        {#if !import.meta.env.VITE_CAMERA}
            <ErrorCameraIp />
        {:else}
            <div class="module__container" style="display: flex;">
                <ExposureSettings />
                <VideoStream />
                <ZoomWidget />
                <FocusWidget />
                <!-- <CameraInformation />-->
                <!-- <PanTilt />-->
                <!-- <WorkingMode />-->
                <!-- <Settings />-->
                <!-- <ImageTemp />-->
            </div>
        {/if}
    {/if}
</main>

<style>
    :global(section) {
        padding: 1em;
    }
    :global(button) {
        margin: 0.3em;
    }
</style>
