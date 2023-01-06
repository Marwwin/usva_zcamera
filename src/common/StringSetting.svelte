<script lang="ts">
    import type { Setting } from '../types/settings';

    export let setting: Setting;
    export let name: string;
    let { value } = setting;
</script>

<div>
    <h3>{name}</h3>
    <h5>{value}</h5>
</div>
