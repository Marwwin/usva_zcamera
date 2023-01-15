<script>
  import Error from "../common/Error.svelte";
</script>

<Error
header={'No Camera Ip Set'}
text={`The ip needs to be declared as the enviroment variable VITE_CAMERA in
a ".env" file, the file should be located in the root folder
Example:VITE_CAMERA=123.123.123.123`} />