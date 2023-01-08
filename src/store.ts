import { writable, type Writable } from 'svelte/store';
import { settings } from './lib/settings';

const createStore = () => {
    const { subscribe, set, update }: Writable<Record<string, unknown>> =
        writable(settings);
    return {
        subscribe,
        update,
    };
};

export const cameraSettings = createStore();
