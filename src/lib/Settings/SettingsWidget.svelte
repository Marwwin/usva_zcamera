<script lang="ts">
    import ChoiseWidget from '../common/widgets/ChoiseWidget.svelte';
    import RangeWidget from '../common/widgets/RangeWidget.svelte';
    import StringWidget from '../common/widgets/StringWidget.svelte';

    export let name: string;
    export let setting: any;
    
    const { type, ro } = setting;

    function isReadonly(type: number, ro: number) {
        return ro === 1 || type === 3;
    }

    function isChoiseWidget(type: number) {
        return type === 1;
    }
</script>

{#if isReadonly(type, ro)}
    <StringWidget {name} {setting} />
{:else if isChoiseWidget(type)}
    <ChoiseWidget {name} {setting} />
{:else}
    <RangeWidget {name} {setting} />
{/if}

<style>
    :global(.widget) {
        margin: 0.25em;
        padding: 0.35em;
        border: 1px solid whitesmoke;
        border-radius: 10%;
    }
    :global(.widget h5) {
        margin: 0.2em;
    }
</style>
