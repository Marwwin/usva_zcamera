import { writable, type Writable } from 'svelte/store';

const createStore = () => {
    const store: Writable<Record<string, Record<string, unknown>>> = writable({});
    return {
        subscribe: store.subscribe,
        list: () => {console.log(Object.keys(store))},
        setValue: (ke, v) => store.update((current) => { 
            current[ke] = v;
            return {...current}
         })
    };
};

export const cameraSettings = createStore();
