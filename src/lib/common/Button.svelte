<script lang="ts">
    export let onClick: () => Promise<Response>;
    export let text: string;
    export let result: unknown = undefined;
</script>

<section>
    <button
        on:click={async () => {
            const data = await onClick();
            const json = await data.json();
            console.log('result', json);
            result = json;
            return json;
        }}>
        <span>{text}</span>
    </button>
</section>
