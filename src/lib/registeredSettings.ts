import { settings } from './settings_with_name.js';

export const list = [
    settings.contrast,
    settings.mf_drive,
    settings.lens_zoom,
    settings.lens_focus_pos,
    settings.iris,
    settings.iso,
    settings.shutter_angle,
    settings.mwb,
    settings.lut,
    settings.movvfr,
    settings.resolution,
    settings.video_encoder,
    settings.audio_output_gain,
    settings.battery,
];

export const registeredSettings = Object.fromEntries(
    list.map((s) => [s.key, s.key]),
);

