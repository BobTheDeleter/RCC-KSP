<svelte:head>
    <title>RCC-KSP</title>
</svelte:head>

<script>
    import Status from "./sections/Status.svelte"
    import Camera from "./sections/Camera.svelte"
    import Vessel from "./sections/Vessel.svelte"
    import VesselNP from "./sections/VesselNP.svelte"
    import Mission from "./sections/Mission.svelte"
    import Logo from "./sections/Logo.svelte"
    import Systems from "./sections/Systems.svelte"

    const design = false
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
        systems: [
            "rcs=v.rcsValue",
            "sas=v.sasValue",
            "light=v.lightValue",
            "brake=v.brakeValue",
            "gear=v.gearValue",
        ],
        vesselnp: [
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
        ],
        set: (section, value) => reqs[section] = value,
        add: (section, val) => reqs[section].push(val),
        remove: (section, val) => reqs[section] = reqs[section].filter(i => i != val)
    }

    $: reqStrs = {
        status: reqs.status.join("&"),
        vessel: reqs.vesselnp.join("&"),
        systems: reqs.systems.join("&"),
        vesselnp: reqs.vesselnp.join("&"),
        mission: reqs.mission.join("&"),
    } 

    let latestPacket = {
        status: {},
        vessel: {},
        systems: {},
        vesselnp: {},
        mission: {},
    }

    async function fetchData() {
        for (const str in reqStrs) {
            const response = await fetch(`http://127.0.0.1:8085/telemachus/datalink?${reqStrs[str]}`)
            .then(r => r.json())
            .then(r => latestPacket[str] = r)
        }
        //cameras: Array<Object(string name, string type, string url)>
        const responseNumeroDos = await fetch(`http://127.0.0.1:8085/telemachus/cameras`)
            .then(r => r.json())
            .then(r => latestPacket.availableCams = r)
    }

    if (!design) {let requestLoop = setInterval(fetchData, 1000)}
</script>

<body>
    <section class="component-grid">
        <Status bind:latestPacket />
        <Logo />
        <Mission />
        <Vessel bind:latestPacket />
        <Systems bind:latestPacket />
        <VesselNP bind:latestPacket />
        <Camera bind:latestPacket />
    
    </section>
</body>

<style>
    :root {
        --light: #26618d;
        --dark: #313f86;
        --highlight: #1791de;
        --bg: #1C1642;
    }
    .component-grid {
        display: grid;
        grid-template-columns: 15% 15% 35% 35%;
        grid-template-rows: auto auto auto auto auto auto;
        gap: 1em;
        width: 96.5vw;
        margin-left: 1vw;
        height: 98vh;
        margin-top: 1vh;
        background-color: var(--bg);
    }

    body {
        background-color: var(--bg);
        margin: 0;
        padding: 0;
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        overflow: hidden;
    }

    :global(p) {
        padding-left: 2em;
        color: var(--highlight);
    }

    :global(hr) {
        background-color: var(--highlight);
        height: .15em;
        border-style: none;
        width: 100%;
    }
</style>