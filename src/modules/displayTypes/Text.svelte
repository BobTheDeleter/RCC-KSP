<script>
    export let measurement
    export let currentVal

    $: toDisplay = measurement+currentVal
</script>

<p>{toDisplay}</p>