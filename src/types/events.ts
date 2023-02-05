import type { SettingsKeys, State } from "./cameraApi";

export const Events = {
    TEMP_UPDATE: 'TempUpdate',
    CONFIG_CHANGED: 'ConfigChanged',
    REC_UPDATE_DURATION: 'RecUpdateDur',
} as const;

type EventsKeys = keyof typeof Events;
export interface CameraEvent {
    what: typeof Events[EventsKeys];
    value: string | number;
    key: SettingsKeys | State;
}
