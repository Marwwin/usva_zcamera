<script lang="ts">
    import { cameraSettings } from '../../store';
    import { Events, type CameraEvent } from '../../types/events';

    const ws = new WebSocket(`ws://${import.meta.env.VITE_CAMERA}:81/`);

    ws.onopen = () => {};
    ws.onmessage = ({ data }: MessageEvent<string>) => {
        const { what, value, key }: CameraEvent = JSON.parse(data);
        
        if (what === 'RecUpdateDur') return;
        console.log(data);
        if (what === Events.TEMP_UPDATE) cameraSettings.setValue('temp', value);
        if (what === Events.CONFIG_CHANGED) cameraSettings.setValue(key, value);
    };
</script>
