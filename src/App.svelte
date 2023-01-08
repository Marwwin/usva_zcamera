<script lang="ts">
    import CameraInformation from './lib/CameraInformation/CameraInformation.svelte';
    import { camera } from './lib/E2Camera';
    import Histogram from './lib/Histogram/Histogram.svelte';
    import PanTilt from './lib/PanTilt/PanTilt.svelte';
    import Settings from './lib/Settings/Settings.svelte';
    import WorkingMode from './lib/WorkingMode/WorkingMode.svelte';
    import { cameraSettings } from './store';

    cameraSettings.update((previousState) => camera.getAll(previousState));
</script>

<main>
    {#if !import.meta.env.VITE_CAMERA}
        <h1>ERROR: No Camera Ip Set</h1>
        <p>
            The ip needs to be declared as an enviroment variable VITE_CAMERA in
            a ".env" file, the file should be located in the root folder
        </p>
        <p>Example .env file:<br /> VITE_CAMERA=123.123.123.123</p>
    {:else}
        <div class="module__container" style="display: flex;">
            <!--<CameraInformation />-->
            <!--<PanTilt />-->
            <!--<WorkingMode />-->
            <!--<Settings />-->
            <Histogram />
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
