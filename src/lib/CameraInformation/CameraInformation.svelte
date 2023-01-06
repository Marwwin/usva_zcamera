<script lang="ts">
    import Button from '../../common/Button.svelte'
    import { camera } from '../E2Camera'
    let result: any | null = null
</script>

<section>
    <h2>Camera Information</h2>
    <Button
        text={'Get Camera Info'}
        onClick={async () => {
            result = await camera.getInformation()
        }} />

    {#if result}
        {#await result}
            Connecting to camera...
        {:then result}
            {result.status}
        {/await}
    {/if}
</section>
