<script lang="ts">
    import { registeredSettings as settings } from '../../registeredSettings';
    import { cameraSettings } from '../../../store';
    import StringWidget from '../../common/widgets/StringWidget.svelte';

    function formatTemp(value:string | number):string{
      return `${value}°C`;
    }

    function formatBattery(value:string | number):string{
      const string = value.toString();
      const last = string.slice(-1)
      const first = string.substring(0,string.length-1);
      return `${first}.${last}V`;
    }

</script>

<div id="temp_battery">
    <StringWidget value={formatTemp($cameraSettings['temp'].value)} />
    <StringWidget value={formatBattery($cameraSettings['battery_voltage'].value)} />
</div>

<style>
    #temp_battery {
        display: flex;
        position: absolute;
        left: 90vw;
    }
</style>
