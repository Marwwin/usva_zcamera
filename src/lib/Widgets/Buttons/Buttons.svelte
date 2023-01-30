<script>
    import { cameraSettings } from '../../../store';
    import { settings } from '../../cameraSettings';
    import BooleanWidget from '../../common/widgets/BooleanWidget.svelte';
</script>

<div id="buttons">
    <BooleanWidget setting={$cameraSettings[settings.focus]} />
    <BooleanWidget setting={$cameraSettings[settings.assitool_peak_onoff]} />
    <BooleanWidget setting={$cameraSettings[settings.rotation]} />

</div>

<style>
    #buttons {
        display: flex;
        position: absolute;
        top: 95vh;
        left: 40vw;
    }
</style>
