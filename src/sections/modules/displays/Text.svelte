<script>
    export let currentVal = "val"
    export let parser = v => v
</script>

<section>
    <p><b><slot></slot></b> {parser(currentVal)}</p>
</section>

<style>
    section {
        text-align: left;
    }
</style>
