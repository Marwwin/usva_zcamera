<script lang="ts">
    import { camera } from '../../E2Camera';
    import type { RangeSettings } from '../../../types/settings';
    import { cameraSettings } from '../../../store';

    export let name: string;
    export let setting: RangeSettings;

    let { value, min, max, key, step } = setting;
    cameraSettings.subscribe((v) => {
        console.log(v);
    });
</script>

<div class="widget">
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
    <div>{value}</div>
</div>
