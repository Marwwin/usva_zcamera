<script lang="ts">
    import {  settings } from '../cameraSettings';
    import SettingsWidget from '../common/SettingsWidget.svelte';
</script>

<div>
    <h3>Focus and Zoom</h3>
    <div class="focus_zoom">
        <SettingsWidget name={'Focus'} setting={settings.focus} />
        <SettingsWidget name={'AF Mode'} setting={settings.af_mode} />
        <SettingsWidget name={'MF Drive'} setting={settings.mf_drive} />
        <SettingsWidget name={'Lens Zoom'} setting={settings.lens_zoom} />
        <SettingsWidget name={'AF Lock'} setting={settings.af_lock} />
        <SettingsWidget
            name={'Lens Zoom Position'}
            setting={settings.lens_zoom_pos} />
        <SettingsWidget
            name={'Lens Focus Position'}
            setting={settings.lens_focus_pos} />
        <SettingsWidget
            name={'Lens Focus Speed'}
            setting={settings.lens_focus_spd} />
            <SettingsWidget
            name={'Restore Lens Position'}
            setting={settings.restore_lens_pos} />
        <SettingsWidget name={'Continous AF'} setting={settings.caf} />
        <SettingsWidget
            name={'Continous AF Sensitivity'}
            setting={settings.caf_sens} />
        <SettingsWidget name={'Live CAF'} setting={settings.live_caf} />
        <SettingsWidget name={'MF Mag'} setting={settings.mf_mag} />

    </div>
</div>

<style>
    .focus_zoom {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid whitesmoke;
        border-radius: 1em;
        width: 32em;
        margin: 1em;
    }
</style>
