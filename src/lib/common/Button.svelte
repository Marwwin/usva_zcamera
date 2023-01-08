<script lang="ts">
    export let onClick: () => Promise<Response>;
    export let text: string;
</script>

<section>
    <button
        on:click={async () => {
            const result = await onClick();
            console.log('result', result.status);
            return result;
        }}>
        <span>{text}</span>
    </button>
</section>
