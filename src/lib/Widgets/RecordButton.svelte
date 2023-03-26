<script>
    import { camera } from '../Camera';

    let isRecording = false;

    function handleClick() {
    camera.queryWorkMode().then((response) => {
      // @ts-ignore
      const { msg } = response;
      if (msg === 'rec_ing') {
        camera.startRecord();
      } else if (msg === 'rec_paused') {
        camera.stopRecord();
      }
    });
  }
</script>

<button class="red-button" on:click={handleClick}>
    <slot />
</button>

<style>
    .red-button {
        background-color: red;
        color: white;
        padding: 20px;
        border: 2px solid black;
        border-radius: 50%;
        cursor: pointer;
    }
</style>
