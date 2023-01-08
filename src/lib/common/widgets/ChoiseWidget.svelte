<script lang="ts">
    import type { ChoiseSettings } from '../../../types/settings';
    import BooleanWidget from './BooleanWidget.svelte';
    import DropDownWidget from './DropDownWidget.svelte';

    export let name:string;
    export let setting: ChoiseSettings;
    const { opts} = setting;
</script>

{#if opts.length === 2}
    <BooleanWidget {name} {setting} />
{:else}
    <DropDownWidget {name} {setting} />
{/if}
