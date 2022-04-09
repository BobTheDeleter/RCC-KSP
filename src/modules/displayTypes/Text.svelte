<script>
    export let currentVal
    export let name
    export let parser
</script>

<section>
    <p><b>{name}</b> {parser(currentVal)}</p>
</section>

<style>
    section {
        text-align: left
    }
    p {
        padding-left: 1em
    }
</style>
