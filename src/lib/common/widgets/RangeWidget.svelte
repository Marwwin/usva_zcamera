<script lang="ts">
    import { camera } from '../../E2Camera';
    import type { RangeSettings, Settings } from '../../../types/settings';
    import { cameraSettings } from '../../../store';

    export let name: string;
    export let setting: Settings;
    export let horisontal: boolean = false;
    let { value, min, max, key, step } = <RangeSettings>setting;
    $: c = value;
</script>

<div class={`widget${horisontal ? ' horisontal' : ''}`}>
    <h5>{name}</h5>
    <input
        on:change={async (selected) => {
            const result = await camera.set(key, selected.currentTarget.value);
            console.log('change code', result);
            if (result.code != 0) {
                console.error('Error setting key');
            }
        }}
        type="range"
        name={key}
        id=""
        {min}
        {max}
        {step}
        {value} />
    <slot />
</div>

<style>
    .horisontal {
        display: flex;
        height: min-content;
    }
</style>
