<script>
    import Dropdown from "./modules/interactables/Dropdown.svelte"
    import Label from "./modules/displays/Label.svelte"

    export let latestPacket
    latestPacket.availableCams = [
        {name:"cam", url:"http://127.0.0.1:8085/telemachus/cameras/TelemachusFlightCamera"},
        {name:"cam", url:"http://127.0.0.1:8085/telemachus/cameras/RPMCamera-ExtCam1"},
    ]
    //update feed
    let feed = {src:null}
    $: feed.src = camUrl

    let cam = 0
    $: camUrl = latestPacket.availableCams[cam].url
</script>

<section class="section">
    <Label>Camera Feed</Label>
    <hr>
    <Dropdown bind:items={latestPacket.availableCams} itemNameParser={v => v.name} bind:selection={cam}>Select</Dropdown> 
    <div class="img-wrapper">
        <img src={camUrl} alt="Camera feed" bind:this={feed}>
    </div>
</section>

<style>
    section {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 6;
    }

    .img-wrapper {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2.5%;
    }

    img {
        min-width: 80%;
        border-radius: 5%;
    }
</style>