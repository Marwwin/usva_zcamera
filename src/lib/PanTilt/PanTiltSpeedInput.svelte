<script lang="ts">
  export let speed: number;
</script>

<div>
  <input type="range" name="speed" id="" min="0" max="63" bind:value={speed} />
  <div>Speed: {speed}</div>
</div>
