<script lang="ts">

    let media:string[] = [
        'https://tas4.b-cdn.net/media/An%20interior%20design%20layout%20of%20an%20office%20space%20created%20in%20Vectorworks.%20The%20design%20includes%20workstation_1720140907450.png',
        'https://tas4.b-cdn.net/media/A%203D%20rendered%20scene%20created%20using%20Poser%2C%20featuring%20a%20realistic%20human%20character%20in%20a%20dynamic%20pose%2C%20we_1720044661779.png',
        'https://tas4.b-cdn.net/media/Antonia-2-1-klein_1720044410158.png',
        'https://tas4.b-cdn.net/media/A%20detailed%203D%20model%20of%20a%20fantasy%20character%20with%20intricate%20textures%20and%20realistic%20skin%20details%20create_1720029472855.png',
        'https://tas4.b-cdn.net/media/A%20voxel%20art%20scene%20of%20a%20quaint%20village%20with%20cottages%2C%20trees%2C%20and%20a%20cobblestone%20path%20created%20in%20Magica_1719965745889.png',
        'https://tas4.b-cdn.net/media/A%20real-life%20example%20of%20Adobe%20Premiere%20Pro%20being%20used%20to%20edit%20a%20music%20video.%20The%20interface%20shows%20the%20_1719881201823.png',
        'https://tas4.b-cdn.net/media/A%20simple%20and%20colorful%20example%20of%20a%20wheelchair%20model%20created%20in%203D%20Slash%2C%20showcasing%20basic%20geometric%20_1719873620568.png',
        'https://tas4.b-cdn.net/media/A%20highly%20detailed%203D%20model%20of%20a%20futuristic%20soldier%20in%20a%20colorful%20and%20intricate%20armor%20suit%20in%203D%20coat_1719866857180.png',
    ];
</script>

<div class="w-screen bg-gray-900 p-32">
    <div class="flex">
        <!-- Use For each loop for bonus -->
        {#each media as floppa, index}
            <img src={floppa} alt="test" class=""/>
        {/each}
    </div>
</div>
