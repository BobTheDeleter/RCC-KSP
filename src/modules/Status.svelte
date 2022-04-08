<script>
    import Text from "./displayTypes/Text.svelte"

    export let currentPacket

    let data = [{"p":0}]
    const req = "p.paused"

    async function update() {
        data.push(currentPacket["p"])
    }

    //const requestLoop = setInterval(get, 200)
</script>

<section class="status">
    <Text currentVal = {data[data.length-1]["p"]} measurement="Paused: "/>
    <button on:click={() => update()}>Update</button>
</section>

<style>
.status{
    grid-column-start: 1;
    grid-column-end: 2;
}
</style>