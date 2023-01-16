<script lang="ts">
    import { camera } from '../../E2Camera';
    import type { ChoiseSettings, Settings } from '../../../types/settings';

    export let name: string;
    export let setting: Settings;
    const { key, opts, value } = setting;
</script>

<div class="widget">
    <h5>{name}</h5>
    <select
        on:change={(selected) => {
            camera.set(key, selected.currentTarget.value);
        }}>
        {#each opts as opt}
            <option value={opt} selected={opt === value}>{opt}</option>
        {/each}
    </select>
</div>