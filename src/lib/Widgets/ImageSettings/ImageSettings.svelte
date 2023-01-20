<script>
    import { registeredSettings as settings } from '../../registeredSettings';
    import { cameraSettings } from '../../../store';
    import DropDownWidget from '../../common/widgets/DropDownWidget.svelte';
</script>

<div id="image_settings">
    <DropDownWidget setting={$cameraSettings[settings.movvfr]} />
    <DropDownWidget setting={$cameraSettings[settings.lut]} />
    <DropDownWidget setting={$cameraSettings[settings.rec_fps]} />
</div>

<style>
    #image_settings {
        position: absolute;
        top: 95vh;
        left: 70vw;
        display: flex;

    }
</style>
