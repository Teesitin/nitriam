<script>
	import { goto } from "$app/navigation";

    import RedButton from '$lib/components/RedButton.svelte';
    
    import SliderNavigation2 from '$lib/components/SliderNavigation2.svelte';

    function increment(){
        goto("/")
    }
    function databae(){
        goto("/database")
    }
</script>


<header class="flex justify-between items-center pt-6 pb-6 bg-gradient-to-r from-red-950 to-black shadow-md top-0 sticky">
    <div>
        <button class="text-4xl font-bold text-orange-600 pl-32 mb-2" on:click={increment}>
            Solar
        </button>
    </div>
<nav class="flex items-center gap-12 pl-10">
    <button class="text-orange-200 transition-all duration-500 hover:bg-orange-500 hover:text-white hover:-inset-2 hover:skew-y-6 ease-in-out hover:scale-125" on:click={increment}>
        Locations
    </button>
    <button class="text-orange-200 transition-all duration-500 hover:bg-orange-500 hover:text-white hover:-inset-3 hover:-skew-y-3 ease-in-out hover:scale-125" on:click={increment}>
        Projects
    </button>
    <button class="text-orange-200 transition-all duration-500 hover:bg-orange-500 hover:text-white hover:-inset-6 hover:skew-y-1 ease-in-out hover:scale-125" on:click={increment}>
        Pricing
    </button>
    <button class="text-orange-200 transition-all duration-500 hover:bg-orange-500 hover:text-white hover:-inset-1 hover:-skew-y-3 ease-in-out hover:scale-125" on:click={increment}>
        Blog
    </button>
</nav>
    <div class="right-element pr-32">
        <RedButton/>
    <div/>
</header>

<div class="bg-red-background bg-cover bg-center text-red-100 pl-32 pt-20 pb-40">
    <div class="w-2/3 text-7xl mb-24">
        <div class="mb-2">Here is</div>
        <div>my <span class="font-bold text-red-700">Style</span></div>
    </div>
        <div class="text-sm w-1/2 mb-4">
            Once upon a time, in a serene meadow surrounded by ancient forests, there lived a unicorn unlike any other.
            This unicorn wasn't your typical graceful and majestic creature—no, he was challenged by DeLayne, rebellious, and had a penchant to accept challenges.
            He met each challenge with vigor and a sharp wit, his spirit unbroken by the hardships he encountered.
            His journey brought him into the depths of the enchanted forest, a place where the trees whispered secrets of the ancient world, and where every leaf and stone seemed imbued with magic.
        </div>
    <button class="text-orange-400 mb-24 font-bold transition-all duration-500 hover:bg-orange-500 hover:text-white hover:-inset-1 hover:-skew-y-3 ease-in-out hover:scale-125" on:click={databae}>
        More about Solar
    </button>
        <div class="text-4xl w-1/2 pb-24">
            Do you <span class="font-bold text-red-700">like</span> it?
        </div>
    <SliderNavigation2 />
</div>