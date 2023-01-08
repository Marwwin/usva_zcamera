<script lang="ts">
    import { camera } from '../../E2Camera';
    import type { RangeSettings } from '../../../types/settings';
    
    export let name: string;
    export let setting: RangeSettings;
    let { value, min, max, key, step } = setting;
</script>

<div class="widget">
    <h5>{name}</h5>
    <input
        on:change={(selected) => {
            camera.set(key, selected.currentTarget.value);
        }}
        type="range"
        name={key}
        id=""
        {min}
        {max}
        {step}
        bind:value />
    <div>{value}</div>
</div>
