<script>
    export let currentVal = 0
    export let name

    // let img = "static/icons/toggleOff.png"
    // let textColor = "--highlight"
    // let icon

    // $: {
    //     img = currentVal? "static/icons/toggleOn.png":"static/icons/toggleOff.png"
    //     textColor = currentVal? "--dark":"--highlight"
    // }
</script>

<section>
        <!-- <img src={img} alt={name+" is "+(currentVal? "on":"off")} bind:this = {icon}> -->
    <div class="bg" style="background-color: {currentVal? "var(--highlight)":"var(--dark)"};">
        <p style="color: {currentVal? "var(--dark)":"var(--highlight)"}; padding-left: 0; position: absolute;"><b>{name}</b></p>
    </div>
</section>

<style>
    section {
        text-align: center;
        font-size: large;
        overflow: hidden;
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bg {
        width: 5em;
        height: 5em;
        border-radius: 20%;
    }
</style>
