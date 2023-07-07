<script>
  import Icon from '@iconify/svelte';

  import Venture from '../components/Venture.svelte';
  import Project from '../components/Project.svelte';
  import Interests from '../components/Interests.svelte';

</script>

<!-- HEADER -->

<nav class= "border-gray-200 bg-zinc-900">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6 pt-10">
    <div class="flex flex-row items-center justify-between">
      <!-- <a href="/" class="flex items-center">
        <img class="" alt="Samhith Kakarla Logo" width={40} height={40} />
      </a> -->
      <p class=" font-semibold text-white ml-3 text-lg">Samhith Kakarla</p>
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

<div class="bg-zinc-900 min-h-screen px-60">
  
  <!-- ABOUT ME  -->
  <div class="grid grid-cols-2 pt-20 items-center">
    <div class="flex flex-col">
      <img src="/images/profilepic.jpg" alt="Profile Pic" class="rounded-md shadow-lg w-96 h-96" />
    </div>
    <div class="flex flex-col">
      <h1 class="font-bold text-white text-3xl">Headline...</h1>
      <p class="text-white font-light text-lg mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p class="text-white font-light text-lg mt-4">
        Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum.
      </p>
    </div>
  </div>
  <!-- PRIOR VENTURE + PROJECTS -->
  <div class="grid grid-cols-2 pt-10">
    <Venture />
    <Project />
  </div>
  <!-- INTERESTS -->
  <Interests />
</div>

<!-- FOOTER  -->

<footer class="bg-zinc-900 p-8">
  <div class="w-full mx-auto max-w-screen-xl p-4 text-center">
    <span class="text-md text-white">© 2023 <a href="https://samhithkakarla.com/" class="hover:underline">Samhith Kakarla</a>. All Rights Reserved.
    </span>
  </div>
</footer>
