<script>
    export let currentVal = 0
    export let name

    let img = "static/icons/toggleOff.png"
    let textColor = "--highlight"
    let icon

    $: (currentVal) => {
        img = currentVal? "static/icons/toggleOn.png":"static/icons/toggleOff.png"
        textColor = currentVal? "--dark":"--highlight"
        if (icon) {
            
        }
    }
</script>

<section>
    <div>
        <img src={img} alt={name+" is "+(currentVal? "on":"off")} bind:this = {icon}>
        <p style="color: {textColor};"><b>{name}</b></p>
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

    p {
        padding-left: 0;
        position: absolute;
    }
</style>
