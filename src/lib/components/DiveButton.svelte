<script>
    import { goto } from "$app/navigation";

    let hovering = false;

    function toggleHover() {
    hovering = !hovering;
    }

    function increment(){
        goto("/")
    }
</script>

<button
    class="relative overflow-hidden px-6 py-2 font-bold transition-all duration-300 ease-in-out transform hover:scale-110 focus:scale-110
        {hovering ? 'text-rose-900 border-rose-900 border-2 border-opacity-0' : 'border-2 border-rose-900 text-blue-200 border-opacity-100 rounded-lg'}"
            on:mouseover={toggleHover}
            on:mouseout={toggleHover}
            on:focus={toggleHover}
            on:blur={toggleHover}
            on:click={increment}
        tabindex="0"
        style="box-sizing: border-box;">
    <div class="relative z-10">{hovering ? 'Ascend' : 'Ascend'}</div>
</button>