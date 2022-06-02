<script>
    import Text from "./modules/displays/Text.svelte"
    import Label from "./modules/displays/Label.svelte"

    export let latestPacket
</script>

<section class="section">
    <Label>Vessel Situation</Label>
    <hr>
    <div class="text-grid">
        <Text bind:currentVal = {latestPacket.vesselnp.body}>Current Body</Text>
        <Text bind:currentVal = {latestPacket.vesselnp.sma}>Semimajor Axis</Text>
        <Text bind:currentVal = {latestPacket.vesselnp.lan}>Longitude of Ascending Node</Text>
        <Text bind:currentVal = {latestPacket.vesselnp.argP}>Argument of Periapsis</Text>
        <Text bind:currentVal = {latestPacket.vesselnp.inc}>Inclination</Text>
    </div>
</section>

<style>
    section {
        grid-row-start: 6;
        grid-row-end: 8;
        grid-column-start: 2;
        grid-column-end: 5;
    }

    .text-grid {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    }
</style>