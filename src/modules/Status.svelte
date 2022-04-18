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

<section>
    <Label text="Ship Status" />
    <hr color="darkgrey" width="90%">
    <Text name = "Connection" bind:currentVal = {latestPacket.p} parser = {conStr}/>
    <div class="toggle-grid">
        <Toggle name = "RCS" bind:currentVal = {latestPacket.r} />
        <Toggle name = "Brakes" bind:currentVal = {latestPacket.b} />
        <Toggle name = "Gear" bind:currentVal = {latestPacket.g} />
        <Toggle name = "Lights" bind:currentVal = {latestPacket.l} />
        <Toggle name = "SAS" bind:currentVal = {latestPacket.s} />
    </div>
</section>

<style>
    section {
        grid-column-start: 1;
        grid-column-end: 2;
        border-style: solid;
        border-color: grey;
        border-radius: .5em;
        border-width: .2em;
    }

    .toggle-grid {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    }
</style>