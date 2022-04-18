<script>
    import { onMount } from "svelte"

    export let currentVal
    export let name

    let img
    let textColor
    let icon

    $: (currentVal) => {
        if (icon) {
            img = currentVal? "static/icons/toggleOn.png":"static/icons/toggleOff.png"
            textColor = currentVal? "black":"darkgrey"
        }
    }

    onMount(() => {
        img = currentVal? "./static/icons/toggleOn.png":"static/icons/toggleOff.png"
        textColor = currentVal? "black":"darkgrey"
    })
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
        font-size: small;
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
