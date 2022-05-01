<svelte:head>
    <title>RCC-KSP</title>
</svelte:head>

<script>
    import Status from "./modules/Status.svelte"
    import Display from "./modules/Display.svelte"
    import Vessel from "./modules/Vessel.svelte"
    import VesselNP from "./modules/VesselNP.svelte"
    import Mission from "./modules/Mission.svelte"
    import Version from "./modules/Version.svelte"

    const design = false
    const debug = true

    const reqs = [
        "pause=p.paused",
        "rcs=v.rcsValue",
        "sas=v.sasValue",
        "light=v.lightValue",
        "brake=v.brakeValue",
        "gear=v.gearValue",
        "alt=v.altitude",
        "ter=v.heightFromTerrain",
        "met=v.missionTime",
        "surV=v.surfaceVelocity",
        "angV=v.angularVelocity",
        "orbV=v.orbitalVelocity",
        "name=v.name",
        "gee=v.geeForce",
        "body=v.body",
        "mTime=v.missionTime",
    ]
    const reqStr = reqs.join("&")

    let latestPacket = {}
    reqs.map(req => {
        const name = req.split(".")[1]
        latestPacket[name] = "0"
    })

    async function fetchData() {
        const response = await fetch(`http://127.0.0.1:8085/telemachus/datalink?${reqStr}`)
        .then(r => r.json())
        .then(r => latestPacket = r)
    }

    if (!design) {let requestLoop = setInterval(fetchData, 1000)}
</script>

<body>
    <section class="component-grid">
        <Status bind:latestPacket />
        <Version />
        <Mission />
        <Vessel bind:latestPacket />
        <VesselNP bind:latestPacket />
        <Display bind:latestPacket />
    
    </section>
</body>

<style>
    :root {
        --border: #1C1642;
        --bg: #26618D;
        --dark: #313F86;
        --light: #1791DE;
        --highlight: #5BDEF0;
    }
    .component-grid {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 25% auto auto auto auto 15%;
        gap: 1em;
        width: 100vw;
        height: 100vh;
        background-color: var(--bg);
        overflow: hidden;
    }

    body {
        margin: 0px;
    }

    :global(p) {
        padding-left: 2em;
        color: var(--highlight);
    }

    :global(.section) {
        border-style: solid;
        border-color: var(--border);
        border-radius: .5em;
        border-width: .3em;
    }

    :global(hr) {
        background-color: var(--highlight);
        height: .15em;
        border-style: none;
        width: 95%;
    }
</style>