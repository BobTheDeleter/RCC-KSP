<script>
    import Graph from "./displayTypes/Graph.svelte"

    export let latestPacket

</script>

<section class="section">
    <Graph name = "Altitude"  xLabel = "Time" yLabel = "Altitude (m)" bind:currentValX = {latestPacket.mTime} bind:currentValY = {latestPacket.alt}/>
    <Graph name = "Surface Velocity"  xLabel = "Time" yLabel = "Velocity (m/s)" bind:currentValX = {latestPacket.mTime} bind:currentValY = {latestPacket.surV}/>
    <Graph />
    <Graph />

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
            grid-template-rows: auto auto auto auto;
    }
</style>