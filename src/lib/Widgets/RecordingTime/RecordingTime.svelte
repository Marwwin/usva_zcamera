<script>

    import { camera } from "../../CameraAPI";

</script>
<div id="record-time">
  {#await camera.getRemainingRecordTime() then remaining }
    Remaining: {remaining}m
  {/await}
</div>

<style>
  #record-time{
    position: absolute;
    top: 95vh;
    left: 5vw;
  }
</style>