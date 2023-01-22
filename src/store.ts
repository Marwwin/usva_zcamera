import { writable, type Writable } from 'svelte/store';
import type { Settings } from './types/settings';
import type { CameraError } from './types/error';

interface CameraSettings {
    [key: string]: Settings | CameraError[];
    errors: CameraError[];
}

const createCameraSettingsStore = () => {
    const store: Writable<CameraSettings> = writable({errors: [],});
    return {
        subscribe: store.subscribe,
        list: () => {
            console.log(Object.keys(store));
        },
        has: (key: string) => Object.keys(store).includes(key),
        create: (key: string) => (store[key] = { value: '' }),
        setEntry: (settings: Settings) =>
            store.update((current) => {
                return { ...current, [settings.key]: settings };
            }),
        setValue: (key: string, value: string | number) =>
            store.update((current) => {
                current[key] = { ...current[key], value };
                return { ...current };
            }),
        addError: (error) => {
            store.update((current) => {
                const errors = current.errors;
                errors.push(error);
                return { ...current, errors };
            });
        },
        clearErrors: () => {
            store.update((current) => {
                return { ...current, errors: [] };
            });
        },
    };
};

export const cameraSettings = createCameraSettingsStore();
