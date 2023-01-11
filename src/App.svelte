<script lang="ts">
    import CameraInformation from './lib/CameraInformation/CameraInformation.svelte';
    import Error from './lib/common/Error.svelte';
    import { camera } from './lib/E2Camera';
    import Histogram from './lib/Histogram/Histogram.svelte';
    import ImageTemp from './lib/Histogram/ImageTemp.svelte';
    import PanTilt from './lib/PanTilt/PanTilt.svelte';
    import { list } from './lib/registeredSettings';
    import Settings from './lib/Settings/Settings.svelte';
    import WorkingMode from './lib/WorkingMode/WorkingMode.svelte';
    import { cameraSettings } from './store';

    let done = false;
    async function setSettings() {
        for (const setting of list) {
            const result = await camera.get(setting.key);
            cameraSettings.setValue(setting.key, result);
        }
        done = true;
    }
    setSettings();
</script>

<main>
    {#if done}
        {#each list as setting}
            {$cameraSettings[setting.key].key}
            {$cameraSettings[setting.key].value}
        {/each}
    {/if}

    {#if !import.meta.env.VITE_CAMERA}
        <Error
            header={'No Camera Ip Set'}
            text={`The ip needs to be declared as the enviroment variable VITE_CAMERA in
    a ".env" file, the file should be located in the root folder
    Example:VITE_CAMERA=123.123.123.123`} />
    {:else}
        <div class="module__container" style="display: flex;">
            <!-- <CameraInformation />-->
            <!-- <PanTilt />-->
            <!-- <WorkingMode />-->
            <Settings />
            <!-- <ImageTemp />-->
        </div>
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
