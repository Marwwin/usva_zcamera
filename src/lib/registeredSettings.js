import { settings } from './settings_with_name.js';

export const list = [
    settings.contrast,
    settings.mf_drive,
    settings.lens_zoom,
    settings.lens_focus_pos,
    settings.iris,
    settings.iso,
    settings.shutter_angle,
    settings.mwb
];

export const registeredSettings = Object.fromEntries(
    list.map((s) => [s.key, s.key]),
);

