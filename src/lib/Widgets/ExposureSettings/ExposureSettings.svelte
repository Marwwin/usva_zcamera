<script lang="ts">
    import { registeredSettings as settings } from '../../registeredSettings';
    import { cameraSettings } from '../../../store';
    import ChoiseWidget from '../../common/widgets/ChoiseWidget.svelte';
    import RangeWidget from '../../common/widgets/RangeWidget.svelte';
</script>

<div>
    <ChoiseWidget name="F" setting={$cameraSettings[settings.iris]}>
        {$cameraSettings[settings.iris].value}
    </ChoiseWidget>
    <ChoiseWidget name="ISO" setting={$cameraSettings[settings.iso]}>
        {$cameraSettings[settings.iso].value}
    </ChoiseWidget>
    <ChoiseWidget
        name="Shutter Angle"
        setting={$cameraSettings[settings.shutter_angle]}>
        {$cameraSettings[settings.shutter_angle].value}
    </ChoiseWidget>
    <RangeWidget
        name="K"
        setting={$cameraSettings[settings.mwb]}>
        {$cameraSettings[settings.mwb].value}
    </RangeWidget>
</div>
