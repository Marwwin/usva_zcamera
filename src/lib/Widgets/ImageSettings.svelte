<script>
    import { cameraSettings } from '../../store';
    import { settingsKeys } from '../../types/cameraApi';
    import DropDownWidget from '../common/widgets/DropDownWidget.svelte';
</script>

<div id="image_settings">
    <DropDownWidget setting={$cameraSettings[settingsKeys.movvfr]} />
    <DropDownWidget setting={$cameraSettings[settingsKeys.movfmt]} />
    <DropDownWidget setting={$cameraSettings[settingsKeys.resolution]} />
    <DropDownWidget setting={$cameraSettings[settingsKeys.video_encoder]} />
    <DropDownWidget setting={$cameraSettings[settingsKeys.lut]} />
</div>

<style>
    #image_settings {
        position: absolute;
        top: 95vh;
        left: 66vw;
        display: flex;
    }
</style>
