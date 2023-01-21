<script lang="ts">
    import { camera } from '../../CameraAPI';
    import type { ChoiseSettings, Settings } from '../../../types/settings';

    export let name: string = null;
    export let setting: Settings;
    export let horisontal: boolean = false;
    console.log({setting, name});
    const { key, opts, value } = setting;
    console.log(key, value, opts)

</script>

<div class={`widget${horisontal ? ' horisontal' : ''}`}>
    {#if name}
        <h5>{name}</h5>
    {/if}
    <select
        on:change={(selected) => {
            camera.set(key, selected.currentTarget.value);
        }}>
        {#each opts as opt}
            <option value={opt} selected={opt === value}>{opt}</option>
        {/each}
    </select>
</div>

<style>
    .horisontal {
        display: flex;
        height: min-content;
    }
    select {
        border: 0px;
        outline: 0px;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
</style>
