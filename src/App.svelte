<script lang="ts">
    import Error from './lib/common/Error.svelte';
    import { camera } from './lib/CameraAPI';
    import { Errors } from './lib/Errors/Errors';
    import FloatingError from './lib/common/FloatingError.svelte';
    import MainScreen from './lib/MainScreen.svelte';
    import { onMount } from 'svelte';
    import EventsManager from './lib/EventsManager/EventsManager.svelte';
    import Gallery from './lib/Gallery/Gallery.svelte';

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
    <EventsManager/>

       <!-- <MainScreen /> -->
       <Gallery />
    {:else}
        <FloatingError>
            <Error error={Errors.NO_CONNECTION} />
        </FloatingError>
    {/if}
</main>

<style>
   
</style>
