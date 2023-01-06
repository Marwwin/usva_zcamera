<script>
    import ChoiseSetting from '../../common/ChoiseSetting.svelte';
    import RangeSetting from '../../common/RangeSetting.svelte';
</script>

<ChoiseSetting
    name={'Focus'}
    setting={{
        key: 'focus',
        opts: ['AF', 'MF'],
        value: 'MF',
    }} />
<ChoiseSetting
    name={'Lens Zoom'}
    setting={{
        key: 'lens_zoom',
        opts: ['in', 'out'],
        value: 'in',
    }} />
<ChoiseSetting
name={'AF Lock'}
setting={{
    key: 'af_lock',
    opts: ['lock', 'unlock'],
    value: 'in',
}} />

<RangeSetting
    name={'contrast'}
    setting={{
        key: 'contrast',
        value: 52,
        min: 0,
        max: 100,
        step: 1,
    }} />
