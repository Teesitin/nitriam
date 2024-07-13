<script>
    let hovering = false;

    function toggleHover() {
    hovering = !hovering;
    }
</script>

<button
    class="relative overflow-hidden px-6 py-2 font-bold transition-all duration-300 ease-in-out transform hover:scale-110 focus:scale-110
        {hovering ? 'text-red-700 border-red-700 border-2 border-opacity-0' : 'border-2 border-red-700 text-red-100 border-opacity-100 rounded-lg'}"
            on:mouseover={toggleHover}
            on:mouseout={toggleHover}
            on:focus={toggleHover}
            on:blur={toggleHover}
        tabindex="0"
        style="box-sizing: border-box;">
    <div class="relative z-10">{hovering ? 'See More' : 'See More'}</div>
</button>