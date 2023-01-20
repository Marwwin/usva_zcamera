<script lang="ts">
    import type { Settings } from '../../../types/settings';

    export let name: string = null;
    export let value: string;
</script>

<div class="string_widget">
    {#if name}
        <span>{name}: {value}</span>
    {:else}
        <span>{value}</span>
    {/if}
</div>

<style>
    .string_widget {
        margin: 0.2em 1em;
    }
</style>
