<script lang="ts">
    import { cameraSettings } from '../../store';
    import ChoiseWidget from '../common/widgets/ChoiseWidget.svelte';
    import RangeWidget from '../common/widgets/RangeWidget.svelte';
    import DropDownWidget from '../common/widgets/DropDownWidget.svelte';
    import { settingsKeys } from '../../types/cameraApi';
</script>

<div id="exposure">
    <DropDownWidget name="F" setting={$cameraSettings[settingsKeys.iris]} horisontal>
        {$cameraSettings[settingsKeys.iris].value}
    </DropDownWidget>
    <DropDownWidget name="ISO" setting={$cameraSettings[settingsKeys.iso]} horisontal>
        {$cameraSettings[settingsKeys.iso].value}
    </DropDownWidget>
    <DropDownWidget
        name="Shutter Angle"
        setting={$cameraSettings[settingsKeys.shutter_angle]}
        horisontal>
        {$cameraSettings[settingsKeys.shutter_angle].value}
    </DropDownWidget>
    <RangeWidget name="K" setting={$cameraSettings[settingsKeys.mwb]} horisontal>
        {$cameraSettings[settingsKeys.mwb].value}
    </RangeWidget>
</div>

<style>
    #exposure {
        position: absolute;
        display: flex;
        width: 50vw;
        justify-content: space-evenly;
    }

    #exposure :global(.widget) {
        margin: 0;
        padding: 0;
    }
</style>
