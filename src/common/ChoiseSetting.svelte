<script lang="ts">
    import { camera } from '../lib/E2Camera';
    import type { ChoiseSetting } from '../types/settings';

    export let name;
    export let setting: ChoiseSetting;
    const { key, opts, value } = setting;
</script>

<div>
    <h3>{name}</h3>

    <select
        on:change={(selected) => {
            camera.set(key, selected.currentTarget.value);
        }}>
        {#each opts as opt}
            <option value={opt} selected={opt === value}>{opt}</option>
        {/each}
    </select>
</div>
