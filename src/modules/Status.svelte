<script>
    import Text from "./displayTypes/Text.svelte"

    export let latestPacket = {
        p: 0,
        r: 0,
        s: 0,
        l: 0,
        b: 0,
        g: 0,
    }

    $: {
        data.push({
            "p":latestPacket.p
        })
    }

    function conStr(con) {
        if (con == 0) {
            return "Connected"
        } else if (con == 1) {
            return "Paused"
        } else {
            return "Connection error!"
        }
    }

    function toggleStr(tog) {
        return tog? "ON":"OFF"
    }

    let data = [{"p":0}]
</script>

<section>
    <p><b>Ship Status</b></p>
    <hr color="darkgrey" width="90%">
    <Text name = "Connection" bind:currentVal = {latestPacket.p} parser = {conStr}/>
    <Text name = "RCS" bind:currentVal = {latestPacket.r} parser = {toggleStr}/>
    <Text name = "SAS" bind:currentVal = {latestPacket.s} parser = {toggleStr}/>
    <Text name = "Lights" bind:currentVal = {latestPacket.l} parser = {toggleStr}/>
    <Text name = "Brakes" bind:currentVal = {latestPacket.b} parser = {toggleStr}/>
    <Text name = "Landing gear" bind:currentVal = {latestPacket.g} parser = {toggleStr}/>

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
</style>