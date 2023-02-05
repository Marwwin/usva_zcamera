import { writable, type Writable } from 'svelte/store';
import type { CameraError } from './types/error';
import type { Setting, SettingsKeys, State } from './types/cameraApi';
import { camera } from './lib/Camera';

function createCameraSettingsStore() {
    const store: Writable<Partial<Record<SettingsKeys & State, Setting>>> =
        writable({});
    return {
        subscribe: store.subscribe,
        init: async () => {
            for (const key of settingsKeysToLoadOnInit) {
                const settings = await camera.get(key);
                store.update((current) => {
                    return { ...current, [settings.key]: settings };
                });
            }
        },
        has: (key: SettingsKeys) => Object.keys(store).includes(key),
        create: (key: SettingsKeys) => (store[key] = { value: '' }),
        setEntry: (settings: Setting) =>
            store.update((current) => {
                return { ...current, [settings.key]: settings };
            }),
        setValue: (key: SettingsKeys | State, value: string | number) =>
            store.update((current) => {
                if (Object.keys(current).includes(key)) {
                    current[key] = { ...current[key], value };
                } else {
                    current[key] = { value };
                }
                return { ...current };
            }),
    };
}

const settingsKeysToLoadOnInit: SettingsKeys[] = [
    'contrast',
    'mf_drive',
    'lens_zoom',
    'lens_focus_pos',
    'iris',
    'iso',
    'shutter_angle',
    'mwb',
    'lut',
    'movvfr',
    'movfmt',
    'resolution',
    'video_encoder',
    'audio_output_gain',
    'focus',
    'assitool_peak_onoff',
    'rotation',
];

export const cameraSettings = createCameraSettingsStore();

function createErrorStore() {
    const store: Writable<CameraError[]> = writable([]);
    return {
        subscribe: store.subscribe,
        add: (error: CameraError) =>
            store.update((current) => {
                current.push(error);
                return [...current];
            }),
        pop: () =>
            store.update((current) => {
                current.pop();
                return [...current];
            }),
    };
}

export const cameraErrors = createErrorStore();
