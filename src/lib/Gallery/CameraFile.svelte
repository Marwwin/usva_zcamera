<script lang="ts">
    import { camera } from '../CameraAPI';

    export let folder: string;
    export let file: string;
</script>

<div class="file">
    {#await camera.getThumbnailURL(folder, file) then url}
        {#await camera.downloadFile(folder, file) then downloadurl}
            <a href={downloadurl} download>
                <img
                    on:click={() => camera.downloadFile(folder, file)}
                    src={url} />
            </a>
        {/await}
    {/await}
    <h5>{file}</h5>
    <p>
        {#await camera.getFileInfo(folder, file) then info}
            Width: {info.w}
            Height: {info.h}
            Duration: {info.dur}
        {/await}
    </p>
</div>

<style>
    .file {
        padding: 1em;
    }
</style>
