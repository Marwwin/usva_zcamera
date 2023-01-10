<script lang="ts">
    import { settings } from '../settings';
    import SettingsWidget from './SettingsWidget.svelte';
</script>

<div>
    <h3>Exposure</h3>
    <div class="exposure">
        <SettingsWidget name={'Meter Mode'} setting={settings.meter_mode} />
        <SettingsWidget name={'ISO'} setting={settings.iso} />
        <SettingsWidget name={'IRIS'} setting={settings.iris} />
        <SettingsWidget
            name={'Shutter Angle'}
            setting={settings.shutter_angle} />

        <SettingsWidget name={'Shutter Time'} setting={settings.shutter_time} />

        <SettingsWidget
            name={'SHT Operation'}
            setting={settings.sht_operation} />
        <SettingsWidget name={'AE Freeze'} setting={settings.ae_freeze} />
        <SettingsWidget name={'Max ISO'} setting={settings.max_iso} />
        <SettingsWidget name={'EV'} setting={settings.ev_choice} />
        <SettingsWidget
        name={'Max EXP Shutter Time'}
        setting={settings.max_exp_shutter_time} />
        <SettingsWidget
            name={'Max EXP Shutter Angle'}
            setting={settings.max_exp_shutter_angle} />
        <SettingsWidget
            name={'Live AE F-Number'}
            setting={settings.live_ae_fno} />
        <SettingsWidget name={'Live AE ISO'} setting={settings.live_ae_iso} />
        <SettingsWidget
            name={'Live AE Shutter'}
            setting={settings.live_ae_shutter} />
        <SettingsWidget
            name={'Live AE Shutter Angle'}
            setting={settings.live_ae_shutter_angle} />
    </div>
</div>

<style>
    .exposure {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid whitesmoke;
        border-radius: 1em;
        width: 32em;
        margin: 1em;
    }
</style>
