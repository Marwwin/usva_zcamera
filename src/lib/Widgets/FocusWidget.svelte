<script lang="ts">
    import { cameraSettings } from '../../store';
    import { settingsKeys } from '../../types/cameraApi';
    import RangeWidget from '../common/widgets/RangeWidget.svelte';
</script>

<div id="focus">
<RangeWidget
    name={'Lens Focus Position'}
    setting={$cameraSettings[settingsKeys.lens_focus_pos]}>
    {$cameraSettings[settingsKeys.lens_focus_pos].value}
</RangeWidget>
</div>
<style>
    #focus :global(input) {
        -webkit-appearance: slider-vertical;
        appearance: slider-vertical;  
    }
</style>
