<script>
    import { onMount } from "svelte"
    import Chart from "chart.js/auto/auto.esm" 
    
    export let name = "Graph"
    export let currentValX
    export let currentValY
    export let xLabel
    export let yLabel


    const data = {
        labels: [],
        datasets: [{
                    data: []
        }],
        update: x => x,
    }

    let chartCanvas
    let chart = {
        data: data,
        update: x => x,
    }

    onMount(() => {
        const style = getComputedStyle(chartCanvas)
        const globalColors = {
            dark: style.getPropertyValue("--dark"),
            light: style.getPropertyValue("--light"),
            highlight: style.getPropertyValue("--highlight"),
            bg: style.getPropertyValue("--bg"),
            border: style.getPropertyValue("--border"),
        }

        const config = {
            type: "line",
            data: data,

            options: {
                responsive: true,
                maintainAspectRatio: false,

                elements: {
                    point: {radius:0},
                    line: {
                        borderColor: globalColors.light
                    }   
                },

                scales: {
                    xAxis: {
                        title: {
                            display: true,
                            text: xLabel,
                            color: globalColors.highlight,
                        },
                        ticks: {
                            color: globalColors.highlight,
                        }
                    },
                    yAxis: {
                        title: {
                            display: true,
                            text: yLabel,
                            color: globalColors.highlight,
                        },
                        ticks: {
                            color: globalColors.highlight,
                        }
                    }
                },

                plugins: {
                    legend: {display:false},
                    title: {
                        display: true,
                        text: name,
                        color: globalColors.highlight,

                    }
                }
            }
        }

        chart = new Chart(chartCanvas, config)
    })

    $: {
        addData(chart, Math.round(currentValX), currentValY)
    }

    function addData(chart, x, y) {
        chart.data.labels.push(x)
        chart.data.datasets[0].data.push(y)
        chart.update()
    }

</script>

<section class="graph">
    <canvas bind:this={chartCanvas}></canvas>
</section>

<style>
    section {
        position: relative;
    }

    canvas {
        width: auto;
        height: auto;
        background-color: var(--dark);
        border-color: var(--bg);
        border-radius: .25em;
    }
</style>