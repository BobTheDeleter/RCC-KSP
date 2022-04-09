<svelte:head>
    <title>RCC-KSP</title>
</svelte:head>

<script>
    import Status from "./modules/Status.svelte"
    import GameWin from "./modules/GameWin.svelte"
    import Vessel from "./modules/Vessel.svelte"
    import VesselNP from "./modules/VesselNP.svelte"

    const debug = true
    const design = true

    const reqs = [
        "p=p.paused"
    ]

    let latestPacket
    async function fetchData() {
        const response = await fetch(`http://127.0.0.1:8085/telemachus/datalink?${reqs.join("&")}`)
        .then(r => r.json())
        .then(r => latestPacket = r)
    }

    if (!design) {let requestLoop = setInterval(fetchData, 200)}
</script>

<section class="grid-container">
    <Status bind:latestPacket/>

</section>

<style>
    .grid-container{
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
    width: 100vw;
    height: 100vh;
    background-color: lightgray;
    text-align: center;
}
</style>