<script lang="ts">
    import type { CameraError } from '../../types/error';

    export let error: CameraError;
    const { header, text } = error;
</script>

<h2>ERROR: {header}</h2>
<p>
    {text}
</p>
