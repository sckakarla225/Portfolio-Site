<script>
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    let carousel; // for calling methods of the carousel instance
</script>

{#if browser}
  <Carousel
    bind:this={carousel}
  >
    <img src="/images/image1.JPG" alt="" class="w-60 h-60 rounded-md" />
    <img src="/images/image2.jpg" alt="" class="w-60 h-60 rounded-md" />
    <img src="/images/image3.JPG" alt="" class="w-60 h-60 rounded-md" />
    <img src="/images/image4.jpg" alt="" class="w-60 h-60 rounded-md" />
    <img src="/images/image5.JPG" alt="" class="w-60 h-60 rounded-md" />
    <img src="/images/image6.JPG" alt="" class="w-60 h-60 rounded-md" />
    <img src="/images/image7.jpg" alt="" class="w-60 h-60 rounded-md" />
  </Carousel>
{/if}
