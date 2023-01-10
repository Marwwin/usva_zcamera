<script lang="ts">
    import type { ChoiseSettings } from '../../../types/settings';

    export let name: string;
    export let setting: ChoiseSettings;
    const { key, opts, value } = setting;
</script>

<div class="widget">
    <h5>{name}</h5>
    <input type="checkbox" id={`toggle_${key}`} class="checkbox" />
    <label for={`toggle_${key}`} class="toggle">
        <p>{opts[0]} {opts[1]}</p>
    </label>
</div>

<style>
    /* toggle in label designing */
    .toggle {
        position: relative;
        display: inline-block;
        width: 3em;
        height: 1em;
        background-color: red;
        border-radius: 30px;
        border: 1px solid gray;
    }

    /* After slide changes */
    .toggle:after {
        content: '';
        position: absolute;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: gray;
        top: 0px;
        left: 1px;
        transition: all 0.5s;
    }

    /* Toggle text */
    p {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: smaller;
    }

    /* Checkbox checked effect */
    .checkbox:checked + .toggle::after {
        left: 30px;
    }

    /* Checkbox checked toggle label bg color */
    .checkbox:checked + .toggle {
        background-color: green;
    }

    /* Checkbox vanished */
    .checkbox {
        display: none;
    }
</style>
