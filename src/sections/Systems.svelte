<script>
    import Toggle from "./modules/displays/Toggle.svelte"
    import Label from "./modules/displays/Label.svelte"


    export let latestPacket
    latestPacket.rcs = 1
</script>

<section class="section">
    <Label>Systems</Label>
    <hr>
    <div class="toggle-grid">
        <Toggle name = "RCS" bind:currentVal = {latestPacket.systems.rcs} />
        <Toggle name = "Brakes" bind:currentVal = {latestPacket.systems.brake} />
        <Toggle name = "Gear" bind:currentVal = {latestPacket.systems.gear} />
        <Toggle name = "Lights" bind:currentVal = {latestPacket.systems.light} />
        <Toggle name = "SAS" bind:currentVal = {latestPacket.systems.sas} />
    </div>
</section>

<style>
    section {
        grid-row-start: 6;
        grid-row-end: 8;
        grid-column-start: 1;
        grid-column-end: 1;
    }

    .toggle-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: .5em;
    }
</style>