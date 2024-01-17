import type { Setting } from '../types/cameraApi';

const fetcher = createFetcher(
    new URL(`http://${import.meta.env.VITE_CAMERA}`).href,
);

export const camera = {
    ping: async () => {
        const data = await fetcher(`info`).catch((e) => new Error(e));
        if (data instanceof Error) return false;
        return true;
    },
    getSession: async () => await fetcher(`ctrl/session`),
    quitSession: async () => await fetcher(`ctrl/session?action=quit`),
    syncCamera: async () =>
        await fetcher(`datetime?date=YYYY-MM-DD&time=hh:mm:ss`),

    ///////////////////////
    // Work Modes
    ///////////////////////

    queryWorkMode: async () => await fetcher(`ctrl/mode?action=query`),
    setRecordMode: async () => await fetcher(`ctrl/mode?action=to_rec`),
    setPlaybackMode: async () => await fetcher(`ctrl/mode?action=to_pb`),
    setStandbyMode: async () => await fetcher(`ctrl/mode?action=to_standby`),

    ///////////////////////
    // Record
    ///////////////////////

    startRecord: async () => await fetcher(`ctrl/rec?action=start`),
    stopRecord: async () => await fetcher(`ctrl/rec?action=stop`),
    getRemainingRecordTime: async () => {
        const data = await fetcher(`ctrl/rec?action=remain`);
        const json = await data.json();
        return json.msg;
    },

    ///////////////////////
    // Pan&Tilt
    ///////////////////////

    panLeft: async (speed: number) =>
        await fetcher(`ctrl/pt?action=left&speed=${toHex(speed)}`),
    panRight: async (speed: number) =>
        await fetcher(`ctrl/pt?action=right&speed=${toHex(speed)}`),
    tiltUp: async (speed: number) =>
        await fetcher(`ctrl/pt?action=up&speed=${toHex(speed)}`),
    tiltDown: async (speed: number) =>
        await fetcher(`ctrl/pt?action=down&speed=${toHex(speed)}`),
    stopPanTilt: async () => await fetcher(`ctrl/pt?action=stop`),

    ///////////////////////
    // TimeCode
    ///////////////////////

    setTimeCodeCurrentTime: async () =>
        await fetcher(`ctrl/tc?action=current_time`),
    setTimeCodeReset: async () => await fetcher(`ctrl/tc?action=reset`),
    setTimeCodeManual: async (timeCode: string) =>
        await fetcher(`ctrl/tc?action=set&tc=${timeCode}`),

    ///////////////////////
    // Misc
    ///////////////////////

    formatSdCard: async () => await fetcher(`ctrl/card?action=format`),
    clearSEttings: async () => await fetcher(`ctrl/set?action=clear`),
    shutdown: async () => await fetcher(`ctrl/shutdown`),
    reboot: async () => await fetcher(`ctrl/reboot`),
    setCameraId: async (cameraId: string) =>
        await fetcher(`ctrl/set?camera_id=${cameraId}`),

    ///////////////////////
    // AF
    ///////////////////////

    setROI: async (x: number, y: number) =>
        await fetcher(`ctrl/af?action=update_roi_center&x=${x}&y=${y}`),
    // await fetcher(`ctrl/af?action=update_roi&x=${x}&y=${y}&w=100&h=100`),

    ///////////////////////
    // Get Files
    ///////////////////////

    getFolders: async () => {
        const data = await fetcher('DCIM/');
        const json = await data.json();
        return json.files;
    },
    getFiles: async (folder: string) => {
        const data = await fetcher(`DCIM/${folder}`);
        const json = await data.json();
        return json.files;
    },

    getFileInfo: async (folder: string, file: string) => {
        const data = await fetcher(`DCIM/${folder}/${file}?act=info`);
        const json = await data.json();
        return json;
    },
    getThumbnailURL: async (folder: string, file: string) => {
        return new URL(
            `http://${
                import.meta.env.VITE_CAMERA
            }/DCIM/${folder}/${file}?act=thm`,
        ).href;
        //  const data = await fetcher(`DCIM/${folder}/${file}?act=thm`);
        //  return data.url;
    },
    getDownloadFileURL: async (folder: string, file: string) => {
        return new URL(
            `http://${import.meta.env.VITE_CAMERA}/DCIM/${folder}/${file}`,
        ).href;
        //const data = await fetcher(`DCIM/${folder}/${file}`);
        //console.log(data);
        //return data.url;
    },
    ///////////////////////
    // Get Set
    ///////////////////////

    set: async (key: string, value: string): Promise<Setting> => {
        const data = await fetcher(`ctrl/set?${key}=${value}`);
        const json = await data.json();
        // if (json.code !== 0) cameraSettings.addError(json);
        return json;
    },
    get: async (key: string): Promise<Setting> => {
        const data = await fetcher(`ctrl/get?k=${key}`);
        return await data.json();
    },
    getAll: async (cameraSettings: Record<string, unknown>) =>
        await fetchAllSettings(cameraSettings),
};

async function fetchAllSettings(settings: Record<string, unknown>) {
    const result: Record<string, unknown> = {};
    for (const key of Object.keys(settings)) {
        try {
            const data = await fetcher(`ctrl/get?k=${key}`);
            const json = await data.json();
            result[key] = json;
        } catch {
            result[key] = settings[key];
        }
    }
    return result;
}

function createFetcher(url: string) {
    return async (endPoint: string) => await fetch(`${url}${endPoint}`);
}

function toHex(number) {
    return number.toString(16);
}
