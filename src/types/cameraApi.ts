type Setting = Pick<
    ApiResponse,
    'code' | 'desc' | 'key' | 'type' | 'ro' | 'value'
> &
    Partial<Pick<ApiResponse, 'opts' | 'min' | 'max' | 'step' >>;
export interface ApiResponse {
    code: number;
    desc: string;
    msg: string;
    key: string;
    type: number;
    ro: number;
    opts: string[];
    min: number;
    max: number;
    step: number;
    value: string | number;
    files: string[];
    w: number;
    h: number;
    vts: number;
    vcnt: number;
    dur: number;
    enable: number;
    r: number;
    gr: number;
    gb: number;
    b: number;
}

type State = 'temp' | 'battery_voltage';

const settingsKeys = {
    movfmt: 'movfmt',
    resolution: 'resolution',
    project_fps: 'project_fps',
    record_file_format: 'record_file_format',
    rec_proxy_file: 'rec_proxy_file',
    video_encoder: 'video_encoder',
    split_duration: 'split_duration',
    bitrate_level: 'bitrate_level',
    compose_mode: 'compose_mode',
    movvfr: 'movvfr',
    rec_fps: 'rec_fps',
    video_tl_interval: 'video_tl_interval',
    enable_video_tl: 'enable_video_tl',
    rec_duration: 'rec_duration',
    last_file_name: 'last_file_name',
    focus: 'focus',
    af_mode: 'af_mode',
    mf_drive: 'mf_drive',
    lens_zoom: 'lens_zoom',
    ois_mode: 'ois_mode',
    af_lock: 'af_lock',
    lens_zoom_pos: 'lens_zoom_pos',
    lens_focus_pos: 'lens_focus_pos',
    lens_focus_spd: 'lens_focus_spd',
    caf: 'caf',
    caf_sens: 'caf_sens',
    live_caf: 'live_caf',
    mf_mag: 'mf_mag',
    restore_lens_pos: 'restore_lens_pos',
    meter_mode: 'meter_mode',
    max_iso: 'max_iso',
    ev_choice: 'ev_choice',
    iso: 'iso',
    iris: 'iris',
    shutter_angle: 'shutter_angle',
    max_exp_shutter_angle: 'max_exp_shutter_angle',
    shutter_time: 'shutter_time',
    max_exp_shutter_time: 'max_exp_shutter_time',
    sht_operation: 'sht_operation',
    ae_freeze: 'ae_freeze',
    live_ae_fno: 'live_ae_fno',
    live_ae_iso: 'live_ae_iso',
    live_ae_shutter: 'live_ae_shutter',
    live_ae_shutter_angle: 'live_ae_shutter_angle',
    wb: 'wb',
    mwb: 'mwb',
    tint: 'tint',
    wb_priority: 'wb_priority',
    mwb_r: 'mwb_r',
    mwb_g: 'mwb_g',
    mwb_b: 'mwb_b',
    sharpness: 'sharpness',
    contrast: 'contrast',
    saturation: 'saturation',
    brightness: 'brightness',
    lut: 'lut',
    luma_level: 'luma_level',
    vignette: 'vignette',
    send_stream: 'send_stream',
    primary_audio: 'primary_audio',
    audio_channel: 'audio_channel',
    audio_input_gain: 'audio_input_gain',
    audio_output_gain: 'audio_output_gain',
    audio_phantom_power: 'audio_phantom_power',
    ain_gain_type: 'ain_gain_type',
    tc_count_up: 'tc_count_up',
    tc_hdmi_dispaly: 'tc_hdmi_dispaly',
    tc_drop_frame: 'tc_drop_frame',
    assitool_display: 'assitool_display',
    assitool_peak_onoff: 'assitool_peak_onoff',
    assitool_peak_color: 'assitool_peak_color',
    assitool_exposure: 'assitool_exposure',
    assitool_zera_th1: 'assitool_zera_th1',
    assitool_zera_th2: 'assitool_zera_th2',
    ssid: 'ssid',
    flicker: 'flicker',
    video_system: 'video_system',
    wifi: 'wifi',
    battery: 'battery',
    led: 'led',
    lcd_backlight: 'lcd_backlight',
    hdmi_fmt: 'hdmi_fmt',
    hdmi_osd: 'hdmi_osd',
    usb_device_role: 'usb_device_role',
    uart_role: 'uart_role',
    auto_off: 'auto_off',
    sn: 'sn',
    desqueeze: 'desqueeze',
    multiple_mode: 'multiple_mode',
    multiple_id: 'multiple_id',
    photosize: 'photosize',
    photo_q: 'photo_q',
    burst: 'burst',
    max_exp: 'max_exp',
    shoot_mode: 'shoot_mode',
    photo_tl_interval: 'photo_tl_interval',
    photo_tl_num: 'photo_tl_num',
    rotation: 'rotation',
} as const;

type SettingsKeys = Partial<keyof typeof settingsKeys>;

export type { Setting, State, SettingsKeys };
export { settingsKeys };
