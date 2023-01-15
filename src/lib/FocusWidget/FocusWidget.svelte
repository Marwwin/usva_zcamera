<script lang="ts">
    import { registeredSettings as settings } from '../registeredSettings';
    import { cameraSettings } from '../../store';
    import SettingsWidget from '../Settings/SettingsWidget.svelte';
    import RangeWidget from '../common/widgets/RangeWidget.svelte';
</script>

<RangeWidget
    name={'Lens Focus Position'}
    setting={$cameraSettings[settings.lens_focus_pos]}>
    {$cameraSettings[settings.lens_focus_pos].value}
</RangeWidget>

<style>
    input {
        -webkit-appearance: slider-vertical;
    }
</style>
