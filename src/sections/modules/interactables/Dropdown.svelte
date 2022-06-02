<script>
    import Button from "./Button.svelte"

    export let items
    export let itemNameParser

    export let selection

    let isDown = false
</script>

<section>
    <Button func={() => isDown = !isDown}><slot></slot></Button>
    <div class="dropdown-content" style="display: {isDown? "block":"none"};">
        {#each items as item, index}
            <Button  func={() => {selection = index; isDown = false}}>{itemNameParser(item)}</Button>
        {/each}
    </div>
</section>

<style>
    .dropdown-content {
        display: none;
        z-index: 1;
    }
</style>