<script lang="ts">
    import CameraInformation from './lib/CameraInformation/CameraInformation.svelte';
    import Error from './lib/common/Error.svelte';
    import { camera } from './lib/CameraAPI';
    import ErrorCameraIp from './lib/Errors/ErrorCameraIp.svelte';
    import FocusWidget from './lib/Widgets/FocusWidget/FocusWidget.svelte';
    import Histogram from './lib/Histogram/Histogram.svelte';
    import ImageTemp from './lib/Histogram/ImageTemp.svelte';
    import PanTilt from './lib/PanTilt/PanTilt.svelte';
    import { settings } from './lib/cameraSettings';
    import Settings from './lib/Settings/Settings.svelte';
    import VideoStream from './lib/VideoStream/VideoStream.svelte';
    import ExposureSettings from './lib/Widgets/ExposureSettings/ExposureSettings.svelte';
    import WorkingMode from './lib/WorkingMode/WorkingMode.svelte';
    import ZoomWidget from './lib/Widgets/ZoomWidget/ZoomWidget.svelte';
    import { cameraSettings } from './store';
    import ImageSettings from './lib/Widgets/ImageSettings/ImageSettings.svelte';
    import { Events } from './types/events';
    import TempAndBattery from './lib/Widgets/TempAndBattery/TempAndBattery.svelte';

    let done = false;
    async function setSettings() {
        for (const setting of Object.keys(settings)) {
            const result = await camera.get(setting);
            console.log(setting,result)
            cameraSettings.set(setting, result);
        }
        done = true;
    }
    setSettings();

    const ws = new WebSocket(`ws://${import.meta.env.VITE_CAMERA}:81/`);

    ws.onopen = () => {
        cameraSettings.set('temp', { value: 0 });
        cameraSettings.set('battery_voltage', { value: 0 });
    };
    ws.onmessage = (e: any) => {
        const { what, value, key = '' } = JSON.parse(e.data);

        if (what === Events.TEMP_UPDATE) {
            console.log('updateTemp');
            cameraSettings.setValue('temp', value);
        }
        if (what === Events.CONFIG_CHANGED)
            if (key === 'battery_voltage') {
                cameraSettings.setValue(key, value);
            }
        if (what !== 'RecUpdateDur') console.log(JSON.parse(e.data));
    };
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
