<svelte:head>
    <title>RCC-KSP</title>
</svelte:head>

<script>
    import Status from "./modules/Status.svelte"
    import GameWin from "./modules/GameWin.svelte"
    import Vessel from "./modules/Vessel.svelte"
    import VesselNP from "./modules/VesselNP.svelte"
    import Mission from "./modules/Mission.svelte"

    const debug = true
    const design = true

    const reqs = [
        "p=p.paused"
    ]

    let latestPacket = {
        p: 0,
        r: 0,
        s: 0,
        l: 0,
        b: 0,
        g: 0,
    }

    async function fetchData() {
        const response = await fetch(`http://127.0.0.1:8085/telemachus/datalink?${reqs.join("&")}`)
        .then(r => r.json())
        .then(r => latestPacket = r)
    }

    if (!design) {let requestLoop = setInterval(fetchData, 200)}
</script>

<body>
    <section class="component-grid">
        <Status bind:latestPacket />
        <Mission />
        <Vessel bind:latestPacket />
        <VesselNP bind:latestPacket />
        <GameWin bind:latestPacket />
    
    </section>
</body>

<style>
    .component-grid {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 1em;
        width: 100vw;
        height: 100vh;
        background-color: lightgray;
    }

    body {
        margin: 0px;
    }

    :global(p) {
        padding-left: 2em;
    }
</style>