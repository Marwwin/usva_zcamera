<script lang="ts">
    import { camera } from '../Camera';

    export let folder: string;
    export let file: string;
</script>

<div class="file">
    {#await camera.getThumbnailURL(folder, file) then url}
        {#await camera.getDownloadFileURL(folder, file) then downloadurl}
            <a href={downloadurl} download>
                <img alt="A recorded video file" src={url} />
            </a>
        {/await}
    {/await}
    <h5>{file}</h5>
    <p>
        {#await camera.getFileInfo(folder, file) then info}
            Width: {info.w}
            Height: {info.h}
            Duration: {Math.round(info.dur / info.vts)}s
        {/await}
    </p>
</div>

<style>
    .file {
        padding: 1em;
    }
</style>
