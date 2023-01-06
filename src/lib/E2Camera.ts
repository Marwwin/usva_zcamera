const CAMERA_IP = new URL(`http://${import.meta.env.VITE_CAMERA}`).href;

export const camera = {
    getInformation: async () => await fetch(`${CAMERA_IP}info`),
    getSession: async () => await fetch(`${CAMERA_IP}ctrl/session`),
    quitSession: async () =>
        await fetch(`${CAMERA_IP}ctrl/session?action=quit`),
    syncCamera: async () =>
        await fetch(`${CAMERA_IP}datetime?date=YYYY-MM-DD&time=hh:mm:ss`),
    shutdown: async () => await fetch(`${CAMERA_IP}ctrl/shutdown`),
    reboot: async () => await fetch(`${CAMERA_IP}ctrl/reboot`),

    queryWorkMode: async () =>
        await fetch(`${CAMERA_IP}ctrl/mode?action=query`),
    setRecordMode: async () =>
        await fetch(`${CAMERA_IP}ctrl/mode?action=to_rec`),
    setPlaybackMode: async () =>
        await fetch(`${CAMERA_IP}ctrl/mode?action=to_pb`),
    setStandbyMode: async () =>
        await fetch(`${CAMERA_IP}ctrl/mode?action=to_standby`),

    startRecord: async () => await fetch(`${CAMERA_IP}ctrl/rec?action=start`),
    stopRecord: async () => await fetch(`${CAMERA_IP}ctrl/rec?action=stop`),
    getRemainingRecordTime: async () =>
        await fetch(`${CAMERA_IP}ctrl/rec?action=remain`),

    panLeft: async (speed: number) =>
        await fetch(
            `${CAMERA_IP}ctrl/pt?action=left&speed=${speed.toString(16)} `,
        ),
    panRight: async (speed: number) =>
        await fetch(
            `${CAMERA_IP}ctrl/pt?action=right&speed=${speed.toString(16)}`,
        ),
    tiltUp: async (speed: number) =>
        await fetch(
            `${CAMERA_IP}ctrl/pt?action=up&speed=${speed.toString(16)}`,
        ),
    tiltDown: async (speed: number) =>
        await fetch(
            `${CAMERA_IP}ctrl/pt?action=down&speed=${speed.toString(16)}`,
        ),
    stopPanTilt: async () => await fetch(`${CAMERA_IP}ctrl/pt?action=stop`),

    set: async (key: string, value: string) =>
        await fetch(`${CAMERA_IP}ctrl/set?${key}=${value}`),
    get: async (key: string) => await fetch(`${CAMERA_IP}ctrl/get?k=${key}`),
};
