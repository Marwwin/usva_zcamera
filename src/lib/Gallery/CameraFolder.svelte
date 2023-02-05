<script lang="ts">
    import { camera } from '../Camera';
    import CameraFile from './CameraFile.svelte';
    export let folder: string;
</script>

<div class="folder">
    <h4>{folder}</h4>
    {#await camera.getFiles(folder) then files}
        {#each files as file}
            <CameraFile {folder} {file} />
        {/each}
    {/await}
</div>
