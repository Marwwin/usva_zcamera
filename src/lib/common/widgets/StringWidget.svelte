<script lang="ts">
    import type { Settings } from '../../../types/settings';

    export let setting: Settings;
    export let name: string;
    let { value } = setting;
</script>

<div class="string_widget">
    <span>{name}: {value}</span>
</div>

<style>
    .string_widget{
        margin:0.2em 1em;
    }
</style>