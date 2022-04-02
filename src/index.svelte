<svelte:head>
    <title>RCC-KSP</title>
</svelte:head>

<script>
    
</script>

<html lang="en">
    <head>
        <title>RUI-KSP</title>
        <meta charset="utf-8">
    </head>

    <body>

        <div class="grid-container">
            <div id="status" class="status">status</div>
            <div id="vessel" class="vessel">vessel</div>
            <div id="vessel-non-plottable" class="vessel-non-plottable">vessel-non-plottable</div>
            <div id="mission" class="mission">mission</div>
            <div id="body" class="body">body</div>
            <div id="inputs" class="inputs">inputs</div>
            <div id="game-window" class="game-window">game-window</div>
        </div>
    </body>
</html>

<style>
    .grid-container{
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
    width: 100vw;
    height: 100vh;
    background-color: darkgrey;
}

.grid-container > div{
    background-color: lightgrey;
    text-align: center;
}

.status{
    grid-column-start: 1;
    grid-column-end: 2;
}

.vessel{
    grid-row-start: 2;
    grid-row-end: 6;
}

.vessel-non-plottable{
    grid-row-start: 6;
    grid-row-end: 7;
}

.game-window{
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 7
}
</style>