<script lang="ts">
    import { camera } from '../lib/E2Camera';
    import type { RangeSetting } from '../types/settings';
    
    export let setting: RangeSetting;
    export let name: string;
    let { value, min, max, key } = setting;
</script>

<div>
    <h3>{name}</h3>

    <input
        on:change={(selected) => {
            camera.set(key, selected.currentTarget.value);
        }}
        type="range"
        name={key}
        id=""
        {min}
        {max}
        bind:value />
    <div>{value}</div>
</div>
