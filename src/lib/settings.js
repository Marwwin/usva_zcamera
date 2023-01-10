export const settings = {
    movfmt: {
        code: 0,
        desc: 'string',
        key: 'movfmt',
        type: 1,
        ro: 0,
        value: 'C4KP25',
        opts: [
            '4KP23.98 (Low Noise)',
            '4KP29.97 (Low Noise)',
            'C4KP23.98 (Low Noise)',
            'C4KP29.97 (Low Noise)',
            '4KP23.98',
            '4KP29.97',
            '4KP59.94',
            '4K 2.4:1P23.98',
            '4K 2.4:1P29.97',
            '4K 2.4:1P59.94',
            'C4KP23.98',
            'C4KP29.97',
            'C4KP59.94',
            'C4K 2.4:1P23.98',
            'C4K 2.4:1P29.97',
            'C4K 2.4:1P59.94',
            '3696x2772P23.98 (Low Noise)',
            '3696x2772P29.97 (Low Noise)',
            '3696x2772P23.98',
            '3696x2772P29.97',
            '3696x2772P59.94',
            '3312x2760P23.98',
            '3312x2760P29.97',
            '3312x2760P59.94',
            '1080P23.98',
            '1080P29.97',
            '1080P59.94',
            'S16 23.98',
            'S16 29.97',
            'S16 59.94',
            'S16 16:9 23.98',
            'S16 16:9 29.97',
            'S16 16:9 59.94',
            '4KP25 (Low Noise)',
            'C4KP25 (Low Noise)',
            '4KP25',
            '4KP50',
            '4K 2.4:1P25',
            '4K 2.4:1P50',
            'C4KP25',
            'C4KP50',
            'C4K 2.4:1P25',
            'C4K 2.4:1P50',
            '3696x2772P25 (Low Noise)',
            '3696x2772P25',
            '3696x2772P50',
            '3312x2760P25',
            '3312x2760P50',
            '1080P25',
            '1080P50',
            'S16 25',
            'S16 50',
            'S16 16:9 25',
            'S16 16:9 50',
            '4KP24 (Low Noise)',
            'C4KP24 (Low Noise)',
            '4K 2.4:1P24',
            '4KP24',
            'C4K 2.4:1P24',
            'C4KP24',
            '3696x2772P24 (Low Noise)',
            '3696x2772P24',
            '3312x2760P24',
            '1080P24',
            'S16 24',
            'S16 16:9 24',
        ],
        all: [],
    },
    resolution: {
        code: 0,
        desc: 'string',
        key: 'resolution',
        type: 1,
        ro: 0,
        value: 'C4K',
        opts: [
            'C4K (Low Noise)',
            '4K (Low Noise)',
            'C4K',
            '4K',
            'C4K 2.4:1',
            '4K 2.4:1',
            '3696x2772 (Low Noise)',
            '3696x2772',
            '3312x2760',
            'S16',
            'S16 16:9',
            '1920x1080',
        ],
        all: [],
    },
    project_fps: {
        code: 0,
        desc: 'string',
        key: 'project_fps',
        type: 1,
        ro: 0,
        value: '25',
        opts: ['23.98', '24', '25', '29.97', '50', '59.94'],
        all: ['23.98', '24', '25', '29.97', '50', '59.94'],
    },
    record_file_format: {
        code: 0,
        desc: 'string',
        key: 'record_file_format',
        type: 1,
        ro: 0,
        value: 'MOV',
        opts: ['MOV', 'MP4'],
        all: [],
    },
    rec_proxy_file: {
        code: 0,
        desc: 'string',
        key: 'rec_proxy_file',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    video_encoder: {
        code: 0,
        desc: 'string',
        key: 'video_encoder',
        type: 1,
        ro: 0,
        value: 'H.265',
        opts: [
            'H.264',
            'H.265',
            'ProRes 422 Proxy',
            'ProRes 422 LT',
            'ProRes 422',
            'ProRes 422 HQ',
            'ZRAW',
        ],
        all: [
            'H.264',
            'H.265',
            'ProRes 422 Proxy',
            'ProRes 422 LT',
            'ProRes 422',
            'ProRes 422 HQ',
            'ZRAW',
        ],
    },
    split_duration: {
        code: 0,
        desc: 'string',
        key: 'split_duration',
        type: 1,
        ro: 0,
        value: '30min',
        opts: ['1min', '5min', '10min', '15min', '20min', '30min', '60min'],
        all: ['1min', '5min', '10min', '15min', '20min', '30min', '60min'],
    },
    bitrate_level: {
        code: 0,
        desc: 'string',
        key: 'bitrate_level',
        type: 1,
        ro: 0,
        value: 'High',
        opts: ['High', 'Medium', 'Low'],
        all: [],
    },
    compose_mode: {
        code: 0,
        desc: 'string',
        key: 'compose_mode',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    movvfr: {
        code: 0,
        desc: 'string',
        key: 'movvfr',
        type: 1,
        ro: 0,
        value: '50',
        opts: [
            'Off',
            '1',
            '5',
            '10',
            '15',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '30',
            '45',
            '48',
            '50',
            '60',
            '72',
            '75',
            '84',
            '90',
            '96',
            '100',
            '105',
            '108',
            '120',
        ],
        all: [
            'Off',
            '1',
            '5',
            '10',
            '15',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '30',
            '45',
            '48',
            '50',
            '60',
            '72',
            '75',
            '84',
            '90',
            '96',
            '100',
            '105',
            '108',
            '120',
        ],
    },
    rec_fps: {
        code: 0,
        desc: 'string',
        key: 'rec_fps',
        type: 1,
        ro: 0,
        value: 'Default',
        opts: ['Default', 'VFR'],
        all: [],
    },
    video_tl_interval: {
        code: 0,
        desc: 'string',
        key: 'video_tl_interval',
        type: 2,
        ro: 1,
        value: 1000,
        min: 200,
        max: 60000,
        step: 100,
    },
    enable_video_tl: {
        code: 0,
        desc: 'string',
        key: 'enable_video_tl',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    rec_duration: {
        code: 0,
        desc: 'string',
        key: 'rec_duration',
        type: 2,
        ro: 1,
        value: 0,
        min: 0,
        max: 2147483647,
        step: 1,
    },
    last_file_name: {
        code: -1,
        desc: 'string',
        key: 'last_file_name',
        type: 3,
        ro: 1,
        value: '',
    },
    focus: {
        code: 0,
        desc: 'string',
        key: 'focus',
        type: 1,
        ro: 0,
        value: 'AF',
        opts: ['MF', 'AF'],
        all: [],
    },
    af_mode: {
        code: 0,
        desc: 'string',
        key: 'af_mode',
        type: 1,
        ro: 0,
        value: 'Flexible Zone',
        opts: ['Flexible Zone'],
        all: ['Flexible Zone', 'Human Track'],
    },
    mf_drive: {
        code: 0,
        desc: 'string',
        key: 'mf_drive',
        type: 2,
        ro: 0,
        value: 0,
        min: -3,
        max: 3,
        step: 1,
    },
    lens_zoom: {
        code: 0,
        desc: 'string',
        key: 'lens_zoom',
        type: 1,
        ro: 0,
        value: 'unknown',
        opts: ['stop', 'in', 'out'],
        all: [],
    },
    ois_mode: {
        code: 0,
        desc: 'string',
        key: 'ois_mode',
        type: 1,
        ro: 1,
        value: 'Off',
        opts: ['Off'],
        all: [],
    },
    af_lock: {
        code: 0,
        desc: 'string',
        key: 'af_lock',
        type: 1,
        ro: 0,
        value: 'Unlock',
        opts: ['Unlock', 'Lock'],
        all: [],
    },
    lens_zoom_pos: {
        code: 0,
        desc: 'string',
        key: 'lens_zoom_pos',
        type: 2,
        ro: 0,
        value: 0,
        min: 0,
        max: 31,
        step: 1,
    },
    lens_focus_pos: {
        code: 0,
        desc: 'string',
        key: 'lens_focus_pos',
        type: 2,
        ro: 0,
        value: 2639,
        min: 2390,
        max: 3306,
        step: 1,
    },
    lens_focus_spd: {
        code: 0,
        desc: 'string',
        key: 'lens_focus_spd',
        type: 2,
        ro: 0,
        value: 1,
        min: 1,
        max: 39,
        step: 1,
    },
    caf: {
        code: 0,
        desc: 'string',
        key: 'caf',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    caf_sens: {
        code: 0,
        desc: 'string',
        key: 'caf_sens',
        type: 1,
        ro: 1,
        value: 'Middle',
        opts: ['High', 'Middle', 'Low'],
        all: [],
    },
    live_caf: {
        code: 0,
        desc: 'string',
        key: 'live_caf',
        type: 1,
        ro: 1,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    mf_mag: {
        code: 0,
        desc: 'string',
        key: 'mf_mag',
        type: 1,
        ro: 1,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    restore_lens_pos: {
        code: 0,
        desc: 'string',
        key: 'restore_lens_pos',
        type: 1,
        ro: 0,
        value: 'Disable',
        opts: ['Disable', 'Enable'],
        all: [],
    },
    meter_mode: {
        code: 0,
        desc: 'string',
        key: 'meter_mode',
        type: 1,
        ro: 0,
        value: 'Center',
        opts: ['Center', 'Average', 'Spot'],
        all: [],
    },
    max_iso: {
        code: 0,
        desc: 'string',
        key: 'max_iso',
        type: 1,
        ro: 1,
        value: '5000',
        opts: [
            '1000',
            '1250',
            '1600',
            '2000',
            '2500',
            '3200',
            '4000',
            '5000',
            '6400',
            '8000',
            '10000',
            '12800',
            '16000',
            '20000',
            '25600',
            '32000',
            '40000',
            '51200',
            '64000',
            '80000',
            '102400',
        ],
        all: [],
    },
    ev: {
        code: 0,
        desc: 'string',
        key: 'ev',
        type: 2,
        ro: 1,
        value: 0,
        min: -96,
        max: 96,
        step: 1,
    },
    ev_choice: {
        code: 0,
        desc: 'string',
        key: 'ev_choice',
        type: 1,
        ro: 1,
        value: '0',
        opts: [
            '-3.0',
            '-2.7',
            '-2.3',
            '-2.0',
            '-1.7',
            '-1.3',
            '-1.0',
            '-0.7',
            '-0.3',
            '0',
            '0.3',
            '0.7',
            '1.0',
            '1.3',
            '1.7',
            '2.0',
            '2.3',
            '2.7',
            '3.0',
        ],
        all: [],
    },
    iso: {
        code: 0,
        desc: 'string',
        key: 'iso',
        type: 1,
        ro: 0,
        value: '12800',
        opts: [
            'Auto',
            '500',
            '640',
            '800',
            '1000',
            '1250',
            '1600',
            '2000',
            '2500',
            '3200',
            '4000',
            '5000',
            '6400',
            '8000',
            '10000',
            '12800',
            '16000',
            '20000',
            '25600',
            '32000',
            '40000',
            '51200',
            '64000',
            '80000',
            '102400',
        ],
        all: [],
    },
    iris: {
        code: 0,
        desc: 'string',
        key: 'iris',
        type: 1,
        ro: 0,
        value: '3.5',
        opts: [
            '3.5',
            '4',
            '4.5',
            '5',
            '5.6',
            '6.3',
            '7.1',
            '8',
            '9',
            '10',
            '11',
            '13',
            '14',
            '16',
            '18',
            '20',
            '22',
        ],
        all: [],
    },
    shutter_angle: {
        code: 0,
        desc: 'string',
        key: 'shutter_angle',
        type: 1,
        ro: 0,
        value: '180°',
        opts: [
            'Auto',
            '1°',
            '2°',
            '4°',
            '5°',
            '8°',
            '10°',
            '11.25°',
            '15°',
            '22.5°',
            '30°',
            '37.5°',
            '45°',
            '60°',
            '72°',
            '75°',
            '90°',
            '108°',
            '120°',
            '144°',
            '150°',
            '172.8°',
            '180°',
            '216°',
            '270°',
            '324°',
            '360°',
        ],
        all: [],
    },
    max_exp_shutter_angle: {
        code: 0,
        desc: 'string',
        key: 'max_exp_shutter_angle',
        type: 1,
        ro: 1,
        value: 'Auto',
        opts: [
            'Auto',
            '1°',
            '2°',
            '4°',
            '5°',
            '8°',
            '10°',
            '11.25°',
            '15°',
            '22.5°',
            '30°',
            '37.5°',
            '45°',
            '60°',
            '72°',
            '75°',
            '90°',
            '108°',
            '120°',
            '144°',
            '150°',
            '172.8°',
            '180°',
            '216°',
            '270°',
            '324°',
            '360°',
        ],
        all: [],
    },
    shutter_time: {
        code: 0,
        desc: 'string',
        key: 'shutter_time',
        type: 1,
        ro: 0,
        value: '1/100',
        opts: [
            'Auto',
            '1/50',
            '1/55',
            '1/60',
            '1/80',
            '1/100',
            '1/110',
            '1/120',
            '1/125',
            '1/160',
            '1/200',
            '1/240',
            '1/250',
            '1/320',
            '1/400',
            '1/500',
            '1/640',
            '1/800',
            '1/1000',
            '1/1250',
            '1/1600',
            '1/2000',
            '1/2500',
            '1/3200',
            '1/4000',
            '1/5000',
            '1/6400',
            '1/8000',
        ],
        all: [],
    },
    max_exp_shutter_time: {
        code: 0,
        desc: 'string',
        key: 'max_exp_shutter_time',
        type: 1,
        ro: 1,
        value: 'Auto',
        opts: [
            'Auto',
            '1/50',
            '1/55',
            '1/60',
            '1/80',
            '1/100',
            '1/110',
            '1/120',
            '1/125',
            '1/160',
            '1/200',
            '1/240',
            '1/250',
            '1/320',
            '1/400',
            '1/500',
            '1/640',
            '1/800',
            '1/1000',
            '1/1250',
            '1/1600',
        ],
        all: [],
    },
    sht_operation: {
        code: 0,
        desc: 'string',
        key: 'sht_operation',
        type: 1,
        ro: 0,
        value: 'Angle',
        opts: ['Speed', 'Angle'],
        all: [],
    },
    dual_iso: { code: -1, desc: 'Key is not supported', msg: '' },
    ae_freeze: {
        code: 0,
        desc: 'string',
        key: 'ae_freeze',
        type: 1,
        ro: 0,
        value: 'Unlock',
        opts: ['Unlock', 'Lock'],
        all: [],
    },
    live_ae_fno: {
        code: 0,
        desc: 'string',
        key: 'live_ae_fno',
        type: 3,
        ro: 1,
        value: 'F3.5',
    },
    live_ae_iso: {
        code: 0,
        desc: 'string',
        key: 'live_ae_iso',
        type: 3,
        ro: 1,
        value: '12800',
    },
    live_ae_shutter: {
        code: 0,
        desc: 'string',
        key: 'live_ae_shutter',
        type: 3,
        ro: 1,
        value: '1/100',
    },
    live_ae_shutter_angle: {
        code: 0,
        desc: 'string',
        key: 'live_ae_shutter_angle',
        type: 3,
        ro: 1,
        value: '180°',
    },
    wb: {
        code: 0,
        desc: 'string',
        key: 'wb',
        type: 1,
        ro: 0,
        value: 'Manual',
        opts: [
            'Auto',
            'Incandescent',
            'Cloudy',
            'D10000',
            'Fluorescent',
            'Daylight',
            'Shade',
            'Manual',
        ],
        all: [],
    },
    mwb: {
        code: 0,
        desc: 'string',
        key: 'mwb',
        type: 2,
        ro: 0,
        value: 3600,
        min: 2300,
        max: 30000,
        step: 100,
    },
    tint: {
        code: 0,
        desc: 'string',
        key: 'tint',
        type: 2,
        ro: 0,
        value: 0,
        min: -100,
        max: 100,
        step: 1,
    },
    wb_priority: {
        code: 0,
        desc: 'string',
        key: 'wb_priority',
        type: 1,
        ro: 1,
        value: 'White',
        opts: ['Ambiance', 'White'],
        all: [],
    },
    mwb_r: {
        code: 0,
        desc: 'string',
        key: 'mwb_r',
        type: 2,
        ro: 1,
        value: 2068,
        min: 900,
        max: 4096,
        step: 1,
    },
    mwb_g: {
        code: 0,
        desc: 'string',
        key: 'mwb_g',
        type: 2,
        ro: 1,
        value: 1024,
        min: 900,
        max: 4096,
        step: 1,
    },
    mwb_b: {
        code: 0,
        desc: 'string',
        key: 'mwb_b',
        type: 2,
        ro: 1,
        value: 2413,
        min: 900,
        max: 4096,
        step: 1,
    },
    sharpness: {
        code: 0,
        desc: 'string',
        key: 'sharpness',
        type: 1,
        ro: 0,
        value: 'None',
        opts: ['Strong', 'Medium', 'None'],
        all: [],
    },
    contrast: {
        code: 0,
        desc: 'string',
        key: 'contrast',
        type: 2,
        ro: 0,
        value: 55,
        min: 0,
        max: 100,
        step: 1,
    },
    saturation: {
        code: 0,
        desc: 'string',
        key: 'saturation',
        type: 2,
        ro: 0,
        value: 55,
        min: 0,
        max: 100,
        step: 1,
    },
    brightness: {
        code: 0,
        desc: 'string',
        key: 'brightness',
        type: 2,
        ro: 0,
        value: 50,
        min: 0,
        max: 100,
        step: 1,
    },
    lut: {
        code: 0,
        desc: 'string',
        key: 'lut',
        type: 1,
        ro: 0,
        value: 'Rec.709',
        opts: [
            'Rec.709',
            'Z-Log2',
            'Flat',
            'HLG',
            'Concert',
            'Vivi 0',
            'Vivi 1',
            'Vivi 2',
        ],
        all: [
            'Rec.709',
            'Z-Log2',
            'Flat',
            'Concert',
            'Vivi 0',
            'Vivi 1',
            'Vivi 2',
            'HLG',
        ],
    },
    luma_level: {
        code: 0,
        desc: 'string',
        key: 'luma_level',
        type: 1,
        ro: 0,
        value: 'Limited',
        opts: ['Full', 'Limited'],
        all: [],
    },
    vignette: {
        code: 0,
        desc: 'string',
        key: 'vignette',
        type: 1,
        ro: 1,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    send_stream: {
        code: 0,
        desc: 'string',
        key: 'send_stream',
        type: 1,
        ro: 0,
        value: 'Stream1',
        opts: ['Stream0', 'Stream1'],
        all: [],
    },
    primary_audio: {
        code: 0,
        desc: 'string',
        key: 'primary_audio',
        type: 1,
        ro: 0,
        value: 'AAC',
        opts: ['None', 'AAC', 'PCM'],
        all: ['None', 'AAC', 'PCM'],
    },
    audio_channel: {
        code: 0,
        desc: 'string',
        key: 'audio_channel',
        type: 1,
        ro: 0,
        value: 'Microphone',
        opts: [
            'Off',
            'Microphone',
            'XLR',
            'Mic Left + XLR Right',
            'Mic Right + XLR Left',
        ],
        all: [],
    },
    audio_input_gain: {
        code: 0,
        desc: 'string',
        key: 'audio_input_gain',
        type: 2,
        ro: 0,
        value: 0,
        min: -10,
        max: 12,
        step: 2,
    },
    audio_output_gain: {
        code: 0,
        desc: 'string',
        key: 'audio_output_gain',
        type: 2,
        ro: 1,
        value: 0,
        min: 0,
        max: 12,
        step: 3,
    },
    audio_phantom_power: {
        code: 0,
        desc: 'string',
        key: 'audio_phantom_power',
        type: 1,
        ro: 1,
        value: 'Disable',
        opts: ['Disable', 'Enable'],
        all: [],
    },
    ain_gain_type: {
        code: 0,
        desc: 'string',
        key: 'ain_gain_type',
        type: 1,
        ro: 0,
        value: 'Manual',
        opts: ['Auto', 'Manual'],
        all: [],
    },
    tc_count_up: {
        code: 0,
        desc: 'string',
        key: 'tc_count_up',
        type: 1,
        ro: 0,
        value: 'Free Run',
        opts: ['Rec Run', 'Free Run'],
        all: [],
    },
    tc_hdmi_dispaly: {
        code: 0,
        desc: 'string',
        key: 'tc_hdmi_dispaly',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    tc_drop_frame: {
        code: 0,
        desc: 'string',
        key: 'tc_drop_frame',
        type: 1,
        ro: 1,
        value: 'NDF',
        opts: ['DF', 'NDF'],
        all: [],
    },
    assitool_display: {
        code: 0,
        desc: 'string',
        key: 'assitool_display',
        type: 1,
        ro: 0,
        value: 'On',
        opts: ['Off', 'On'],
        all: [],
    },
    assitool_peak_onoff: {
        code: 0,
        desc: 'string',
        key: 'assitool_peak_onoff',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    assitool_peak_color: {
        code: 0,
        desc: 'string',
        key: 'assitool_peak_color',
        type: 1,
        ro: 0,
        value: 'Red',
        opts: ['Red', 'Green', 'Blue', 'Orange', 'Grey'],
        all: [],
    },
    assitool_exposure: {
        code: 0,
        desc: 'string',
        key: 'assitool_exposure',
        type: 1,
        ro: 0,
        value: 'Disable',
        opts: ['Disable', 'False Color', 'Zebra', 'Monochrome', 'Blue Only'],
        all: [],
    },
    assitool_zera_th1: {
        code: 0,
        desc: 'string',
        key: 'assitool_zera_th1',
        type: 2,
        ro: 0,
        value: 100,
        min: 55,
        max: 100,
        step: 5,
    },
    assitool_zera_th2: {
        code: 0,
        desc: 'string',
        key: 'assitool_zera_th2',
        type: 2,
        ro: 0,
        value: 0,
        min: 0,
        max: 50,
        step: 5,
    },
    ssid: { code: 0, desc: 'string', key: 'ssid', type: 3, ro: 0, value: 'E2' },
    flicker: {
        code: 0,
        desc: 'string',
        key: 'flicker',
        type: 1,
        ro: 0,
        value: '50Hz',
        opts: ['60Hz', '50Hz'],
        all: [],
    },
    video_system: {
        code: 0,
        desc: 'string',
        key: 'video_system',
        type: 1,
        ro: 0,
        value: 'PAL',
        opts: ['NTSC', 'PAL', 'CINEMA'],
        all: [],
    },
    wifi: {
        code: 0,
        desc: 'string',
        key: 'wifi',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: ['Off', 'On'],
        all: [],
    },
    battery: {
        code: 0,
        desc: 'string',
        key: 'battery',
        type: 2,
        ro: 1,
        value: 100,
        min: 0,
        max: 100,
        step: 1,
    },
    led: {
        code: 0,
        desc: 'string',
        key: 'led',
        type: 1,
        ro: 0,
        value: 'On',
        opts: ['Off', 'On'],
        all: [],
    },
    lcd_backlight: {
        code: 0,
        desc: 'string',
        key: 'lcd_backlight',
        type: 2,
        ro: 0,
        value: 50,
        min: 10,
        max: 100,
        step: 10,
    },
    hdmi_fmt: {
        code: 0,
        desc: 'string',
        key: 'hdmi_fmt',
        type: 1,
        ro: 1,
        value: 'Auto',
        opts: ['Auto'],
        all: [],
    },
    hdmi_osd: {
        code: 0,
        desc: 'string',
        key: 'hdmi_osd',
        type: 1,
        ro: 0,
        value: 'On',
        opts: ['Off', 'On'],
        all: [],
    },
    usb_device_role: {
        code: 0,
        desc: 'string',
        key: 'usb_device_role',
        type: 1,
        ro: 0,
        value: 'Mass storage',
        opts: [
            'Host',
            'Mass storage',
            'Network',
            'Serial',
            'PTP',
            'USB Camera',
        ],
        all: [],
    },
    uart_role: {
        code: 0,
        desc: 'string',
        key: 'uart_role',
        type: 1,
        ro: 0,
        value: 'Pelco D',
        opts: ['Controller', 'Pelco D', 'Multiplexer', 'unknown'],
        all: [],
    },
    auto_off: {
        code: 0,
        desc: 'string',
        key: 'auto_off',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: ['Off', '30s', '1 min', '2 min', '4 min', '8 min', '15 min'],
        all: [],
    },
    auto_off_lcd: { code: -1, desc: '', msg: '' },
    sn: {
        code: 0,
        desc: 'string',
        key: 'sn',
        type: 3,
        ro: 1,
        value: '441A0070319',
    },
    desqueeze: {
        code: 0,
        desc: 'string',
        key: 'desqueeze',
        type: 1,
        ro: 0,
        value: 'H 1x',
        opts: [
            'H 1x',
            'H 1.33x',
            'H 1.5x',
            'H 1.8x',
            'H 2x',
            'V 1x',
            'V 1.33x',
            'V 1.5x',
            'V 1.8x',
            'V 2x',
        ],
        all: [],
    },
    multiple_mode: {
        code: 0,
        desc: 'string',
        key: 'multiple_mode',
        type: 1,
        ro: 1,
        value: 'single',
        opts: ['single', 'master', 'slave'],
        all: [],
    },
    multiple_id: {
        code: 0,
        desc: 'string',
        key: 'multiple_id',
        type: 2,
        ro: 1,
        value: 255,
        min: 0,
        max: 32,
        step: 1,
    },
    photosize: {
        code: 0,
        desc: 'string',
        key: 'photosize',
        type: 1,
        ro: 0,
        value: '8M',
        opts: ['8M'],
        all: [],
    },
    photo_q: {
        code: 0,
        desc: 'string',
        key: 'photo_q',
        type: 1,
        ro: 0,
        value: 'JPEG',
        opts: ['JPEG', 'RAW', 'HEIF'],
        all: [],
    },
    burst: {
        code: 0,
        desc: 'string',
        key: 'burst',
        type: 1,
        ro: 0,
        value: 'Off',
        opts: [],
        all: [],
    },
    max_exp: {
        code: 0,
        desc: 'string',
        key: 'max_exp',
        type: 1,
        ro: 1,
        value: 'Auto',
        opts: [
            'Auto',
            '1/2s',
            '1/3s',
            '1/4s',
            '1/5s',
            '1/8s',
            '1/10s',
            '1/15s',
            '1/20s',
            '1/25s',
            '1/30s',
            '1/40s',
            '1/50s',
            '1/60s',
            '1/80s',
            '1/100s',
            '1/125s',
            '1/160s',
            '1/200s',
            '1/250s',
            '1/320s',
        ],
        all: [],
    },
    shoot_mode: {
        code: 0,
        desc: 'string',
        key: 'shoot_mode',
        type: 1,
        ro: 1,
        value: 'Program AE',
        opts: [
            'Program AE',
            'Aperture priority',
            'Shutter priority',
            'Manual mode',
        ],
        all: [],
    },
    drive_mode: { code: -1, desc: '', msg: '' },
    photo_tl_interval: {
        code: 0,
        desc: 'string',
        key: 'photo_tl_interval',
        type: 2,
        ro: 1,
        value: 5000,
        min: 5000,
        max: 3600000,
        step: 1000,
    },
    photo_tl_num: {
        code: 0,
        desc: 'string',
        key: 'photo_tl_num',
        type: 2,
        ro: 1,
        value: 1,
        min: 1,
        max: 99999,
        step: 1,
    },
    photo_self_interval: { code: -1, desc: '', msg: '' },
};