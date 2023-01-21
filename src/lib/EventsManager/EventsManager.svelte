<script lang="ts">
    import { cameraSettings } from "../../store";
    import { Events } from "../../types/events";


const ws = new WebSocket(`ws://${import.meta.env.VITE_CAMERA}:81/`);

ws.onopen = () => {

};
ws.onmessage = (e: any) => {
    const { what, value, key = '' } = JSON.parse(e.data);

    if (what === 'RecUpdateDur') return;
    if (what === Events.TEMP_UPDATE) {
        cameraSettings.setValue('temp', value);
    }
    if (what === Events.CONFIG_CHANGED)
        if (key === 'battery_voltage') {
            cameraSettings.setValue(key, value);
        }
};

</script>