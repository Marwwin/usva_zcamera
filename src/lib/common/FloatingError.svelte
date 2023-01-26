<script lang="ts">
</script>

<article>
    <slot />
</article>

<style>
    article {
        position: fixed;
        top: calc(50% - 15vh);
        left: calc(50% - 20vw);
        border: 1px solid wheat;
        border-radius: 4em;
        padding: 4em;
    }
</style>
