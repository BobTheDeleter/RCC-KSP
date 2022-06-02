<script>
    import LineGraph from "./modules/displays/Graphs/LineGraph.svelte"
    import Label from "./modules/displays/Label.svelte"

    export let latestPacket
</script>

<section class="section">
    <Label>Vessel</Label>
    <hr>
    <LineGraph name = "Altitude"  xLabel = "Time" yLabel = "Altitude (m)" bind:currentValX = {latestPacket.mission.met} bind:currentValY = {latestPacket.vessel.alt}/>
    <LineGraph name = "Surface Velocity"  xLabel = "Time" yLabel = "Velocity (m/s)" bind:currentValX = {latestPacket.mission.met} bind:currentValY = {latestPacket.vessel.surV}/>
    <LineGraph name = "Orbital Velocity" xLabel = "Time" yLabel = "Velocity (m/s)" bind:currentValX = {latestPacket.mission.met} bind:currentValY = {latestPacket.vessel.orbV}/>
</section>

<style>
    section {
            grid-row-start: 2;
            grid-row-end: 6;
            grid-column-start: 1;
            grid-column-end: 4;
            overflow: hidden;
            display: grid;
            gap: .25em;
            grid-template-rows: auto auto auto;
    }
</style>