export interface Settings {
    code?: number;
    desc?: string;
    key?: string;
    type?: number;
    ro?: number;
    opts?: string[];
    min?: number;
    max?: number;
    step?: number;
    value: string | number;
}

export interface ChoiseSettings extends Settings {
    opts: string[];
}

export interface RangeSettings extends Settings {
    min: number;
    max: number;
    step: number;
}
