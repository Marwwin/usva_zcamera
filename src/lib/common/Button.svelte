<script>
    export let onClick
    export let text
</script>

<section>
    <button
        on:click={async () => {
            const result = await onClick()
            console.log('result', result.status)
            return result
        }}>
        <span>{text}</span>
    </button>
</section>
