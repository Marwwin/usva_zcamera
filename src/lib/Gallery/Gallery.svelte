<script lang="ts">
    import { camera } from '../Camera';
    import CameraFolder from './CameraFolder.svelte';
</script>

<div id="gallery">
    <h1>Gallery</h1>
    <h2>Folders</h2>
    {#await camera.getFolders() then folders}
        <div id="gallery__folders">
            {#each folders as folder}
                <CameraFolder {folder} />
            {/each}
        </div>
    {/await}
</div>

<style>
    #gallery {
        padding-top: 5em;
        display: flex;
        flex-direction: column;
    }
    #gallery__folders {
        display: flex;
        flex-direction: column;
        width: 100vw;
    }
</style>
