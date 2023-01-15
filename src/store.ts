import { writable, type Writable } from 'svelte/store';
import type { Settings } from './types/settings';

const createStore = () => {
    const store: Writable<Record<string,  Settings>> = writable({});
    return {
        subscribe: store.subscribe,
        list: () => {console.log(Object.keys(store))},
        setEntry: (ke, v) => store.update((current) => { 
            current[ke] = v;
            return {...current}
         }),
         setValue: (ke, v) => store.update((current) => { 
            current[ke].value = v;
            return {...current}
         })
    };
};

export const cameraSettings = createStore();
