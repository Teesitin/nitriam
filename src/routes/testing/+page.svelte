<script>
	import { goto } from "$app/navigation";
	import DiveButton from '$lib/components/DiveButton.svelte';
// @ts-ignore
	import FrontPageGallery from '$lib/components/FrontPageGallery.svelte';
	import VideoBackground from '$lib/components/VideoBackground.svelte';

    function increment(){
        goto("/inventory")
    }
</script>


<header class="flex justify-between items-center pt-6 pb-6 bg-gradient-to-r from-blue-950 to-black shadow-md top-0 sticky">
    <div>
        <button class="text-4xl font-bold text-blue-400 pl-32 mb-2" on:click={increment}>
            Lunar
        </button>
    </div>
<nav class="flex items-center gap-12 pl-10">
    <button class="text-blue-200 transition-all duration-500 hover:bg-cyan-500 hover:text-white hover:-inset-2 hover:skew-y-6 ease-in-out hover:scale-125" on:click={increment}>
        Locations
    </button>
    <button class="text-blue-200 transition-all duration-500 hover:bg-cyan-500 hover:text-white hover:-inset-3 hover:-skew-y-3 ease-in-out hover:scale-125" on:click={increment}>
        Projects
    </button>
    <button class="text-blue-200 transition-all duration-500 hover:bg-cyan-500 hover:text-white hover:-inset-6 hover:skew-y-1 ease-in-out hover:scale-125" on:click={increment}>
        Pricing
    </button>
    <button class="text-blue-200 transition-all duration-500 hover:bg-cyan-500 hover:text-white hover:-inset-1 hover:-skew-y-3 ease-in-out hover:scale-125" on:click={increment}>
        Blog
    </button>
</nav>
    <div class="right-element pr-32">
        <DiveButton/>
    <div/>
</header>

<div class="relative w-full h-screen overflow-hidden text-cyan-200 pt-20 pb-60">
    <VideoBackground />
        <div class="flex justify-end h-full">
            <div class="pt-48 pr-12 skew-y-6 -skew-x-12">
                <FrontPageGallery />
            </div>
                <div class="max-w-lg">
                    <div class="w-2/3 text-7xl pr-48 pt-48 pl-12">
                        <div class="animate-pulse 1s font-extralight pb-3 -skew-y-6">Take</div>
                        <div class="animate-pulse 3s text-cyan-300 font-light pb-6 skew-y-6 skew-x-1">the</div>
                        <div class="animate-pulse 6s text-cyan-400 font- pb-12 skew-x-6">deep</div>
                        <div class="animate-pulse 9s font-bold text 22xl text-cyan-600 skew-y-3">Dive</div>
                    </div>
                </div>
            </div>
</div>
