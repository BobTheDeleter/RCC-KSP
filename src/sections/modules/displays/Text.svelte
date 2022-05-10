<script>
    export let currentVal = "val"
    export let name = "Text"
    export let parser = v => v
</script>

<section>
    <p><b>{name}</b> {parser(currentVal)}</p>
</section>

<style>
    section {
        text-align: left;
    }
</style>
