<script lang="ts">
    import { camera } from '../../Camera';
    import type { Setting } from '../../../types/cameraApi';

    export let name: string = null;
    export let setting: Setting;
    export let horisontal: boolean = false;
    const { key, opts, value } = setting;
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
