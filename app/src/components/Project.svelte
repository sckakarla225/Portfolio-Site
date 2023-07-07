<script>
  import Icon from '@iconify/svelte';

  const builtUsingTags = [
    'TypeScript',
    'Python',
    'React.js',
    'FastAPI', 
    'MongoDB',
    'Redis',
    'TensorFlow',
  ]
</script>


<div class="flex flex-col ml-5">

  <h1 class="text-white font-semibold text-xl mt-10">PROJECTS</h1>

  <div class="bg-zinc-700 rounded-md w-full mt-6 shadow-md p-5">
    <img src="/images/autotuneslogo.jpg" alt="" class="rounded-md w-full" />
    <div class="flex flex-row justify-between items-center mt-5">
      <h1 class="text-white font-semibold text-2xl">autotunes.app</h1>
      <Icon 
        icon="radix-icons:open-in-new-window" 
        color="white" 
        class="text-2xl cursor-pointer mr-5"
      />
    </div>
    <p class="text-white font-medium text-md mt-5">
      Organizing your music library directly in Spotify and iTunes with extreme precision using AI.
    </p>
    <ul class="mt-8 mr-10">
      <li class="text-white font-light text-md mb-2">
        ⚫ Create and set custom labels to your playlists to group similar songs
      </li>
      <li class="text-white font-light text-md mb-2">
        ⚫ Define a precise structure for your library to auto-generate playlists
      </li>
      <li class="text-white font-light text-md mb-2">
        ⚫ Automatically update and re-organize your playlists when new songs are added to your library
      </li>
    </ul>
    <div class="flex flex-row flex-wrap mt-12">
      {#each builtUsingTags as tag}
        <div class="rounded-sm bg-red-500 mr-3 mb-5 py-3 px-4">
          <h1 class="text-white text-md font-semibold">{tag}</h1>
        </div>
      {/each}
    </div>
    <h1 class="font-semibold text-white text-md mt-10 mb-5">
      &ast;&ast; Currently in Development &ast;&ast;
    </h1>
  </div>

</div>