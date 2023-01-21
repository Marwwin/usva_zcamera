import { writable, type Writable } from 'svelte/store';
import type { Settings } from './types/settings';

const createStore = () => {
    const store: Writable<Record<string, Settings>> = writable({});
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
                current[key] = { ...current[key], value}
                return { ...current,  };
            }),
    };
};

export const cameraSettings = createStore();
