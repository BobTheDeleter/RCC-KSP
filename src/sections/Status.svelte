<script>
    import Text from "./modules/displays/Text.svelte"
    import Label from "./modules/displays/Label.svelte"

    export let latestPacket
    latestPacket["name"] = "Debug(debug)"
    $: (latestPacket) => {
        console.log(latestPacket)
    }
</script>

<section class="section">
    <Label text="Status" />
    <hr>
    <div class="text-grid">
        <Text name = "Connection" bind:currentVal = {latestPacket.pause} parser = {c => {
            if (c == 0) {
            return "Connected"
            } else if (c == 1) {
                return "Paused"
            } else {
                return "Connection error!"
            }
        }}/>
        <Text name = "Vessel Name" bind:currentVal = {latestPacket.name} parser = {n => n.split("(")[1].split(")")[0]}/>
    </div>
    

</section>

<style>
    section {
        grid-column-start: 2;
        grid-column-end: 3;
    }

    .text-grid {
        display: grid;
        grid-template-columns: auto auto auto;
    }
</style>