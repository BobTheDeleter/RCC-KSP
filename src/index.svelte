<svelte:head>
    <title>RCC-KSP</title>
</svelte:head>

<script>
    import Status from "./sections/Status.svelte"
    import Display from "./sections/Display.svelte"
    import Vessel from "./sections/Vessel.svelte"
    import VesselNP from "./sections/VesselNP.svelte"
    import Mission from "./sections/Mission.svelte"
    import Logo from "./sections/Logo.svelte"

    const design = true
    const debug = true

    let reqs = {
        status: [
            "pause=p.paused",
            "name=v.name",
        ],
        vessel: [
            "alt=v.altitude",
            "ter=v.heightFromTerrain",
            "surV=v.surfaceVelocity",
            "angV=v.angularVelocity",
            "orbV=v.orbitalVelocity",
        ],
        vesselnp: [
            "rcs=v.rcsValue",
            "sas=v.sasValue",
            "light=v.lightValue",
            "brake=v.brakeValue",
            "gear=v.gearValue",
            "atmoD=v.atmosphericDensity",
            "sma=o.sma",
            "ecc=o.eccentricity",
            "inc=o.inclination",
            "anomTrue=o.trueAnomaly",
            "longDN=o.lan",
            "argP=o.argumentOfPeriapsis",
            "gee=v.geeForce",
            "body=v.body",
        ],
        mission: [
            "met=v.missionTime",
            "mTime=v.missionTime",
        ],
        set: (section, value) => reqs[section] = value,
        add: (section, val) => reqs[section].push(val),
        remove: (section, val) => reqs[section] = reqs[section].filter(i => i != val)
    }

    $: (reqs) => reqStrs = {
        status: reqs.status.join("&"),
        vessel: reqs.vesselnp.join("&"),
        vesselnp: reqs.vesselnp.join("&"),
        misison: reqs.mission.join("&"),
    } 

    let latestPacket = {}

    async function fetchData() {
        for (const str in reqStrs) {
            const response = await fetch(`http://127.0.0.1:8085/telemachus/datalink?${reqStrs[str]}`)
            .then(r => r.json())
            .then(r => latestPacket[str] = r)
        }
    }

    if (!design) {let requestLoop = setInterval(fetchData, 1000)}
</script>

<body>
    <section class="component-grid">
        <Status bind:latestPacket />
        <Logo/>
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
        --dark: #313f86;
        --light: #1791DE;
        --highlight: #5BDEF0;
    }
    .component-grid {
        display: grid;
        grid-template-columns: 15% 15% 35% 35%;
        grid-template-rows: auto auto auto auto auto auto;
        gap: 1em;
        width: 100vw;
        height: 100vh;
        background-color: var(--bg);
        overflow: hidden;
    }

    body {
        margin: 0;
        padding: 0;
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
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