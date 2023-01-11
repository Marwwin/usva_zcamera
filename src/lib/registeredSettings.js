import { settings } from './settings_with_name.js';

export const list = [settings.contrast, settings.mf_drive];

export const registeredSettings = {}

list.forEach(l => registeredSettings[l.key] = l)