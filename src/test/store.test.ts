import { assert, describe, expect, it } from 'vitest';
import { cameraSettings } from '../store';

describe('store test', () => {
    it('should create store', () => {
        cameraSettings.setEntry({ key: '0', value: 0 });
        expect(cameraSettings.has('0')).toBeTruthy();
    });
});
