<script lang="ts">
    export let onClick: () => Promise<Response>;
    export let text: string;
    export let result: unknown = undefined;
    export let onMouseUp: () => Promise<Response> | void = () => {};
</script>

<div>
    <button
        on:mousedown={async () => {
            const data = await onClick();
            const json = await data.json();
            result = json;
            return json;
        }}
        on:mouseup={async () => {
            console.log("onmouseup")
            await onMouseUp();
        }}>
        <span>{text}</span>
    </button>
</div>
