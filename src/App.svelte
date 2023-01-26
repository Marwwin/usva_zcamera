<script lang="ts">
    import Error from './lib/common/Error.svelte';
    import { camera } from './lib/CameraAPI';
    import { Errors } from './lib/Errors/Errors';
    import FloatingError from './lib/common/FloatingError.svelte';
    import MainScreen from './lib/MainScreen.svelte';
    import { onMount } from 'svelte';

    let isCameraOk = false;
    let loading = true;
    onMount(async () => {
        isCameraOk = await camera.ping();
        loading = false;
    });
</script>

<main>
    {#if loading}
        Loading...
    {:else if isCameraOk}
        <MainScreen />
    {:else}
        <FloatingError>
            <Error error={Errors.NO_CONNECTION} />
        </FloatingError>
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
