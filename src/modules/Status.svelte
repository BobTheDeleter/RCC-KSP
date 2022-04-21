<script>
    import Text from "./displayTypes/Text.svelte"
    import Toggle from "./displayTypes/Toggle.svelte"
    import Label from "./displayTypes/Label.svelte"

    export let latestPacket

    function conStr(con) {
        if (con == 0) {
            return "Connected"
        } else if (con == 1) {
            return "Paused"
        } else {
            return "Connection error!"
        }
    }
</script>

<section class="section">
    <Label text="Ship Status" />
    <hr>
    <div class="text-grid">
        <Text name = "Connection" bind:currentVal = {latestPacket.paused} parser = {conStr}/>
        <Text name = "Vessel Name" bind:currentVal = {latestPacket.name} />
        <Text name = "Current Body" bind:currentVal = {latestPacket.body} />
    </div>
    
    <div class="toggle-grid">
        <Toggle name = "RCS" bind:currentVal = {latestPacket.rcs} />
        <Toggle name = "Brakes" bind:currentVal = {latestPacket.brake} />
        <Toggle name = "Gear" bind:currentVal = {latestPacket.gear} />
        <Toggle name = "Lights" bind:currentVal = {latestPacket.light} />
        <Toggle name = "SAS" bind:currentVal = {latestPacket.sas} />
    </div>
</section>

<style>
    section {
        grid-column-start: 2;
        grid-column-end: 4;
    }

    .toggle-grid {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    }

    .text-grid {
        display: grid;
        grid-template-columns: auto auto auto;
    }
</style>