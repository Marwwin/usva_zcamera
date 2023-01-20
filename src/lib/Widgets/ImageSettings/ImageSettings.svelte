<script>
    import {  settings } from '../../cameraSettings';
    import { cameraSettings } from '../../../store';
    import DropDownWidget from '../../common/widgets/DropDownWidget.svelte';
    console.log($cameraSettings[settings.movvfr])
</script>

<div id="image_settings">
    <DropDownWidget setting={$cameraSettings[settings.movvfr]} />
    <DropDownWidget setting={$cameraSettings[settings.movfmt]} />
    <DropDownWidget setting={$cameraSettings[settings.resolution]} />
    <DropDownWidget setting={$cameraSettings[settings.video_encoder]} />
    <DropDownWidget setting={$cameraSettings[settings.lut]} />

</div>

<style>
    #image_settings {
        position: absolute;
        top: 95vh;
        left: 70vw;
        display: flex;

    }
</style>
