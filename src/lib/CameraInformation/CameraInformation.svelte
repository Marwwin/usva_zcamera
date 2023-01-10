<script lang="ts">
    import Button from '../common/Button.svelte';
    import { camera } from '../E2Camera';
    let result: any | null = null;
</script>

<section>
    <h2>Camera Information</h2>
    <Button
        bind:result
        text={'Get Camera Info'}
        onClick={async () => {
            return await camera.getInformation();
        }} />

    {#if result}
        {#await result}
            Connecting to camera...
        {:then result}
            Model: {result.model}<br />
            Number: {result.number}<br />
            Serial Number: {result.sn}<br />
            Software: {result.sw}<br />
            Ip: {result.eth_ip}<br />
        {/await}
    {/if}
</section>
