<script>
    export let func
</script>

<section>
    <button on:click={func}>
        <p><slot></slot></p>
    </button>
</section>

<style>
    button {
        margin: 0;
        border: none;
        color: var(--highlight);
        background-color: var(--dark);
        padding: 0px;
        width: 100%;
    }

    button:active {
        background-color: var(--bg);
    }

    button:hover {
        background-color: var(--light);
    }

    p {
        padding-left: 0;
    }
</style>