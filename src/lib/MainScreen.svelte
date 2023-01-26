<script lang="ts">
  import CameraInformation from './CameraInformation/CameraInformation.svelte';
  import Error from './common/Error.svelte';
  import { camera } from './CameraAPI';
  import FocusWidget from './Widgets/FocusWidget/FocusWidget.svelte';
  import Histogram from './Histogram/Histogram.svelte';
  import ImageTemp from './Histogram/ImageTemp.svelte';
  import PanTilt from './Widgets/PanTilt/PanTilt.svelte';
  import { settings } from './cameraSettings';
  import VideoStream from './VideoStream/VideoStream.svelte';
  import ExposureSettings from './Widgets/ExposureSettings/ExposureSettings.svelte';
  import WorkingMode from './WorkingMode/WorkingMode.svelte';
  import ZoomWidget from './Widgets/ZoomWidget/ZoomWidget.svelte';
  import { cameraSettings } from '../store';
  import ImageSettings from './Widgets/ImageSettings/ImageSettings.svelte';
  import { Events } from '../types/events';
  import TempAndBattery from './Widgets/TempAndBattery/TempAndBattery.svelte';
  import { Errors } from './Errors/Errors';
  import FloatingError from './common/FloatingError.svelte';

  let done = false;
  const additionalSettings = ['temp', 'battery_voltage'];
  async function setSettings() {
      for (const key of Object.keys(settings)) {
          const result = await camera.get(key);
          cameraSettings.setEntry(result);
      }
      for (const key of additionalSettings) {
          cameraSettings.setEntry({ key: key, value: 0 });
      }
      done = true;
  }
  setSettings();

  $: apiErrors = $cameraSettings['errors'];
</script>

<section>
  {#if done}
      {#if !import.meta.env.VITE_CAMERA}
          <Error error={Errors.CAMERA_IP} />
      {:else}
          {#if apiErrors.length > 0}
              {#each apiErrors as e}
                  <FloatingError />
              {/each}
          {/if}
          <div class="module__container">
              <ExposureSettings />
              <TempAndBattery />
              <VideoStream />
              <ZoomWidget />
              <PanTilt />
              <ImageSettings />
              <!-- <CameraInformation />
              <!-- <FocusWidget />-->

              <!-- <WorkingMode />-->
              <!-- <Settings />-->
              <!-- <ImageTemp />-->
          </div>
      {/if}
  {/if}
</section>

<style>
      .module__container {
        display: flex;
        flex-direction: column;
    }
</style>