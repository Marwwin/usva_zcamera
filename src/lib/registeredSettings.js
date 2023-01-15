import { settings } from './settings_with_name.js';

export const list = [
    settings.contrast,
    settings.mf_drive,
    settings.lens_zoom,
    settings.lens_focus_pos,
];

export const registeredSettings = Object.fromEntries(
    list.map((s) => [s.key, s.key]),
);

