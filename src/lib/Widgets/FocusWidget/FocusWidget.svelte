<script lang="ts">
    import { registeredSettings as settings } from '../../registeredSettings';
    import { cameraSettings } from '../../../store';
    import RangeWidget from '../../common/widgets/RangeWidget.svelte';
</script>

<div id="focus">
<RangeWidget
    name={'Lens Focus Position'}
    setting={$cameraSettings[settings.lens_focus_pos]}>
    {$cameraSettings[settings.lens_focus_pos].value}
</RangeWidget>
</div>
<style>
    #focus :global(input) {
        -webkit-appearance: slider-vertical;
        appearance: slider-vertical;  
    }
</style>
