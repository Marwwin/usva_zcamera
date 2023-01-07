import { writable } from 'svelte/store';
import { settings } from './lib/settings';

const createStore = () => {
    const { subscribe, set, update } = writable(settings);
    return {
        subscribe,
        update,
    };
};

export const cameraSettings = createStore();
