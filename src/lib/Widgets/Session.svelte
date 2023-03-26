<script lang="ts">
    import { cameraSettings } from '../../store';
    import { camera } from '../Camera';
    import Button from '../common/Button.svelte';
    import StringWidget from '../common/widgets/StringWidget.svelte';
</script>

<div id="session">
    <Button text={"End Session"} onClick={()=> camera.quitSession()}></Button>
</div>

<style>
    #session {
        display: flex;
        position: absolute;
        left: 75vw;
    }
</style>
