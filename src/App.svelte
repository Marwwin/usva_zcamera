<script lang="ts">
    import CameraInformation from './lib/CameraInformation/CameraInformation.svelte';
    import { camera } from './lib/E2Camera';
    import PanTilt from './lib/PanTilt/PanTilt.svelte';
    import Settings from './lib/Settings/Settings.svelte';
    import WorkingMode from './lib/WorkingMode/WorkingMode.svelte';
    import { cameraSettings } from './store';

    cameraSettings.update(async (previousState) => {
        try {
            return await camera.getAll(previousState);
        } catch {
            return previousState;
        }
    });
</script>

<main>
    <div class="module__container" style="display: flex;">
        <CameraInformation />
        <PanTilt />
        <WorkingMode />
        <Settings />
    </div>
</main>

<style>
    :global(section) {
        padding: 1em;
    }
    :global(button) {
        margin: 0.3em;
    }
</style>
