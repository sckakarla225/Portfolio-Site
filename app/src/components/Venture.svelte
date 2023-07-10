<script>
  import Highlights from './Highlights.svelte';
</script>


<div class="flex flex-col mr-5">

  <h1 class="text-white font-semibold text-xl mt-10">PRIOR VENTURE</h1>

  <div class="bg-zinc-700 rounded-md w-full mt-6 shadow-md p-5 flex flex-col">
    <div class="bg-black rounded-md w-full flex flex-row items-center">
      <img src="/images/bubzzlogo.png" alt="" class="w-96 h-96 mx-auto" />
    </div>
    <h1 class="text-white font-semibold text-2xl mt-5">BUBZZ Entertainment</h1>
    <p class="text-white font-normal text-md mt-3">2017 - 2022</p>
    <p class="text-white font-light text-md mt-5">
      Premier DJ entertainment company for social gatherings based in the Triangle Area, NC
    </p>
    <p class="text-white font-light text-md mt-3">DJs ⚬ Lighting ⚬ Video ⚬ Productions</p>
    
    <!-- KEY FACTS -->
    <div class="flex flex-row justify-between items-center mt-10">
      <div class="bg-purple-700 h-20 w-1/3 rounded-md flex flex-row items-center p-5 py-12">
        <div class="flex flex-col mx-auto">
          <h1 class="text-white font-bold text-4xl text-center">
            70+
          </h1>
          <p class="text-white font-semibold text-sm text-center mt-1">EVENTS</p>
        </div>
      </div>
      <div class="bg-purple-700 h-20 w-1/3 mx-5 rounded-md flex flex-row items-center p-5 py-12">
        <div class="flex flex-col mx-auto">
          <h1 class="text-white font-bold text-4xl text-center">
            30+
          </h1>
          <p class="text-white font-semibold text-sm text-center mt-1">VENUES</p>
        </div>
      </div>
      <div class="bg-purple-700 h-20 w-1/3 rounded-md flex flex-row items-center p-5 py-12">
        <div class="flex flex-col mx-auto">
          <h1 class="text-white font-bold text-4xl text-center">
            4
          </h1>
          <p class="text-white font-semibold text-md text-center mt-1">DJs</p>
        </div>
      </div>
    </div>
    <!-- END KEY FACTS -->

    <!-- HIGHLIGHTS -->

    <div class="mt-10">
      <h1 class="text-white font-semibold text-md">HIGHLIGHTS</h1>
      <div class="mt-5">
        <Highlights />
      </div>
    </div>

    <!-- END HIGHLIGHTS -->

  </div>

</div>