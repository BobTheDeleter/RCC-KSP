<script>
    import Text from "./modules/displays/Text.svelte"
    import Label from "./modules/displays/Label.svelte"

    export let latestPacket
    latestPacket.status.name = "Debug(debug)"
</script>

<section class="section">
    <Label>Status</Label>
    <hr>
    <div class="text-grid">
        <Text name = "Connection" bind:currentVal = {latestPacket.status.pause} parser = {p => {
            if (p === 0) {
            return "Connected"
            } else if (p === 1) {
                return "Paused"
            } else {
                return "Connection error!"
            }
        }}/>
        <Text name = "Vessel Name" bind:currentVal = {latestPacket.status.name} parser = {n => n.split("(")[1].split(")")[0]}/>
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