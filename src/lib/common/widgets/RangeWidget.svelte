<script lang="ts">
    import { camera } from '../../Camera';
    import type { Setting } from '../../../types/cameraApi';
    export let name: string;
    export let setting: Setting;
    export let horisontal: boolean = false;
    let { value, min, max, key, step } = setting;
        console.log(key)
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
