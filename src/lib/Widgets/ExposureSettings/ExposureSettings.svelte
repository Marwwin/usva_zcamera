<script lang="ts">
    import {  settings } from '../../cameraSettings';
    import { cameraSettings } from '../../../store';
    import ChoiseWidget from '../../common/widgets/ChoiseWidget.svelte';
    import RangeWidget from '../../common/widgets/RangeWidget.svelte';
    import DropDownWidget from '../../common/widgets/DropDownWidget.svelte';
    console.log("iris",$cameraSettings["iris"], settings.iris,$cameraSettings[settings.iris]);
    
</script>

<div id="exposure">
    <DropDownWidget name="F" setting={$cameraSettings[settings.iris]} horisontal>
        {$cameraSettings[settings.iris].value}
    </DropDownWidget>
    <DropDownWidget name="ISO" setting={$cameraSettings[settings.iso]} horisontal>
        {$cameraSettings[settings.iso].value}
    </DropDownWidget>
    <DropDownWidget
        name="Shutter Angle"
        setting={$cameraSettings[settings.shutter_angle]}
        horisontal>
        {$cameraSettings[settings.shutter_angle].value}
    </DropDownWidget>
    <RangeWidget name="K" setting={$cameraSettings[settings.mwb]} horisontal>
        {$cameraSettings[settings.mwb].value}
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
