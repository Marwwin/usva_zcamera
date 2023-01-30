<script lang="ts">
    import { onMount } from 'svelte';
    import { camera } from '../CameraAPI';
    import CameraFile from './CameraFile.svelte';
</script>


<h1>Gallery</h1>
<h2>Folders</h2>
<div id="gallery">
{#await camera.getFolders() then folders}
        {#each folders as folder}
            <h4>{folder}</h4>
            {#await camera.getFiles(folder) then files}
                {#each files as file}
                    <!-- svelte-ignore missing-declaration -->
                    <CameraFile {folder} {file} />
                {/each}
            {/await}
        {/each}
{/await}
</div>

<style>
  #gallery{
    display:flex;
  }
</style>