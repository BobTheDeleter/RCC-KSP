<svelte:head>
    <title>RCC-KSP</title>
</svelte:head>

<script>
    import Status from "./modules/Status.svelte"
    import GameWin from "./modules/GameWin.svelte"
    import Vessel from "./modules/Vessel.svelte"
    import VesselNP from "./modules/VesselNP.svelte"

    const debug = true
    const reqs = {

    }

    let currentPacket
    function fetchData() {
        const response = fetch(`datalink/${reqs.join("&")}`)
        .then(r => r.json())
        .then(currentPacket = r)
    }
</script>

<section class="grid-container">
    <Status currentPacket={currentPacket}/>

</section>

<style>
    .grid-container{
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
    width: 100vw;
    height: 100vh;
    background-color: darkgrey;
    text-align: center;
}
</style>