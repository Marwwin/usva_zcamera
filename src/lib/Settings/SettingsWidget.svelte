<script lang="ts">
    import ChoiseWidget from '../common/widgets/ChoiseWidget.svelte';
    import RangeWidget from '../common/widgets/RangeWidget.svelte';
    import StringWidget from '../common/widgets/StringWidget.svelte';

    export let name;
    export let setting: any;

</script>

{#if setting.type === 1}
    <ChoiseWidget {name} {setting} />
{/if}
{#if setting.type === 2}
    <RangeWidget {name} {setting} />
{/if}
{#if setting.type === 3}
    <StringWidget {name} {setting} />
{/if}

<style>
  :global(.widget){
    margin: 0.25em;
    padding:0.35em;
    border: 1px solid whitesmoke;
    border-radius: 10%;
  }
  :global(.widget h5){
    margin:0.2em
  }
</style>