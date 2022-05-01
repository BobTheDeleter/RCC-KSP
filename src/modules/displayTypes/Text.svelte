<script>
    export let currentVal
    export let name
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
