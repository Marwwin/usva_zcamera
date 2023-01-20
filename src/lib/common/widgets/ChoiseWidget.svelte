<script lang="ts">
    import type { ChoiseSettings, Settings } from '../../../types/settings';
    import BooleanWidget from './BooleanWidget.svelte';
    import DropDownWidget from './DropDownWidget.svelte';

    export let name:string;
    export let setting: Settings;
    const { opts} = <ChoiseSettings>setting;
</script>

{#if opts.length === 2}
    <BooleanWidget {name} {setting} />
{:else}
    <DropDownWidget {name} {setting} />
{/if}

