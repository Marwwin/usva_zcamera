<script>
    import { cameraSettings } from '../../store';
    import { settingsKeys } from '../../types/cameraApi';
    import BooleanWidget from '../common/widgets/BooleanWidget.svelte';
</script>

<div id="buttons">
    <BooleanWidget setting={$cameraSettings[settingsKeys.focus]} />
    <BooleanWidget setting={$cameraSettings[settingsKeys.assitool_peak_onoff]} />
    <BooleanWidget setting={$cameraSettings[settingsKeys.rotation]} />

</div>

<style>
    #buttons {
        display: flex;
        position: absolute;
        top: 95vh;
        left: 40vw;
    }
</style>
