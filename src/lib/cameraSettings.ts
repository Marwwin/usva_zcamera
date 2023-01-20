import { settings as allSettings } from "./availableSettings";

export const registered = [
    allSettings.contrast,
    allSettings.mf_drive,
    allSettings.lens_zoom,
    allSettings.lens_focus_pos,
    allSettings.iris,
    allSettings.iso,
    allSettings.shutter_angle,
    allSettings.mwb,
    allSettings.lut,
    allSettings.movvfr,
    allSettings.movfmt,
    allSettings.resolution,
    allSettings.video_encoder,
    allSettings.audio_output_gain,
];

export const settings = Object.fromEntries(
    registered.map((key) => [key, key]),
);

