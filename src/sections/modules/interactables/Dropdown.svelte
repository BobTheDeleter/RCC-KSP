<script>
    export let buttonText

    let isDown = false
    function toggleDropdown() {
        isDown = !isDown
    }
</script>

<section>
    <button class="drop-btn" on:click={toggleDropdown}>{buttonText}</button>
    <div class="dropdown-content" style="display: {isDown? "block":"none"};">
        <li>1</li>
        <li>2</li>
        <li>3</li>

    </div>
</section>

<style>
    .dropdown-content {
        display: none;
        z-index: 1;
    }
</style>