<script lang="ts">
  export let speed: number;
</script>

<div>
  <input orient="vertical" type="range" name="speed" id="" min="0" max="63" bind:value={speed} />
</div>

<style>
  input{
    -webkit-appearance: slider-vertical;
    appearance: slider-vertical;
    height: 11em;
  }
</style>