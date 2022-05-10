<script>
    import Toggle from "./modules/displays/Toggle.svelte"
    import Text from "./modules/displays/Text.svelte"

    export let latestPacket
</script>

<section class="section">
    <div class="toggle-grid">
        <Toggle name = "RCS" bind:currentVal = {latestPacket.rcs} />
        <Toggle name = "Brakes" bind:currentVal = {latestPacket.brake} />
        <Toggle name = "Gear" bind:currentVal = {latestPacket.gear} />
        <Toggle name = "Lights" bind:currentVal = {latestPacket.light} />
        <Toggle name = "SAS" bind:currentVal = {latestPacket.sas} />
    </div>
    
    <div class="text-grid">
        <Text name = "Current Body" bind:currentVal = {latestPacket.body} />
        <Text name = "Semimajor Axis" bind:currentVal = {latestPacket.sma}/>
        <Text name = "Longitude of Ascending Node" bind:currentVal = {latestPacket.lan}/>
        <Text name = "Argument of Periapsis" bind:currentVal = {latestPacket.argP}/>
        <Text name = "Inclination" bind:currentVal = {latestPacket.inc}/>
    </div>
</section>

<style>
    section {
        grid-row-start: 6;
        grid-row-end: 8;
        grid-column-start: 1;
        grid-column-end: 5;
        display: inline-flex;
    }

    .toggle-grid {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .text-grid {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    }
</style>