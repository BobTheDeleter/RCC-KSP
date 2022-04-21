<script>
    import { onMount } from "svelte"
    import Chart from "chart.js/auto/auto.esm" 
    
    export let name = "Graph"

    let chartCanvas;

    onMount(() => {
        const style = getComputedStyle(chartCanvas)
        const globalColors = {
            dark: style.getPropertyValue("--dark"),
            light: style.getPropertyValue("--light"),
            highlight: style.getPropertyValue("--highlight"),
            bg: style.getPropertyValue("--bg"),
            border: style.getPropertyValue("--border"),
        }

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                        data: [20, 10, 5, 2, 20, 30, 45]
                }]
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
                        //type: "time",
                        ticks: {
                            color: globalColors.highlight,
                        }
                    },
                    yAxis: {
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

        let chart = new Chart(chartCanvas, config)
    })

</script>

<section>
    <canvas bind:this={chartCanvas} id="chart"></canvas>
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