<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let video1Element: HTMLVideoElement;
    let video2Element: HTMLVideoElement;
    let currentVideoIndex = 0;
    let showVideo1 = true;

    const videoSources = ['/animatedbackground.mp4', '/animatedbackground2.mp4'];
    const stopTime = 4; // Time in seconds to stop the first video

    onMount(() => {
        video1Element.addEventListener('timeupdate', () => {
            const currentTime = video1Element.currentTime;
            if (currentTime >= stopTime && currentVideoIndex === 0) {
                switchVideos();
            }
        });
    });

    function switchVideos() {
        showVideo1 = false;
        video2Element.src = videoSources[1];
        video2Element.play();
        currentVideoIndex = 1;
    }
</script>


{#if showVideo1}
    <video
        bind:this={video1Element}
        autoplay
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover -z-10"
        transition:fade={{ duration: 2000 }}
    >
        <source src={videoSources[0]} type="video/mp4" />
    </video>
{:else}
    <video
        bind:this={video2Element}
        autoplay
        muted
        playsinline
        loop
        class="absolute inset-0 w-full h-full object-cover -z-10"
        transition:fade={{ duration: 2000 }}
    >
        <source src="" type="video/mp4" />
    </video>
{/if}

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>