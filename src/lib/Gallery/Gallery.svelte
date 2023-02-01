<script lang="ts">
    import { onMount } from 'svelte';
    import { camera } from '../CameraAPI';
    import CameraFile from './CameraFile.svelte';
</script>

<div id="gallery">
    <h1>Gallery</h1>
    <h2>Folders</h2>
    {#await camera.getFolders() then folders}
        <div id="gallery__folders">
            {#each folders as folder}
                <h4>{folder}</h4>
                {#await camera.getFiles(folder) then files}
                    {#each files as file}
                        <!-- svelte-ignore missing-declaration -->
                        <CameraFile {folder} {file} />
                    {/each}
                {/await}
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
    #gallery__folders{
      display: flex;
      flex-direction: column;
      width: 100vw;
    }
</style>
