<script>
    import Dropdown from "./modules/interactables/Dropdown.svelte"

    export let latestPacket

    let camURL = ""
    //TODO: move dropdown into here so creating list items and getting url is easier
</script>

<section class="section">
    <Dropdown buttonText = "Cameras"/>
    <img src="{camURL}" alt="Camera feed">
</section>

<style>
    section {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 6;
    }
</style>