export interface Setting {
    code?: number;
    desc?: string;
    key?: string;
    type?: number;
    ro?: number;
    value: string | number;
}

export interface ChoiseSetting extends Setting {
  
    opts: string[];
}

export interface RangeSetting extends Setting {
    min: number;
    max: number;
    step: number;
}
