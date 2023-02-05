<script lang="ts">
    import type { Setting } from '../../../types/cameraApi';
    import BooleanWidget from './BooleanWidget.svelte';
    import DropDownWidget from './DropDownWidget.svelte';

    export let name:string;
    export let setting: Setting;
    const { opts} = setting;
</script>

{#if opts.length === 2}
    <BooleanWidget {setting} />
{:else}
    <DropDownWidget {name} {setting} />
{/if}

