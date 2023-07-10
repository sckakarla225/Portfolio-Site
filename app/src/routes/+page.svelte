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
      <a href="/images/resume.pdf" download="resume.pdf" target="_blank">
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
      <img src="/images/profilepic2.jpeg" alt="Profile Pic" class="rounded-md shadow-lg w-96 h-96" />
    </div>
    <div class="flex flex-col">
      <h1 class="font-bold text-white text-4xl">
        Entrepreneur and coder with a love for all things <p class="font-bold text-orange-300 text-4xl">entertainment.</p>
      </h1>
      <p class="text-white font-normal text-lg mt-8">
        Hi! My name is Samhith Kakarla. I'm a rising sophomore at Cornell University studying
        Hotel Administration and Mathematics. 
      </p>
      <p class="text-white font-normal text-lg mt-4">
        Following my tenure of running a successful event entertainment business, I plan on 
        exploring ways to use technology and finance to launch bold and exciting innovations
        within the hospitality and entertainment sector, changing the way service-providers across
        the globe build their businesses.
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
