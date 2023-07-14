<script>
  const interests = [
    'Startups', 'Venture Capital', 'Management and Tech Consulting', 
    'Hospitality Real Estate', 'Entertainment and Recreation', 'Live Events', 
    'Media Production', 'Web and Mobile Development', 
    'Machine Learning', 'Extended Reality and 3D Graphics', 'Embedded Systems'
  ]
</script>


<div class="flex flex-col pb-40 mt-16">

  <h1 class="text-white font-semibold text-xl mt-5 sm:mt-10 text-center">INTERESTS</h1>

  <div class="rounded-md w-full sm:h-60 mt-2 sm:mt-6 p-2 sm:p-5 pt-2">
    <div class="flex flex-row flex-wrap justify-center">
      {#each interests as interest}
        <div class="bg-orange-500 py-2 px-5 sm:py-3 sm:px-7 flex flex-row items-center rounded-md mr-2 mt-3 sm:mr-4 sm:mt-5 hover:bg-orange-400">
          <h1 class="text-white text-center font-medium mx-auto">{interest}</h1>
        </div>
      {/each}
    </div>
  </div>

</div>