<script lang="ts">
    import { goto } from '$app/navigation';

    let activeSlide = 1;

    const slides = [
        { name: 'Day', path: '/inventory' },
        { name: 'Night', path: '/' }
    ];

    function setActive(index: number) {
        activeSlide = index;
        goto(slides[index].path);
    }
</script>

<div class="bg-transparent py-4 flex justify-start">
    <div class="flex space-x-0" style="width: 66.6667%;">
    {#each slides as slide, index (index)}
        <button
        class="py-2 px-4 flex-1 border-b-2 {activeSlide === index ? 'border-blue-500 border-b-4 py-1.5' : 'border-cyan-300 opacity-50 py-2'}"
        style="margin-right: -1px;"
        on:click={() => setActive(index)}>
        {slide.name}
        </button>
    {/each}
    <div class="w-0 border-b-2 border-transparent flex-none"></div>
    </div>
</div>

<style>
    button {
    transition: all 0.3s ease;
    outline: none;
    }
    button:focus {
    outline: none;
    }
    button:last-child {
    margin-right: 0;
    }
</style>
