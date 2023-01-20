import { writable, type Writable } from 'svelte/store';
import { settings } from './lib/availableSettings';
import type { Settings } from './types/settings';

const createStore = () => {
    const store: Writable<Record<string, Settings>> = writable({});
    console.log(store);
    return {
        subscribe: store.subscribe,
        list: () => {
            console.log(Object.keys(store));
        },
        has: (key: string) => Object.keys(store).includes(key),
        create: (key: string) => (store[key] = { value: '' }),
        set: (keys: string, settings: Settings) =>
            store.update((current) => {
                console.log('setting', settings);
                return { ...current, key: settings };
            }),
        setValue: (key: string, value: string | number) =>
            store.update((current) => {
                current[key].value = value;
                return { ...current };
            }),
    };
};

export const cameraSettings = createStore();
