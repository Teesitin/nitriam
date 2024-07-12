<script>
	import { goto } from "$app/navigation";

    let amongus=0;

    function increment(){
        goto("/inventory")
    }

</script>


<div class="bg-gradient-to-r from-gray-800 to-black text-white p-9">
    <div class="w-1/2 text-7xl mb-8">
        <div>Here is</div>
        <div>the <span class="font-bold text-red-700">Future</span></div>
    </div>

    <div class="text-xl w-1/2 mb-8">
        Once upon a time, in a serene meadow surrounded by ancient forests, there lived a unicorn unlike any other.
        This unicorn wasn't your typical graceful and majestic creature—no, this unicorn was edgy, rebellious, and had a penchant for music that rocked the soul.
        With a shimmering coat of midnight blue and a mane that sparkled like starlight, our edgy unicorn would often sneak away from the rest of the herd to a secluded field where wildflowers danced in the breeze.
        It was here, under the canopy of a thousand twinkling stars, that the unicorn indulged in its secret passion: listening to Deftones.
    </div>

    <button class="text-yellow-500 font-bold hover:text-violet-600 hover:scale-125" on:click={increment}>
        More about Solar {amongus}
    </button>
</div>