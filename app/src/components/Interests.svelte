<script>
  const interests = [
    'Startups', 'Venture Capital', 'Hospitality', 'Entertainment and Recreation', 
    'Live Events', 'Media Production', 'Web and Mobile Development', 
    'Machine Learning', 'Extended Reality and 3D Graphics', 'Embedded Systems'
  ]
</script>


<div class="flex flex-col pb-40 mt-16">

  <h1 class="text-white font-semibold text-xl mt-10 text-center">INTERESTS</h1>

  <div class="rounded-md w-full h-60 mt-6 shadow-md p-5 pt-2">
    <div class="flex flex-row flex-wrap justify-center">
      {#each interests as interest}
        <div class="bg-orange-500 py-3 px-7 flex flex-row items-center rounded-md mr-4 mt-5 hover:bg-orange-400">
          <h1 class="text-white font-medium mx-auto">{interest}</h1>
        </div>
      {/each}
    </div>
  </div>

</div>