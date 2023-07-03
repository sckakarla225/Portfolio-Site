<script>
  import Icon from '@iconify/svelte';

  import Venture from '../components/Venture.svelte';
  import Project from '../components/Project.svelte';
  import Interests from '../components/Interests.svelte';
</script>

<!-- HEADER -->

<nav class= "border-gray-200 bg-zinc-800">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6">
    <div class="flex flex-row items-center justify-between">
      <a href="/" class="flex items-center">
        <img class="" alt="Busking Logo" width={40} height={40} />
      </a>
      <p class="text-white font-bold ml-3 text-lg">Samhith Kakarla</p>
    </div>
    <div class="flex flex-row items-center justify-between">
      <a href="mailto:sck225@cornell.edu" target="_blank">
        <Icon 
          icon="mdi:email" 
          color="white" 
          class="text-3xl cursor-pointer mx-3"
        />
      </a>
      <a href="https://github.com/sckakarla225" target="_blank">
        <Icon 
          icon="mdi:github" 
          color="white" 
          class="text-3xl cursor-pointer mx-3"
        />
      </a>
      <a href="https://linkedin.com/in/samhith-kakarla" target="_blank">
        <Icon 
          icon="mdi:linkedin" 
          color="white" 
          class="text-3xl cursor-pointer mx-3"
        />
      </a>
      <!-- TODO: Change to download resume when its complete -->
      <a href="https://linkedin.com/in/samhith-kakarla" target="_blank">
        <Icon 
          icon="mdi:note-text" 
          color="white" 
          class="text-3xl cursor-pointer mx-3"
        />
      </a>
    </div>
  </div>
</nav>

<!-- MAIN -->

<div class="bg-zinc-800 min-h-screen">
  
  <!-- ABOUT ME  -->

  <!-- PRIOR VENTURE + PROJECTS -->

  <!-- INTERESTS -->

</div>

<!-- FOOTER  -->

<footer class="bg-zinc-800 p-8">
  <div class="w-full mx-auto max-w-screen-xl p-4 text-center">
    <span class="text-md text-white">© 2023 <a href="https://samhithkakarla.com/" class="hover:underline">Samhith Kakarla</a>. All Rights Reserved.
    </span>
  </div>
</footer>
