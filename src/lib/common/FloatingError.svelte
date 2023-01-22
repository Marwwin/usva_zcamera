<script lang="ts">
    export let error;
    const { msg, key } = error;
</script>

<article>
    <h1>ERROR: {key}</h1>
    <p>
        {msg}
    </p>
</article>

<style>
    article {
        width: 100px;
        height: 50px;
        position: fixed;
        top: calc(50% - 25px);
        left: calc(50% - 50px);
    }
</style>
