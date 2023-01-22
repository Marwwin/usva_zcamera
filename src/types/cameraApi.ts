export interface CameraApiResponse {
    code: number;
    desc: string;
    msg?: string;
    key?: string;
    type?: number;
    ro?: number;
    opts?: string[];
    min?: number;
    max?: number;
    step?: number;
    value?: string | number;
    files?: string[];
    w?: number;
    h?: number;
    vts?: number;
    vcnt?: number;
    dur?: number;
    enable?: number;
    r?: number;
    gr?: number;
    gb?: number;
    b?: number;
}
