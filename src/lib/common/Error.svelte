<script lang="ts">
    import type { CameraError } from '../../types/error';

    export let error: CameraError;
    const { header, text } = error;
</script>

<h1>ERROR: {header}</h1>
<p>
    {text}
</p>
